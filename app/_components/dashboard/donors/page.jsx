// app/dashboard/donors/page.jsx
"use client";

import Card from "../overview/Card";
import Table from "../overview/Table";

export default function DonorsPage() {
  const columns = ["ID", "Donor Name", "Type", "Total Donations", "Last Donation", "Engagement Level"];
  const data = [
    { ID: "DNR-001", "Donor Name": "Qatar Airways", Type: "Corporate", "Total Donations": "1,200,000 QAR", "Last Donation": "15-Aug-2025", "Engagement Level": "High" },
    { ID: "DNR-002", "Donor Name": "Mohammed Abdullah", Type: "Individual", "Total Donations": "25,000 QAR", "Last Donation": "28-Jul-2025", "Engagement Level": "Medium" },
    { ID: "DNR-003", "Donor Name": "Vodafone Qatar", Type: "Corporate", "Total Donations": "3,500,000 QAR", "Last Donation": "10-Aug-2025", "Engagement Level": "Very High" },
    { ID: "DNR-004", "Donor Name": "Fatima Zahra", Type: "Individual", "Total Donations": "5,000 QAR", "Last Donation": "01-Sep-2025", "Engagement Level": "Low" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#543D2E]">Donors</h2>

      {/* Donor List */}
      <Card title="Registered Donors">
        <Table columns={columns} data={data} />
      </Card>

      {/* Action Section */}
      <Card title="Donor Management">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="px-4 py-2 bg-[#723134] text-white rounded-lg hover:bg-[#543D2E] transition">
            Add New Donor
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Export Donor Report
          </button>
        </div>
      </Card>
    </div>
  );
}
