import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token;

    const isLoginRoute = req.nextUrl.pathname === "/login";
    const isRegisterRoute = req.nextUrl.pathname === "/register";
    const isDashboardRoute = req.nextUrl.pathname.startsWith("/dashboard");

    if (token && (isLoginRoute || isRegisterRoute)) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    if (isDashboardRoute) {
      if (!token || token.role !== "user") {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isLogin = req.nextUrl.pathname === "/login";
        const isRegister = req.nextUrl.pathname === "/register";

        if (!token && (isLogin || isRegister)) {
          return true;
        }

        return !!token;
      },
    },
  }
);

export const config = {
  // Middleware should run on these paths
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
