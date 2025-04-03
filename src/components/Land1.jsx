import React from "react";
import { DotPattern } from "./magicui/dot-pattern";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import assets from "@/assets/assets";

const Land1 = () => {
  return (
    <div className="relative w-full h-[1000px] overflow-hidden">
      {/* Ensure text is visible & correctly placed */}
      <div className="relative z-1 flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold mt-20 ml-10">Brain Brawl</h1>
      <AnimatedShinyText className="text-2xl inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>Test your knowledge, compete with friends, and climb the leaderboard!</span>
        </AnimatedShinyText>
        <img src={assets.kid} alt="" className="w-130 h-100 rounded-lg" />
</div>
      {/* DotPattern behind text but NOT the navbar */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <DotPattern className="w-full h-full [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
      </div>
    </div>
  );
};

export default Land1;
