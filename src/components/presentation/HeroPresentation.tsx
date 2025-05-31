import React from "react";
// Button is no longer imported from @material-tailwind/react for HeroActions
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import ImageWidget from "./ImageWidget";
import TextAndImageSection from "./TextAndImageSection";

// New component for the action buttons
const HeroActions = () => (
  // Adjusted styling for spacing and responsiveness
  <div className="mb-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
    <a 
      href="#" // Placeholder link
      target="_blank" 
      rel="noopener noreferrer"
      className="w-auto h-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg transition-transform hover:scale-105"
    >
      <img 
        src="/download_on_the_app_store.svg" 
        alt="Download on the App Store"
        className="h-10 sm:h-12" // Adjusted height, width will scale proportionally
      /> 
    </a>
    <a 
      href="#" // Placeholder link
      target="_blank" 
      rel="noopener noreferrer"
      className="w-auto h-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg transition-transform hover:scale-105"
    >
      <img 
        src="/get_it_on_google_play.svg" 
        alt="Get on Google Play"
        className="h-10 sm:h-12" // Adjusted height
      /> 
    </a>
  </div>
);

// New component for the Hero Image
const HeroImage = () => (
  <ImageWidget 
    src="/home.png" 
    alt="Volco Main Dashboard UI" 
    maxWidthClass="max-w-xs sm:max-w-sm md:max-w-md"
  />
);

export function HeroPresentation() {
  return (
    <ThemeProvider>
      <TextAndImageSection
        id="hero"
        title={<>Master Vocabulary for Life with <span className="text-indigo-600">Volco</span>.</>}
        description="The intelligent app that uses science to build your long-term memory for words."
        actionsComponent={<HeroActions />}
        imageComponent={<HeroImage />}
        layoutStyle="side-by-side"
        bgColor="bg-gradient-to-br from-[#42A5F566] to-[#AB47BC66]"
      />
    </ThemeProvider>
  );
}

export default HeroPresentation; 