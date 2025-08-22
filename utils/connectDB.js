import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);
  await client.connect();

  cachedClient = client;
  cachedDb = client.db("everydayFinds");

  return { client: cachedClient, db: cachedDb };
}

export async function connectDB(collectionName) {
  try {
    const { db } = await connectToDatabase();
    return db.collection(collectionName);
  } catch (error) {
    console.error("Error getting collection:", error);
    throw error;
  }
}
