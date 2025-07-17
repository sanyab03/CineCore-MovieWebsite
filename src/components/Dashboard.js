import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import ProfilePage from "./ProfilePage";
import Watchlist from "./Watchlist";
import LikesDislikes from "./LikesDislikes";
import Reviews from "./Reviews";
import Settings from "./Settings";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (selectedOption) {
      case "profile":
        return <ProfilePage />;
      case "watchlist":
        return <Watchlist />;
      case "likes-dislikes":
        return <LikesDislikes />;
      case "reviews":
        return <Reviews />;
      case "settings":
        return <Settings />;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-green-700 text-white p-2 rounded-full"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      <aside
        className={`fixed md:relative z-40 md:z-0 md:w-64 bg-custom-dark-green text-white p-4 rounded-tl-3xl rounded-bl-3xl transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex md:flex-col`}
        style={{ borderRadius: "0 30px 30px 0" }}
      >
        <Link to="/" className="text-white text-2xl font-bold mb-6">
          CineCore
        </Link>

        <ul>
          {[
            { label: "Profile", key: "profile" },
            { label: "Watchlist", key: "watchlist" },
            { label: "Likes & Dislikes", key: "likes-dislikes" },
            { label: "Reviews", key: "reviews" },
            { label: "Settings", key: "settings" },
          ].map((item) => (
            <li
              key={item.key}
              className={`cursor-pointer p-3 hover:bg-green-700 rounded-lg ${
                selectedOption === item.key ? "bg-green-700" : ""
              } mb-2`}
              onClick={() => {
                setSelectedOption(item.key);
                setIsSidebarOpen(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <main className="flex-1 bg-black text-white p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
