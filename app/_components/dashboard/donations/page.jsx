// app/dashboard/donations/page.jsx
"use client";

import Card from "../overview/Card";
import Table from "../overview/Table";

export default function DonationsPage() {
  const columns = [
    "Txn ID",
    "Donor Name",
    "Campaign",
    "Amount",
    "Payment Method",
    "Date",
    "Status",
  ];

  const data = [
    {
      "Txn ID": "TXN-1001",
      "Donor Name": "Qatar Airways",
      Campaign: "Education for All",
      Amount: "500,000 QAR",
      "Payment Method": "Bank Transfer",
      Date: "30-Aug-2025",
      Status: "Completed",
    },
    {
      "Txn ID": "TXN-1002",
      "Donor Name": "Mohammed Abdullah",
      Campaign: "Orphan Support",
      Amount: "10,000 QAR",
      "Payment Method": "Credit Card",
      Date: "28-Aug-2025",
      Status: "Pending",
    },
    {
      "Txn ID": "TXN-1003",
      "Donor Name": "Vodafone Qatar",
      Campaign: "Healthcare Aid",
      Amount: "1,200,000 QAR",
      "Payment Method": "Mobile Wallet",
      Date: "15-Aug-2025",
      Status: "Completed",
    },
    {
      "Txn ID": "TXN-1004",
      "Donor Name": "Fatima Zahra",
      Campaign: "Food Distribution",
      Amount: "2,000 QAR",
      "Payment Method": "Debit Card",
      Date: "01-Sep-2025",
      Status: "Failed",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#543D2E]">Donations</h2>

      {/* Donation Records */}
      <Card title="Donation Transactions">
        <Table columns={columns} data={data} />
      </Card>

      {/* Quick Filters */}
      <Card title="Filter Donations">
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Show Completed
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
            Show Pending
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Show Failed
          </button>
        </div>
      </Card>
    </div>
  );
}