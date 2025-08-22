import React from "react";

import BrandLogo from "@/components/BrandLogo";
import ActiveLink from "@/components/ui/ActiveLink";

const Layout = ({ children }) => {
  const links = (
    <>
      <li>
        <ActiveLink href={"/dashboard/add-product"}>Add Product</ActiveLink>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar lg:hidden bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">
            <BrandLogo />
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">{links}</ul>
          </div>
        </div>
        <div>{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-300 text-base-content min-h-full w-80 p-4 space-y-4">
          <BrandLogo />
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Layout;
