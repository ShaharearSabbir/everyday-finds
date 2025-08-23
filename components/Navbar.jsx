import React from "react";
import Link from "next/link";
import Section from "./ui/Section";
import UserDropdown from "./Auth/UserDropdown";
import BrandLogo from "./BrandLogo";
import ActiveLink from "./ui/ActiveLink";
import { Menu } from "lucide-react";
import { getServerSession } from "next-auth";

const Navbar = async () => {
  const session = await getServerSession();

  const user = session?.user;

  const links = (
    <>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/products">Products</ActiveLink>
    </>
  );

  return (
    <div className="bg-base-300 py-4 text-lg font-bold">
      <Section className="flex items-center justify-between">
        <BrandLogo />
        <div className="hidden lg:flex gap-4 items-center justify-center *:px-2 *:py-1 *:rounded-lg">
          {links}
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <UserDropdown user={user} />
          ) : (
            <>
              <div className="hidden space-x-4 lg:block">
                <Link className="btn btn-primary rounded-lg" href="/login">
                  Login
                </Link>
                <Link className="btn btn-accent rounded-lg" href="/register">
                  Register
                </Link>
              </div>
              <div className=" lg:hidden dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <Menu size={50} />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow"
                >
                  <li>
                    <ActiveLink href="/">Home</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/products">Products</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/login">Login</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/register">Register</ActiveLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Navbar;
