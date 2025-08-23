import { getProductById } from "@/actions/products";
import P from "@/components/ui/P";
import Section from "@/components/ui/Section";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;

  const product = await getProductById(id);
  if (!product) {
    return (
      <Section className="flex justify-center items-center h-screen">
        <P>Product not found.</P>
      </Section>
    );
  }

  const { name, price, category, description, image, _id } = product;

  return (
    <Section className="container mx-auto py-12 px-4">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Image Container */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg border">
            <Image
              src={image}
              fill
              alt={name}
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        {/* Info Container */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
            {name}
          </h1>
          <P className="text-xl font-medium text-gray-600">
            Category:{" "}
            <span className="font-semibold text-primary">{category}</span>
          </P>
          <hr className="my-4" />
          <P className="text-lg leading-relaxed text-gray-700">{description}</P>
          <hr className="my-4" />
          <div className="flex justify-between items-end">
            <h5 className="text-3xl font-bold text-accent">
              Price: {Math.round(price)}&#x09F3;
            </h5>
            <button className="btn btn-primary text-lg px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default page;
