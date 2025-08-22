import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "@/actions/user";
import bcrypt from "bcryptjs";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { MongoClient } from "mongodb";

let uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const client = new MongoClient(uri);
const clientPromise = client.connect();

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const user = await getUser(credentials.email);

        if (!user) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (passwordMatch) {
          return {
            name: user.name,
            email: user.email,
            role: user.role,
            image: user.image,
            id: user._id,
          };
        } else {
          return null;
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider !== "credentials") {
        user.role = "user";
      }
      return true;
    },

    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.image = token.image;
        session.user.id = token.id;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "user";
        token.image = user.image || null;
        token.id = user.id || null;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
