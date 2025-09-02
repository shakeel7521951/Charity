// app/components/dashboard/Table.jsx
"use client";

export default function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#723134] text-white">
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-6 py-3 text-sm font-medium">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={`border-b ${i % 2 === 0 ? "bg-[#F2EDE9]" : "bg-white"}`}
            >
              {Object.values(row).map((val, j) => (
                <td key={j} className="px-6 py-3 text-sm text-gray-700">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
