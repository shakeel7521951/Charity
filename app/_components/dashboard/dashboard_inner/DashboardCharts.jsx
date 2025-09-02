"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Donations",
        data: [1200, 1900, 3000, 500, 2000, 3200],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Donations" },
    },
  };

  return (
    <div className="bg-white mt-10 shadow-lg p-5 rounded-xl">
      <Bar data={data} options={options} />
    </div>
  );
};

export default DashboardChart;
