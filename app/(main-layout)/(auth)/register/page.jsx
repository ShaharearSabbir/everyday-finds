"use client";

import { createUser } from "@/actions/user";
import SocialLogin from "@/components/Auth/SocialLogin";
import uploadImage from "@/utils/uploadImage";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
  const [image, setImage] = useState(null);

  const handleImage = async (e) => {
    const imageFile = e.target.files[0];
    const imageURL = await uploadImage(imageFile);
    setImage(imageURL);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { name, email, password, image };
    const res = await createUser(user);
    if (res.insertedId) {
      signIn("credentials", { email, password, callbackUrl: "/" });
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl lg:text-3xl font-bold text-center">
              Register now!
            </h1>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full rounded-lg"
                placeholder="Name"
              />

              <label className="label">Photo</label>
              <input
                name="photo"
                onChange={handleImage}
                type="file"
                accept="image/*"
                className="file-input file-input-primary w-full rounded-lg"
                placeholder="Photo"
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input rounded-lg w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full rounded-lg"
                placeholder="Password"
              />
              <button className="btn btn-primary mt-4 rounded-lg" type="submit">
                Register
              </button>
            </fieldset>
            <p>
              Already have an account?{" "}
              <Link
                href={"/login"}
                className="text-primary font-semibold hover:text-accent"
              >
                Login
              </Link>
            </p>
            <SocialLogin />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
