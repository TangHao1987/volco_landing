import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function HeroPresentation() {
  return (
    <ThemeProvider>
      <section id="hero" className="pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography 
            variant="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Master Vocabulary for Life with <span className="text-indigo-600">Volco</span>.
          </Typography>
          <Typography className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-10 max-w-3xl mx-auto">
            The intelligent app that uses science to build your long-term memory for words.
          </Typography>
          <div className="mb-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              size="lg" 
              className="cta-button w-full sm:w-auto group"
              onClick={() => window.open("#", "_blank")} // Placeholder link
            >
              <img 
                src="https://placehold.co/24x24/FFFFFF/FFFFFF?text=A" 
                alt="App Store Icon" 
                className="w-6 h-6 mr-2 filter invert group-hover:filter-none transition-all duration-300"
              /> 
              Download on the App Store
            </Button>
            <Button 
              size="lg" 
              className="cta-button w-full sm:w-auto group"
              onClick={() => window.open("#", "_blank")} // Placeholder link
            >
              <img 
                src="https://placehold.co/24x24/FFFFFF/FFFFFF?text=G" 
                alt="Google Play Icon" 
                className="w-6 h-6 mr-2 filter invert group-hover:filter-none transition-all duration-300"
              /> 
              Get on Google Play
            </Button>
          </div>
          <img 
            src="https://placehold.co/375x667/E0E7FF/4338CA?text=Volco+Dashboard+(image1.jpg)" 
            alt="Volco Main Dashboard UI" 
            className="rounded-xl shadow-2xl mx-auto border-4 border-slate-200 max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </section>
    </ThemeProvider>
  );
}

export default HeroPresentation; 