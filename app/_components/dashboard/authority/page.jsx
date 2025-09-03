"use client";

import StatBox from './../overview/StatBox';
import Card from './../overview/Card';
import Table from './../overview/Table';

export default function AuthorityPage() {
  const columns = ["Campaign", "Charity", "Category", "Raised", "Status"];
  const data = [
    { Campaign: "Health Aid", Charity: "Qatar Red Crescent", Category: "Medical", Raised: "$25,000", Status: "Pending Approval" },
    { Campaign: "Education Fund", Charity: "Education Qatar", Category: "Education", Raised: "$18,500", Status: "Approved" },
    { Campaign: "Relief Packages", Charity: "Relief Qatar", Category: "Emergency", Raised: "$12,000", Status: "Rejected" },
  ];

  const alerts = [
    { id: 1, message: "Unusual spike in donations detected for Relief Packages.", level: "High" },
    { id: 2, message: "Delayed reporting by Education Fund campaign.", level: "Medium" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#543D2E]">Authority Dashboard</h2>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatBox title="Total Donations" value="$1.2M" />
        <StatBox title="Active Campaigns" value="45" />
        <StatBox title="Registered Charities" value="120" />
        <StatBox title="Alerts" value="3" />
      </div>

      {/* Campaign Approvals */}
      <Card title="Campaign Approvals">
        <Table columns={columns} data={data} />
        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Approve Selected
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Reject Selected
          </button>
        </div>
      </Card>

      {/* Alerts Section */}
      <Card title="Suspicious Activity Alerts">
        <ul className="space-y-3">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className={`p-3 rounded-lg ${
                alert.level === "High" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {alert.message}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
