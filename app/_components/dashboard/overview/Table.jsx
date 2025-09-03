// app/components/dashboard/Table.jsx
"use client";

export default function Table({ columns, data }) {
  return (
    <div className="bg-white rounded-2xl shadow w-full overflow-hidden">
      {/* Scroll wrapper */}
      <div className="overflow-x-auto">
        <table className="text-left w-full border-collapse">
          <thead className="bg-[#723134] text-white">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-sm font-medium whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={`border-b ${i % 2 === 0 ? "bg-[#F2EDE9]" : "bg-white"
                  }`}
              >
                {Object.values(row).map((val, j) => (
                  <td
                    key={j}
                    className="px-6 py-3 text-sm text-gray-700 whitespace-nowrap"
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}
