import React, { useState } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/footer';

const Profile = ({ user }) => {
  const [preview, setPreview] = useState(user?.avatar || "/avatar-placeholder.png");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const Button = ({ children, variant = "default", className = "", ...props }) => {
    const base = "px-4 py-2 rounded-lg font-semibold transition duration-200";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      link: "text-blue-500 underline hover:text-blue-600",
      destructive: "bg-red-600 text-white hover:bg-red-700",
    };
    return (
      <button className={`${base} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  };

  const Card = ({ children }) => (
    <div className="shadow-xl rounded-3xl bg-white dark:bg-zinc-800 transition-colors duration-300">
      <div className="p-6">{children}</div>
    </div>
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen p-6 bg-gradient-to-br from-sky-100 to-orange-100 dark:from-zinc-900 dark:to-black transition-colors duration-500">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Profile Card */}
          <Card>
            <div className="flex flex-col items-center">
              <img
                src={preview}
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-md mb-4 object-cover"
              />
              <h2 className="text-3xl font-extrabold tracking-wide font-[sans-serif] text-gray-900 dark:text-white">
                {user?.name}
              </h2>
              <p className="mt-1 text-sm opacity-80 text-gray-900 dark:text-white">{user?.email}</p>
              <p className="text-sm opacity-80 text-gray-900 dark:text-white">{user?.phone}</p>

              <div className="mt-4 flex flex-col items-center">
                <label
                  htmlFor="avatarUpload"
                  className="cursor-pointer bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit Picture
                </label>
                <input
                  id="avatarUpload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <span className="text-xs mt-1 text-gray-400">JPEG, PNG, Max 2MB</span>
              </div>
            </div>
          </Card>

          {/* Quiz Stats */}
          <Card>
            <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">📊 Quiz Stats</h3>
            <ul className="space-y-2 text-sm text-gray-900 dark:text-white">
              <li>Questions Attempted: {user?.quizStats?.attempted}</li>
              <li>Correct Answers: {user?.quizStats?.correct}</li>
              <li>Total Marks: {user?.quizStats?.marks}</li>
              <li>Highest Score: {user?.quizStats?.highScore}</li>
            </ul>
          </Card>

          {/* Help Center */}
          <Card>
            <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">🛟 Help Center</h3>
            <ul className="space-y-2 text-sm text-gray-900 dark:text-white">
              <li>FAQs</li>
              <li>Contact Support</li>
            </ul>
          </Card>

          {/* About Us */}
          <Card>
            <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">ℹ️ About Us</h3>
            <ul className="space-y-2 text-sm text-gray-900 dark:text-white">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </Card>

          {/* Delete Account */}
          <Card>
            <h3 className="font-bold text-xl text-red-600 mb-2">⚠️ Delete Account</h3>
            <p className="text-sm mb-3 text-gray-900 dark:text-white">
              This will permanently delete your account and all associated data.
            </p>
            <Button variant="destructive">Delete Account</Button>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
