import React from "react";
import { FaArrowRight } from "react-icons/fa";

const FeatureHighlight = () => {
  return (
    <section className="py-16 px-6 text-center bg-white dark:bg-black transition-all duration-300">
      <h2 className="text-4xl font-extrabold text-yellow-500 dark:text-yellow-400 mb-6">
        🚀 AI-Powered Quiz Generator
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
        Transform your notes into interactive quizzes in just a few clicks!  
        AI does the work, you focus on learning. 🎯
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Step 1: Upload PDF */}
        <div className="w-80 h-36 p-6 rounded-lg shadow-lg text-white 
            bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-gray-700 dark:to-gray-900">
          <h3 className="text-xl font-bold">📂 User Uploads PDF</h3>
          <p className="mt-2">Upload your notes or book chapters.</p>
        </div>

        {/* Arrow */}
        <FaArrowRight className="hidden md:block text-gray-500 dark:text-gray-300 text-3xl" />

        {/* Step 2: AI Analyzes */}
        <div className="w-80 h-36 p-6 rounded-lg shadow-lg text-white 
            bg-gradient-to-br from-blue-400 to-blue-600 dark:from-purple-600 dark:to-indigo-900">
          <h3 className="text-xl font-bold">🤖 AI Analyzes Content</h3>
          <p className="mt-2">Our smart AI reads and understands your material.</p>
        </div>

        {/* Arrow */}
        <FaArrowRight className="hidden md:block text-gray-500 dark:text-gray-300 text-3xl" />

        {/* Step 3: Quiz Generated */}
        <div className="w-80 h-36 p-6 rounded-lg shadow-lg text-white 
            bg-gradient-to-br from-green-400 to-green-600 dark:from-teal-600 dark:to-teal-900">
          <h3 className="text-xl font-bold">🎯 Quiz is Generated</h3>
          <p className="mt-2">An interactive quiz is ready from your content!</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
