"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SocialSignin from "@/components/Sharedpages/Sociallogin";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const resp = await signIn("credentials", {
        email,
        password,
        redirect: false, // Handle redirection manually
      });

      if (resp?.ok) {
        console.log("Login successful:", resp);
        router.push("/"); // Navigate to dashboard after successful login
      } else {
        console.error("Login failed:", resp?.error);
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="container px-24 mx-auto py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height={540}
            width={540}
            alt="Illustration of a user logging in"
          />
        </div>
        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-primary text-center mb-12">
            Sign In
          </h6>
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className="mt-3 w-full input input-bordered"
              required
            />
            <br />
            <br />

            {/* Password Input */}
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="w-full mt-3 input input-bordered"
              required
            />
            <br />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn btn-primary mt-12 text-lg"
            >
              Sign In
            </button>
          </form>

          <div>
            <h6 className="my-12 text-center">or sign in with</h6>

            <h6 className="my-12 text-center">
              Not have an account?{" "}
              <Link className="text-primary font-semibold" href={"/signup"}>
                Sign Up
              </Link>
            </h6>
          </div>
          <SocialSignin/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
