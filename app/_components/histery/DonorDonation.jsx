"use client";
import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaDonate, FaSearch } from "react-icons/fa";

const DonationAry = [
  { id: 1, name: "Education for All", amount: 355, required: 500 },
  { id: 2, name: "Clean Water Project", amount: 200, required: 400 },
  { id: 3, name: "Healthcare Support", amount: 450, required: 800 },
  { id: 4, name: "Food Relief", amount: 120, required: 300 },
  { id: 5, name: "Orphan Care", amount: 600, required: 1000 },
  { id: 6, name: "Women Empowerment", amount: 250, required: 600 },
  { id: 7, name: "Disaster Relief", amount: 700, required: 1200 },
  { id: 8, name: "Scholarship Program", amount: 150, required: 500 },
  { id: 9, name: "Animal Welfare", amount: 90, required: 250 },
  { id: 10, name: "Tree Plantation", amount: 180, required: 350 },
];

const DonorDonation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [donations, setDonations] = useState(DonationAry);
  const [first, setFirst] = useState(false);

  // Track currently editing donation
  const [editDonation, setEditDonation] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAmount, setEditAmount] = useState("");

  // Delete function
  const DeleteDatainTable = (id) => {
    setDonations((prev) => prev.filter((donation) => donation.id !== id));
  };

  // Open edit modal
  const handleEdit = (donation) => {
    setEditDonation(donation);
    setEditName(donation.name);
    setEditAmount(donation.amount);
    setFirst(true);
  };

  // Update function
  const UpdateValueinTable = () => {
    setDonations((prev) =>
      prev.map((donation) =>
        donation.id === editDonation.id
          ? { ...donation, name: editName, amount: Number(editAmount) }
          : donation
      )
    );
    setFirst(false);
  };

  // Filter donations
  const filteredDonations = donations.filter(
    (donation) =>
      donation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.id.toString().includes(searchTerm) ||
      donation.amount.toString().includes(searchTerm)
  );

  return (
    <div className="flex-1 p-4 md:p-6 bg-[#f9eef1] rounded-2xl shadow-md">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-[#922d4c] mb-4 md:mb-6 flex items-center gap-2">
        <FaDonate className="text-[#922d4c]" />
        Donation History
      </h1>

      {/* Search */}
      <div className="mb-6 bg-white p-3 md:p-4 rounded-xl shadow-md">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#922d4c]" />
          <input
            type="text"
            placeholder="Search by ID, name, or amount..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#d6a5b3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#922d4c] text-sm md:text-base"
          />
        </div>
      </div>

      {/* Results Count */}
      <p className="mb-4 text-sm text-[#922d4c]">
        Showing {filteredDonations.length} of {donations.length} donations
      </p>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="w-full min-w-[600px] border-collapse">
          <thead className="bg-[#922d4c] text-white">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Donation Name</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Required</th>
              
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonations.map((donation) => {
              const progress = (donation.amount / donation.required) * 100;
              return (
                <tr key={donation.id} className="hover:bg-[#f9eef1] transition">
                  <td className="py-3 px-6 border-b text-[#922d4c] font-semibold">
                    #{donation.id}
                  </td>
                  <td className="py-3 px-6 border-b">{donation.name}</td>
                  <td className="py-3 px-6 border-b text-[#922d4c] font-semibold">
                    ${donation.amount}
                  </td>
                  <td className="py-3 px-6 border-b">${donation.required}</td>
                 
                  <td className="py-3 px-6 border-b text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        className="flex items-center gap-1 px-3 py-1 bg-[#d6a5b3] text-white text-sm cursor-pointer rounded-lg hover:bg-[#922d4c] transition"
                        onClick={() => handleEdit(donation)}
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        className="flex items-center gap-1 px-3 py-2 bg-red-500 cursor-pointer text-white text-sm rounded-lg transition"
                        onClick={() => DeleteDatainTable(donation.id)}
                      >
                        <FaTrashAlt /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredDonations.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No donations found.
          </div>
        )}
      </div>

      {/* Modal */}
      {first && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-10"
            onClick={() => setFirst(false)}
          />
          {/* Modal Box */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl z-20 w-[90%] max-w-md">
            <h1 className="text-lg font-bold mb-4 text-[#922d4c]">
              Edit Donation
            </h1>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-[#922d4c]">
                  Donation Name
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#922d4c]"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-[#922d4c]">
                  Amount
                </label>
                <input
                  type="number"
                  value={editAmount}
                  onChange={(e) => setEditAmount(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#922d4c]"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-sm"
                onClick={() => setFirst(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-[#922d4c] text-white hover:bg-[#7a233d] text-sm"
                onClick={UpdateValueinTable}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DonorDonation;
