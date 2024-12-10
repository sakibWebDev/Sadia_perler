"use client";
import React from 'react';

const Page = () => {
  const handleMakeAdmin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const makeAdmin = true; // Define admin status here
    const user = { email, makeAdmin };

    try {
      // Send PATCH request to your API endpoint
      const response = await fetch('http://localhost:3000/dashboard/makeadmin/api', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`User Info: ${JSON.stringify(data)}`);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert('Something went wrong.');
    }
  };
  const handleMakeAdminremove = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const makeAdmin = false; // Define admin status here
    const user = { email, makeAdmin };

    try {
      // Send PATCH request to your API endpoint
      const response = await fetch('http://localhost:3000/dashboard/makeadmin/api', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`User Info: successfully false ${JSON.stringify(data)}`);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert('Something went wrong.');
    }
  };

  return (
   <div>
     <form onSubmit={handleMakeAdmin} className="m-12">
      <h1 className="text-2xl font-bold mb-4">Email</h1>
      <div>
        <label htmlFor="email" className="input input-bordered flex items-center gap-2 w-2/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            id="email"
            name="email"
            type="text"
            className="grow"
            placeholder="Email"
            required
          />
        </label>
        <button type="submit" className="btn mt-4 bg-[#F7568B]">
          Submit
        </button>
      </div>
    </form>
    <form onSubmit={handleMakeAdminremove} className="m-12">
      <h1 className="text-2xl font-bold mb-4">Email</h1>
      <div>
        <label htmlFor="email" className="input input-bordered flex items-center gap-2 w-2/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            id="email"
            name="email"
            type="text"
            className="grow"
            placeholder="Email"
            required
          />
        </label>
        <button type="submit" className="btn mt-4 bg-[#F7568B]">
          Submit
        </button>
      </div>
    </form>
   </div>
  );
};

export default Page;
