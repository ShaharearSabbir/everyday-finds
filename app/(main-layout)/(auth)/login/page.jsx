"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { getErrorMessages } from "@/utils/auth-errors";
import { useRouter } from "next/navigation";
import SocialLogin from "@/components/Auth/SocialLogin";
import Link from "next/link";

const Login = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const error = searchParams.get("error");
  let errorMessage;
  if (error) {
    errorMessage = getErrorMessages(error);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.status === 200) {
      router.push("/");
    } else {
      router.push(`/login?error=${result.error}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl lg:text-3xl font-bold text-center">
              Login now!
            </h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                name="email"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
              />
              {errorMessage && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {errorMessage}
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4 rounded-lg" type="submit">
                Login
              </button>
            </fieldset>
            <p>
              New here?{" "}
              <Link
                href={"/register"}
                className="text-primary font-semibold hover:text-accent"
              >
                Register
              </Link>
            </p>
            <SocialLogin />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
