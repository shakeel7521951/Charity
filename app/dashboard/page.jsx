// app/dashboard/page.jsx
"use client";
import StatBox from "../_components/dashboard/StatBox";
import Chart from "../_components/dashboard/Chart";

export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <StatBox title="Total Donations" value="$1.2M" />
      <StatBox title="Active Campaigns" value="45" />
      <StatBox title="Registered Charities" value="120" />
      <StatBox title="Beneficiaries" value="8,540" />

      <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-semibold text-[#543D2E] mb-4">Donation Trends</h3>
        <Chart />
      </div>

      <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-semibold text-[#543D2E] mb-4">Top Campaigns</h3>
        <ul className="space-y-3">
          <li className="flex justify-between"><span>Health Aid</span><span>$250K</span></li>
          <li className="flex justify-between"><span>Education Fund</span><span>$180K</span></li>
          <li className="flex justify-between"><span>Relief Packages</span><span>$120K</span></li>
        </ul>
      </div>
    </div>
  );
}
