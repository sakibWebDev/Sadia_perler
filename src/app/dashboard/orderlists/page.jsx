"use client";
import { useState, useEffect } from "react";

const fetchBookings = async () => {
  try {
    const response = await fetch("http://localhost:3000/home/api/bookings");
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

const Page = () => {
  const [datacard, setDatacard] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchBookings();
        setDatacard(data.services || []);
      } catch (err) {
        setError("Failed to fetch booking data.");
      }
    };
    loadData();
  }, []);

  return (
    <div className="my-10 mx-3">
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="flex justify-between">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">Orderlist</h2>
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Sakib E Azom {datacard.length}
          </h2>
        </div>
        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-5" />
            </colgroup>
            <thead>
              <tr className="dark:bg-gray-300">
                <th className="p-3">Name</th>
                <th className="p-3">Job title</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                <th className="p-3">Address</th>
                <th className="p-3">Description</th>
                <th className="p-3"><span className="sr-only">Edit</span></th>
              </tr>
            </thead>
            <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
              {datacard.length > 0 ? (
                datacard.map((item, index) => (
                  <tr key={index}>
                    <td className="px-3 py-2">Md Sakib E Azom</td>
                    <td className="px-3 py-2">{item.title}</td>
                    <td className="px-3 py-2">076463863{item.serviceid}</td>
                    <td className="px-3 py-2">rahimfjkd@gmail.com</td>
                    <td className="px-3 py-2">mouvasha bamontari</td>
                    <td className="px-3 py-2">{item.description}</td>
                    <td className="px-3 py-2">
                      <button
                        type="button"
                        title="Open details"
                        className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
