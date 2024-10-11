import React, { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    password: "",
    notifications: true,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated settings:", formData);

    // Optionally clear the password field after submission
    setFormData((prevState) => ({
      ...prevState,
      password: "",
    }));
  };

  return (
    <div className="bg-black text-gray-100 p-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Settings</h2>

        <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md ">
          {/* Profile Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Profile</h3>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block mb-2 font-semibold"
                aria-label="Username"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-green-100 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your username"
                style={{ color: 'black' }}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-semibold"
                aria-label="Email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-green-100 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email"
                style={{ color: 'black' }}
                required
              />
            </div>
          </div>

          {/* Password Change Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Change Password</h3>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 font-semibold"
                aria-label="New Password"
              >
                New Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-green-100 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter a new password"
                style={{ color: 'black' }}
                required
              />
            </div>
          </div>

          {/* Notifications Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Notifications</h3>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
                className="mr-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <label
                htmlFor="notifications"
                className="font-semibold"
                aria-label="Enable email notifications"
              >
                Enable email notifications
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-700 transition-colors"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
