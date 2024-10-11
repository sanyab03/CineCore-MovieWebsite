import React from 'react';

const ProfilePage = () => {
  return (
    <div className="bg-black-900 text-gray-100 h-screen overflow-auto p-8 custom-scrollbar">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold">Profile Settings</h1>
            <p className="text-gray-400">For Joe Ando</p>
          </div>
          <div className="text-blue-400">
            {/* Placeholder for profile icon */}
            <span role="img" aria-label="profile-icon" className="text-4xl">
              😃
            </span>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-black-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Preferences</h2>
          <ul className="space-y-4">
            <li className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4">
              <span>Languages</span>
              <span className="text-gray-400">Set languages for display and audio</span>
            </li>
            <li className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4">
              <span>Viewing Restrictions</span>
              <span className="text-gray-400">Edit maturity rating and title restrictions</span>
            </li>
            <li className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4">
              <span>Viewing Activity</span>
              <span className="text-gray-400">Manage viewing history and ratings</span>
            </li>
          </ul>
        </div>

        {/* Delete Profile Section */}
        <div className="mt-10">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22"
              />
            </svg>
            Delete Profile
          </button>
          <p className="text-gray-400 text-center mt-2">The primary profile cannot be deleted.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
