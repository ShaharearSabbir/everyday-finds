"use server";

import { connectDB } from "@/utils/connectDB";
import bcrypt from "bcryptjs";

export const createUser = async (user) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);

  user.role = "user";
  user.createdAt = new Date().toISOString();
  user.password = hashedPassword;

  const collection = await connectDB("users");
  const res = await collection.insertOne(user);
  return res;
};

export const getUser = async (email) => {
  const collection = await connectDB("users");
  const user = collection.findOne({ email: email });
  return user;
};
