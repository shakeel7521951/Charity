// app/dashboard/reports/page.jsx
"use client";

import Card from './../overview/Card';
import Table from './../overview/Table';

export default function ReportsPage() {
  const columns = ["Report ID", "Campaign", "Generated On", "Type", "Status"];
  const data = [
    { "Report ID": "#RPT-001", Campaign: "Health Aid", "Generated On": "2025-08-01", Type: "Financial", Status: "Completed" },
    { "Report ID": "#RPT-002", Campaign: "Education Fund", "Generated On": "2025-08-05", Type: "Compliance", Status: "Completed" },
    { "Report ID": "#RPT-003", Campaign: "Relief Packages", "Generated On": "2025-08-10", Type: "Financial", Status: "In Progress" },
  ];

  return (
    <div className="space-y-6 w-screen md:w-full">
      <h2 className="text-2xl font-bold text-[#543D2E]">Reports & Compliance</h2>

      {/* Generate Reports */}
      <Card title="Generate New Report">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Campaign</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>Health Aid</option>
              <option>Education Fund</option>
              <option>Relief Packages</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Report Type</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>Financial</option>
              <option>Compliance</option>
              <option>Audit</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#723134] text-white rounded-lg hover:bg-[#543D2E] transition"
            >
              Generate
            </button>
          </div>
        </form>
      </Card>

      {/* Reports Table */}
      <Card title="Generated Reports">
        <Table columns={columns} data={data} />

        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Download PDF
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Export Excel
          </button>
        </div>
      </Card>
    </div>
  );
}
