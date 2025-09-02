// app/components/dashboard/StatBox.jsx
"use client";

export default function StatBox({ title, value }) {
  return (
    <div className="bg-white shadow rounded-2xl p-6 flex flex-col justify-between">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-2xl font-bold text-[#723134]">{value}</p>
    </div>
  );
}
