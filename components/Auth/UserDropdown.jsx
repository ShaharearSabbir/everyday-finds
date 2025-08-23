import Image from "next/image";
import React from "react";
import ActiveLink from "../ui/ActiveLink";
import Logout from "./Logout";

const UserDropdown = ({ user }) => {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div tabIndex={0} role="button">
        <Image
          src={
            user.image ||
            "https://cdn.prod.website-files.com/67891024ed5394ef2059ff76/6795975173dc15b38db607d6_fallback-profile-image_1.jpg"
          }
          height={50}
          width={50}
          alt="user profile"
          className="rounded-full aspect-square border border-primary hover:border-accent"
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm"
      >
        <li>
          <ActiveLink href={"/dashboard"}>Dashboard</ActiveLink>
        </li>
        <li className="lg:hidden">
          <ActiveLink href="/">Home</ActiveLink>
        </li>
        <li className="lg:hidden">
          <ActiveLink href="/products">Products</ActiveLink>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
