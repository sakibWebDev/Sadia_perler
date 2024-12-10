"use client";

import SocialSignin from "@/components/Sharedpages/Sociallogin";
import Link from "next/link";

const Page = () => {
  const handleClicked = async (e) => {
    e.preventDefault(); // Prevent form's default submission behavior

    const form = e.target;
    const user = {
      name: form.username.value,
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const resp = await fetch("http://localhost:3000/signup/api", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        alert("Account created successfully!");

        form.reset(); // Reset the form fields
      } else {
        const errorData = await resp.json();
        alert(`Error: ${errorData.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleClicked}
          className="w-2/4 space-y-5 my-10"
        >
          <h1
            className="text-4xl font-bold text-[#F63E7B]"
            style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)" }}
          >
            Create an account
          </h1>

          {/* Email Input */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="email"
              className="grow"
              placeholder="Email"
              required
            />
          </label>

          {/* Username Input */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Username"
              required
            />
          </label>

          {/* Password Input */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Password"
              required
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
          >
            Sign Up
          </button>
          <Link href="/login" > <p>Already have an account? please <span className="btn">Login </span> </p></Link>
        </form>
        <SocialSignin/>
      </div>
    </div>
  );
};

export default Page;
