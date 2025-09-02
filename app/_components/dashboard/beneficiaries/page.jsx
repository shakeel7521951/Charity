// app/dashboard/beneficiaries/page.jsx
"use client";

import Card from "../overview/Card";
import Table from "../overview/Table";

export default function BeneficiariesPage() {
  const columns = ["ID", "Name", "National ID", "Campaign", "Aid Received", "Status"];
  const data = [
    { ID: "BNF-001", Name: "Ahmed Khan", "National ID": "QA123456789", Campaign: "Health Aid", "Aid Received": "Yes", Status: "Approved" },
    { ID: "BNF-002", Name: "Fatima Ali", "National ID": "QA987654321", Campaign: "Education Fund", "Aid Received": "No", Status: "Pending" },
    { ID: "BNF-003", Name: "Mohammed Saad", "National ID": "QA555666777", Campaign: "Relief Packages", "Aid Received": "Yes", Status: "Duplicate Flagged" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#543D2E]">Beneficiaries</h2>

      {/* Beneficiaries List */}
      <Card title="Sandi Synced Beneficiaries">
        <Table columns={columns} data={data} />
      </Card>

      {/* Action Section */}
      <Card title="Manage Beneficiaries">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="px-4 py-2 bg-[#723134] text-white rounded-lg hover:bg-[#543D2E] transition">
            Add New Beneficiary
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Sync with Sandi
          </button>
        </div>
      </Card>
    </div>
  );
}
