// app/components/dashboard/Card.jsx
"use client";

export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow rounded-2xl md:p-6 p-4">
      <h3 className="text-lg font-semibold text-[#543D2E] mb-4">{title}</h3>
      {children}
    </div>
  );
}
