// app/components/dashboard/Chart.jsx
"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { month: "Jan", donations: 20000 },
  { month: "Feb", donations: 35000 },
  { month: "Mar", donations: 28000 },
  { month: "Apr", donations: 42000 },
  { month: "May", donations: 51000 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="month" stroke="#543D2E" />
        <YAxis stroke="#543D2E" />
        <Tooltip />
        <Line type="monotone" dataKey="donations" stroke="#723134" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}
