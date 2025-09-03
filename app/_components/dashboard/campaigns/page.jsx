// app/dashboard/campaigns/page.jsx
"use client";

import { useState } from "react";
import Card from './../overview/Card';
import Table from './../overview/Table';

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState([
    { Campaign: "Health Aid", Category: "Medical", Goal: "$50,000", Raised: "$25,000", Status: "Approved" },
    { Campaign: "Education Fund", Category: "Education", Goal: "$40,000", Raised: "$18,500", Status: "Pending" },
  ]);

  const columns = ["Campaign", "Category", "Goal", "Raised", "Status"];

  return (
    <div className="space-y-6 w-screen md:w-full">
      <h2 className="text-2xl font-bold text-[#543D2E]">Manage Campaigns</h2>

      {/* Campaign Creation Form */}
      <Card title="Create New Campaign">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Campaign Name</label>
            <input
              type="text"
              placeholder="e.g. Food Relief Program"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>Medical</option>
              <option>Education</option>
              <option>Emergency</option>
              <option>Food Aid</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Goal Amount</label>
            <input
              type="number"
              placeholder="50000"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-[#723134] text-white rounded-lg hover:bg-[#543D2E] transition"
          >
            Create Campaign
          </button>
        </form>
      </Card>

      {/* Existing Campaigns */}
      <Card title="Existing Campaigns">
        <Table columns={columns} data={campaigns} />
      </Card>
    </div>
  );
}
