"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

const SocialLogin = () => {
  return (
    <div className="space-y-4">
      <div className="divider">OR</div>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="btn btn-primary btn-outline w-full rounded-lg"
      >
        <FcGoogle />
        Login With Google
      </button>
      <button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="btn btn-primary btn-outline w-full rounded-lg"
      >
        <FaGithub /> Login with Github
      </button>
    </div>
  );
};

export default SocialLogin;
