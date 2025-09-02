// app/components/dashboard/Sidebar.jsx
"use client";
import Link from "next/link";
import { Home, Users, FileText, BarChart3, Heart, Database, Settings } from "lucide-react";

const menu = [
  { name: "Overview", icon: Home, href: "/dashboard" },
  { name: "Donations", icon: Heart, href: "/dashboard/donations" },
  { name: "Charities", icon: Users, href: "/dashboard/charities" },
  { name: "Campaigns", icon: FileText, href: "/dashboard/campaigns" },
  { name: "Authority", icon: BarChart3, href: "/dashboard/authority" },
  { name: "Beneficiaries", icon: Database, href: "/dashboard/beneficiaries" },
  { name: "Reports", icon: FileText, href: "/dashboard/reports" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#723134] text-white p-6 hidden md:block">
      <h1 className="text-2xl font-bold mb-10">Charity Dashboard</h1>
      <nav className="space-y-4">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#543D2E] transition"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
