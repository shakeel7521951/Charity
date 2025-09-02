// app/dashboard/settings/page.jsx
"use client";

import Card from "../overview/Card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#543D2E]">Settings</h2>

      {/* Profile Settings */}
      <Card title="Profile Settings">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Phone</label>
            <input
              type="tel"
              placeholder="+974 1234 5678"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <button className="px-4 py-2 bg-[#543D2E] text-white rounded-lg hover:bg-[#432F24] transition">
            Save Changes
          </button>
        </form>
      </Card>

      {/* Security Settings */}
      <Card title="Security Settings">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Update Password
          </button>
        </form>
      </Card>

      {/* Preferences */}
      <Card title="Preferences">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Enable Dark Mode</span>
            <input type="checkbox" className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email Notifications</span>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">SMS Alerts</span>
            <input type="checkbox" className="w-5 h-5" />
          </div>
        </div>
      </Card>
    </div>
  );
}
