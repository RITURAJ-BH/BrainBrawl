import React from "react";

// Feature data
const features = [
  {
    icon: "⏰",
    title: "Save Time",
    description:
      "Instantly access well-structured quizzes and focus on mastering concepts efficiently.",
  },
  {
    icon: "📑",
    title: "Get More Done",
    description:
      "Enhance your learning speed by taking quick quizzes, tracking progress, and improving with every attempt.",
  },
  {
    icon: "🧠",
    title: "Work Smart, Not Hard",
    description:
      "Engage with interactive quizzes that make studying enjoyable while reinforcing key concepts effortlessly.",
  },
  {
    icon: "🚀",
    title: "Get Ahead Instead of Left Behind",
    description:
      "Stay competitive with real-time leaderboards, timed quizzes, and AI-driven insights to improve your knowledge.",
  },
  {
    icon: "📂",
    title: "Stay Organized",
    description:
      "Easily navigate through categorized quizzes, topic-wise practice tests, and personalized recommendations.",
  },
  {
    icon: "🔔",
    title: "Never Miss a Challenge",
    description:
      "Receive reminders for new quizzes, track your rankings, and challenge friends to test your knowledge in real-time.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-6 bg-white dark:bg-black text-center mt-[-240px]">
      <h3 className="text-gray-400 uppercase text-lg font-semibold mb-2">
        Why Choose Brain-Brawl?
      </h3>
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
        "Challenge Your Mind, Compete with Friends, and Climb the Leaderboard!"
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 dark:bg-zinc-900/50 backdrop-blur-lg p-6 shadow-lg rounded-xl text-left flex items-start gap-4 transition transform hover:scale-102 hover:shadow-md"
          >
            <span className="text-3xl">{feature.icon}</span>
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
