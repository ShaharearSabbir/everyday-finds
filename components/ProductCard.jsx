import Image from "next/image";
import React from "react";
import P from "./ui/P";
import * as motion from "motion/react-client";
import Link from "next/link";
import H3 from "./ui/H3";

const ProductCard = ({ product }) => {
  const { name, price, description, image, _id } = product;
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex flex-col justify-between gap-2 bg-base-100 p-4 shadow shadow-primary rounded-lg"
    >
      <Image
        src={image}
        width={500}
        height={500}
        alt={name}
        className="w-full aspect-square object-cover"
      />
      <H3>{name}</H3>
      <P>{description}</P>
      <h5 className="font-semibold text-lg text-accent">
        Price: {Math.round(price)}&#x09F3;
      </h5>
      <Link
        href={`/products/${_id}`}
        className="btn btn-primary w-full rounded-lg"
      >
        View Details
      </Link>
    </motion.div>
  );
};

export default ProductCard;
