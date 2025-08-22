"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Section from "./ui/Section";
import { useSession } from "next-auth/react";
import UserDropdown from "./Auth/UserDropdown";

const Navbar = () => {
  const { data: session, status } = useSession();

  console.log(session);

  const user = session?.user;
  const links = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
    </>
  );
  return (
    <div className="bg-base-300 py-2">
      <Section className="flex items-center justify-between">
        <Image
          src={logo}
          width={378}
          height={256}
          className="h-15 w-30"
          alt="everyday finds logo"
        />
        <ul>{links}</ul>
        <div className="flex items-center gap-4">
          {user ? (
            <UserDropdown user={user} />
          ) : (
            <>
              <Link className="btn btn-primary rounded-lg" href="/login">
                Login
              </Link>
              <Link className="btn btn-accent rounded-lg" href="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Navbar;
