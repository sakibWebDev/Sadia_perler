"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import img1 from "@/../../public/assets/icons/1.png";

const bookingallservices = async () => {
  try {
    const response = await fetch("http://localhost:3000/home/api/bookings");
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching services:", error);
    return { services: [] };
  }
};

const Page = () => {
  const [datacard, setDatacard] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await bookingallservices();
      setDatacard(data.services || []);
    };

    fetchServices();
  }, []);

  return (
    <div className="m-8 space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Service List</p>
        <p className="text-2xl font-bold">Pro Rasel</p>
      </div>

     <div className="grid grid-cols-3 space-x-2 space-y-2">
     {datacard.length > 0 ? (
        datacard.map((card) => (
          <div key={card.id} className="card grid-cols-3 bg-base-100 w-96 shadow-xl">
            <div className="flex justify-between mx-6 mt-6">
              <Image
                src={img1} // Replace with dynamic image URL if available
                alt="Service icon"
                width={60}
                height={60}
              />
              <h1 className="btn">{card.status || "Pending"}</h1>
            </div>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg">No services found.</p>
      )}
     </div>
    </div>
  );
};

export default Page;
