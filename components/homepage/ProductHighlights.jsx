import { getHighlightedProduct } from "@/actions/products";
import React from "react";
import ProductCard from "../ProductCard";
import Section from "../ui/Section";
import Link from "next/link";

const ProductHighlights = async () => {
  const products = await getHighlightedProduct();
  return (
    <Section className="my-32">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Highlights
        </h2>
        <Link
          href="/products"
          className="btn btn-primary btn-outline rounded-lg"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Section>
  );
};

export default ProductHighlights;
