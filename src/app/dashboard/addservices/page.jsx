"use client";
import React from 'react';

const Page = () => {
  const handleAddService = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0]; // Correct way to access file input
    const description = form.description.value;

    const user = {
      name,
      image,
      description,
    };
    try {
        const resp = await fetch("http://localhost:3000/dashboard/addservices/api", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (resp.ok) {
            alert("Successfully added!");
            form.reset(); // Reset the form after successful submission
        } else {
            const errorData = await resp.json();
            alert(`Error: ${errorData.message || "Failed to add review."}`);
        }
    } catch (error) {
        console.error("Fetch error:", error);
        alert("Something went wrong. Please try again later.");
    }
    

    
  };

  return (
    <div className="m-8">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Review</p>
        <p className="text-2xl font-bold">Pro Rasel</p>
      </div>

      <form
        onSubmit={handleAddService}
        className="grid grid-cols-2 gap-6 mt-6 mb-4"
      >
        <div className="space-y-4">
          <p className="text-2xl font-bold mb-4">Service Title</p>
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-bold mb-4">Image</p>
          <input
            name="image"
            type="file"
            accept="image/*"
            className="file-input"
          />
        </div>
        <div className="space-y-4 col-span-2">
          <p className="text-2xl font-bold mb-4">Description</p>
          <textarea
            name="description"
            className="textarea textarea-secondary w-full"
            placeholder="Enter Your Description"
          ></textarea>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-2xl px-5 py-2.5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
