"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

const getallservices = async () => {
  try {
    const response = await fetch("http://localhost:3000/services/api/getall");
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching services:", error);
    return { services: [] };
  }
};

const OurAwsomeServices = () => {
  const [datacard, setDatacard] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      const services = await getallservices();
      setDatacard(services.services);
    };
    fetchServices();
  }, []);

  const handleToggle = () => setShowAll(!showAll);

  const handleaddservice = async (card) => {
    console.log(card, "I love you");
  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I added it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Prepare the new booking payload
        const newBooking = {
          serviceId: card.id,
          title: card.title,
          price: card.price,
          description: card.description
        };
  
        try {
          const response = await fetch("http://localhost:3000/home/api/bookings", {
            method: "POST",
            body: JSON.stringify(newBooking),
            headers: {
              "Content-Type": "application/json"
            }
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          Swal.fire({
            title: "Service Added!",
            text: "Your service has been added successfully.",
            icon: "success"
          });
        } catch (error) {
          console.error("Error adding service:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to add the service. Please try again.",
            icon: "error"
          });
        }
      }
    });
  };
  

  return (
    <div className="my-6">
      <h1 className="font-bold text-center text-4xl">
        Our Awesome <span className="text-[#F6467E]">Services</span>
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {datacard.slice(0, showAll ? datacard.length : 3).map((card) => (
          <div
            key={card.id}
            className="card bg-base-100 w-96 hover:shadow-xl transition-transform duration-300"
          >
            <figure className="px-10 pt-10">
              <Image
                src={`/assets/icons/${card.id}.png`}
                alt={card.title}
                width={100}
                height={100}
                onError={(e) => (e.target.src = "/assets/icons/default.png")}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{card.title}</h2>
              <h1 className="text-xl font-bold">$ {card.price}</h1>
              <p>{card.description}</p>
              <button
                onClick={() => handleaddservice(card)}
                className="btn btn-primary"
              >
                Add Service
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button onClick={handleToggle} className="btn btn-secondary">
          {showAll ? "Explore Less" : "Explore More"}
        </button>
      </div>
    </div>
  );
};

export default OurAwsomeServices;
