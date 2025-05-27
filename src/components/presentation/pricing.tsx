import React from "react";
// import Script from "next/script";

import {
  Typography,
  Button,
  // Card, CardBody, CardHeader are removed as they are not used for the CTA section
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

// Removed PaddleLoader and its useEffect hook

export function FinalCtaPresentation() {
  return (
    <ThemeProvider>
      <section id="final-cta" className="py-20 md:py-32 bg-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-6">
            Start Your Journey to Vocabulary Mastery Today.
          </Typography>
          <Typography className="text-lg sm:text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
            Join thousands of learners who are already building their vocabulary for life with Volco's intelligent and effective system.
          </Typography>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              size="lg"
              className="cta-button bg-white text-indigo-700 hover:bg-indigo-50 focus:ring-indigo-500 focus:ring-offset-indigo-700 w-full sm:w-auto"
              onClick={() => window.open("#", "_blank")} // Placeholder link
            >
              <img src="https://placehold.co/28x28/4338CA/4338CA?text=A" alt="App Store Icon" className="w-6 h-6 mr-3" />
              Download on the App Store
            </Button>
            <Button 
              size="lg"
              className="cta-button bg-white text-indigo-700 hover:bg-indigo-50 focus:ring-indigo-500 focus:ring-offset-indigo-700 w-full sm:w-auto"
              onClick={() => window.open("#", "_blank")} // Placeholder link
            >
              <img src="https://placehold.co/28x28/4338CA/4338CA?text=G" alt="Google Play Icon" className="w-6 h-6 mr-3" />
              Get on Google Play
            </Button>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default FinalCtaPresentation;
