import React from "react";
// import Script from "next/script";

import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

// Removed PaddleLoader and its useEffect hook

export function FinalCtaPresentation() {
  return (
    <ThemeProvider>
      <section id="final-cta" className="py-20 md:py-32 bg-gradient-to-br from-[#42A5F566] to-[#AB47BC66]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-6">
            Start Your Journey to Vocabulary Mastery Today.
          </Typography>
          <Typography className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of learners who are already building their vocabulary for life with Volco's intelligent and effective system.
          </Typography>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a 
              href="#" // Placeholder link
              target="_blank" 
              rel="noopener noreferrer"
              className="w-auto h-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 rounded-lg transition-transform hover:scale-105"
            >
              <img 
                src="/download_on_the_app_store.svg" 
                alt="Download on the App Store"
                className="h-10 sm:h-12" // Adjusted height
              /> 
            </a>
            <a 
              href="#" // Placeholder link
              target="_blank" 
              rel="noopener noreferrer"
              className="w-auto h-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 rounded-lg transition-transform hover:scale-105"
            >
              <img 
                src="/get_it_on_google_play.svg" 
                alt="Get on Google Play"
                className="h-10 sm:h-12" // Adjusted height
              /> 
            </a>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default FinalCtaPresentation;
