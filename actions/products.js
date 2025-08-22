"use server";

import { connectDB } from "@/utils/connectDB";
import { ObjectId } from "mongodb";
import { cache } from "react";

export const addProduct = async (product) => {
  product.createdAt = new Date().toISOString();
  const collection = await connectDB("products");
  const res = await collection.insertOne(product);
  const json = JSON.stringify(res);
  return json;
};

export const getProducts = cache(async () => {
  const collection = await connectDB("products");
  const products = await collection.find().toArray();
  return products;
});

export const getHighlightedProduct = cache(async () => {
  const collection = await connectDB("products");
  const products = await collection.find().limit(4).toArray();
  return products;
});

export const getProductById = cache(async (id) => {
  const collection = await connectDB("products");
  const query = { _id: new ObjectId(id) };
  const product = await collection.findOne(query);
  return product;
});
