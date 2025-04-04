import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  bg-white dark:bg-black  text-gray-500 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold">🧠 BrainBrawl</h2>
          <p className="text-sm mt-2">The ultimate quiz platform to test and grow your knowledge.</p>
          <p className="text-xs mt-4">© 2025 BrainBrawl. All rights reserved.</p>
        </div>

        <div>
          <h3 className="font-bold text-lg">📚 Quiz Categories</h3>
          <ul className="mt-2 space-y-1">
            <li>- General Knowledge</li>
            <li>- Science & Tech</li>
            <li>- History & Politics</li>
            <li>- Sports & Entertainment</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">📜 Legal & Support</h3>
          <ul className="mt-2 space-y-1">
            <li>- Terms of Service</li>
            <li>- Privacy Policy</li>
            <li>- Help & Support</li>
            <li>- Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">🌍 Connect with Us</h3>
          <div className="flex space-x-4 mt-2">
            <FaFacebook size={24} className="hover:text-blue-500" />
            <FaTwitter size={24} className="hover:text-blue-400" />
            <FaYoutube size={24} className="hover:text-red-500" />
            <FaTiktok size={24} className="hover:text-gray-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

