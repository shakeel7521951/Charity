import React from "react";

const campaigns = [
  {
    id: 1,
    title: "Education for All",
    description: "Providing books and supplies for underprivileged children.",
    raised: 7500,
    goal: 10000,
  },
  {
    id: 2,
    title: "Clean Water Project",
    description: "Building wells to ensure clean drinking water in rural areas.",
    raised: 4500,
    goal: 8000,
  },
  {
    id: 3,
    title: "Healthcare Aid",
    description: "Medical support for families in need.",
    raised: 9000,
    goal: 12000,
  },
  {
    id: 1,
    title: "Education for All",
    description: "Providing books and supplies for underprivileged children.",
    raised: 7500,
    goal: 10000,
  },
  {
    id: 2,
    title: "Clean Water Project",
    description: "Building wells to ensure clean drinking water in rural areas.",
    raised: 4500,
    goal: 8000,
  },
  {
    id: 3,
    title: "Healthcare Aid",
    description: "Medical support for families in need.",
    raised: 9000,
    goal: 12000,
  },
];

const Campaigns = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Active Campaigns</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((camp) => {
          const progress = Math.min((camp.raised / camp.goal) * 100, 100);

          return (
            <div
              key={camp.id}
              className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{camp.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{camp.description}</p>

              <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Raised: <span className="font-bold">${camp.raised}</span> /{" "}
                ${camp.goal}
              </p>

              <button className="bg-[#922D4C] hover:bg-[#922D4C] text-white py-1.5 px-4 rounded-lg text-sm">
                Donate Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Campaigns;
