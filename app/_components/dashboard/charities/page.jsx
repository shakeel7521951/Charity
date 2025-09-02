// app/dashboard/charities/page.jsx
"use client";

import Card from "../overview/Card";
import Table from './../overview/Table';
import StatBox from './../overview/StatBox';

export default function CharitiesPage() {
  const columns = ["Campaign", "Category", "Raised", "Goal", "Status"];
  const data = [
    { Campaign: "Health Aid", Category: "Medical", Raised: "$25,000", Goal: "$50,000", Status: "Approved" },
    { Campaign: "Education Fund", Category: "Education", Raised: "$18,500", Goal: "$40,000", Status: "Pending" },
    { Campaign: "Relief Packages", Category: "Emergency", Raised: "$12,000", Goal: "$20,000", Status: "Rejected" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#543D2E]">Charity Management</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatBox title="Total Campaigns" value="12" />
        <StatBox title="Funds Raised" value="$150,000" />
        <StatBox title="Documents Verified" value="Yes" />
      </div>

      {/* Campaigns Table */}
      <Card title="Registered Campaigns">
        <Table columns={columns} data={data} />
      </Card>

      {/* Document Upload */}
      <Card title="Legal Documents & Licenses">
        <div className="space-y-4">
          <p className="text-sm text-gray-700">
            Upload your organization’s registration documents, licenses, and compliance reports for Authority review.
          </p>
          <input
            type="file"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
          <button className="px-4 py-2 bg-[#723134] text-white rounded-lg hover:bg-[#543D2E] transition">
            Upload Document
          </button>
        </div>
      </Card>
    </div>
  );
}
