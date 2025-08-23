import { getProducts } from "@/actions/products";
import ProductCard from "@/components/ProductCard";
import H1 from "@/components/ui/H1";
import P from "@/components/ui/P";
import Section from "@/components/ui/Section";
import { connectDB } from "@/utils/connectDB";
import React from "react";

const page = async () => {
  const products = await getProducts();
  return (
    <Section className="mb-32">
      <H1 className="text-center my-12">Products</H1>
      <div>
        {!products && <P>No Products Found</P>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default page;
