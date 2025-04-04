import React, { useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionate quizzer. Loves science and tech!",
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-6 transition-colors duration-300">
      <div className="w-full max-w-xl bg-gray-50 dark:bg-zinc-900 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-zinc-800 transition-all duration-300">
        {/* Profile Header */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src="https://via.placeholder.com/100"
              alt="User Profile"
              className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 shadow-md"
            />
            <button
              title="Change Photo"
              className="absolute bottom-0 right-0 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-600 rounded-full p-1 shadow hover:bg-blue-100 dark:hover:bg-zinc-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536M16.5 3.5a2.121 2.121 0 013 3L7 19.5H3v-4L16.5 3.5z"
                />
              </svg>
            </button>
            <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
              Change Photo
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {userData.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{userData.email}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{userData.bio}</p>
          </div>
        </div>

        {/* Editable Fields */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Bio
            </label>
            <textarea
              name="bio"
              rows="3"
              value={userData.bio}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 text-right">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
