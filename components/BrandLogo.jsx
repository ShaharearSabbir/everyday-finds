import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const BrandLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        width={295}
        height={200}
        className="h-15 w-30"
        alt="everyday finds logo"
      />
    </Link>
  );
};

export default BrandLogo;
