import React from "react";
// Button is no longer imported from @material-tailwind/react for HeroActions
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import TextAndImageSection from "./TextAndImageSection";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";

// New component for the action buttons
const HeroActions = ({ t }: { t: any }) => (
  // Adjusted styling for spacing and responsiveness
  <div className="mb-12 flex flex-col items-center sm:flex-row gap-4 sm:gap-6 sm:justify-center md:justify-center">
    <a 
      href="https://apps.apple.com/sg/app/volco-srs-learn-english-word/id6745894948" // Placeholder link
      target="_blank" 
      rel="noopener noreferrer"
      className="w-auto h-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg transition-transform hover:scale-105"
    >
      <img 
        src="/download_on_the_app_store.svg" 
        alt={t('hero.app_store_alt')}
        className="h-10 sm:h-12" // Adjusted height, width will scale proportionally
      /> 
    </a>
    <a 
      href="#" // Placeholder link
      target="_blank" 
      rel="noopener noreferrer"
      className="hidden w-auto h-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg transition-transform hover:scale-105"
    >
      <img 
        src="/get_it_on_google_play.svg" 
        alt={t('hero.google_play_alt')}
        className="h-10 sm:h-12" // Adjusted height
      /> 
    </a>
  </div>
);

// New component for the Hero Image
const HeroImage = () => (
  <div className="flex justify-center"> {/* Added a container for centering and applying max-width */}
    <video 
      src="/video/Volco.mp4" 
      className="max-w-[16rem] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[22rem] rounded-lg shadow-xl" // Better responsive sizing progression
      autoPlay 
      loop 
      muted 
      playsInline // Important for iOS autoplay
    >
      Your browser does not support the video tag.
    </video>
  </div>
);

export function HeroPresentation() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://volcosrs.com';
  const currentLang = getLangFromUrl(new URL(currentUrl));
  const t = useTranslations(currentLang);

  // Function to render title with styled Volco placeholder
  const renderTitle = () => {
    const titleText = t('hero.title');
    const parts = titleText.split('Volco');
    
    if (parts.length === 2) {
      // Volco appears in the middle
      return (
        <>
          {parts[0]}
          <span className="text-indigo-600">Volco</span>
          {parts[1]}
        </>
      );
    } else {
      // Fallback: just return the text as is
      return titleText;
    }
  };

  return (
    <ThemeProvider>
      <TextAndImageSection
        id="hero"
        title={renderTitle()}
        description={t('hero.description')}
        actionsComponent={<HeroActions t={t} />}
        imageComponent={<HeroImage />}
        layoutStyle="side-by-side"
        bgColor="bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100"
      />
    </ThemeProvider>
  );
}

export default HeroPresentation; 