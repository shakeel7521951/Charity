import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos"
import 'aos/dist/aos.css'
const compainAry = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1652858672796-960164bd632b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    name: "Education for All",
    desc: "Help underprivileged children get access to quality education.",
    target: "$10,000",
    raisedAmount: "$4,500",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/2171791945/photo/portrait-of-volunteers-during-donation-event-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=-dyAwuIFN4m8m4YxI-uTb7R29RqPn3aEndhTv4sBH_0=",
    name: "Clean Water Project",
    desc: "Providing clean and safe drinking water in rural areas.",
    target: "$8,000",
    raisedAmount: "$5,200",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Medical Aid",
    desc: "Support critical medical treatments for those in need.",
    target: "$15,000",
    raisedAmount: "$9,800",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Food for Families",
    desc: "Providing essential groceries to struggling families.",
    target: "$12,000",
    raisedAmount: "$7,600",
  },
  {
    id: 5, // ✅ unique now
    img: "https://media.istockphoto.com/id/2171791945/photo/portrait-of-volunteers-during-donation-event-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=-dyAwuIFN4m8m4YxI-uTb7R29RqPn3aEndhTv4sBH_0=",
    name: "Disaster Relief",
    desc: "Emergency aid for families affected by natural disasters.",
    target: "$20,000",
    raisedAmount: "$12,400",
  },
  {
    id: 6, // ✅ unique now
    img: "https://images.unsplash.com/photo-1643321613219-6d50e1372c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    name: "Housing Support",
    desc: "Helping homeless families with safe housing solutions.",
    target: "$25,000",
    raisedAmount: "$14,700",
  },
];

const Campaign = () => {
    
        useEffect(()=>{
            AOS.init({
                duration:100,
                once:true,
            })
        })
  return (
    <div className="py-10 px-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Active Campaigns
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {compainAry.map((item) => (
          <div
          data-aos="fade-up"
            key={item.id} // ✅ no duplicate keys anymore
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
          >
            
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>

              {/* Progress Section */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-700">
                  <p>Raised: {item.raisedAmount}</p>
                  <p>Target: {item.target}</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                      width: `${
                        (parseInt(item.raisedAmount.replace(/[^0-9]/g, "")) /
                          parseInt(item.target.replace(/[^0-9]/g, ""))) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <Link href="/contact">
                <button className="mt-5 w-full bg-[#a22b56] text-white py-2 rounded-lg cursor-pointer font-medium hover:bg-[#ec538b] transition">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaign;
