import React from "react";
// import Script from "next/script";

import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";

// Removed PaddleLoader and its useEffect hook

export function FinalCtaPresentation() {
  const year = new Date().getFullYear(); // Added from footer
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://volcosrs.com';
  const currentLang = getLangFromUrl(new URL(currentUrl));
  const t = useTranslations(currentLang);

  return (
    <ThemeProvider>
      <section id="final-cta" className="py-10 md:py-24 bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-6">
            {t('final_cta.title')}
          </Typography>
          <Typography className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-slate-100">
            {t('final_cta.description')}
          </Typography>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a 
              href="https://apps.apple.com/sg/app/volco-srs-learn-english-word/id6745894948" // Placeholder link
              target="_blank" 
              rel="noopener noreferrer"
              className="w-auto h-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 rounded-lg transition-transform hover:scale-105"
            >
              <img 
                src="/download_on_the_app_store.svg" 
                alt={t('hero.app_store_alt')}
                className="h-10 sm:h-12" // Adjusted height
              /> 
            </a>
            <a 
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden w-auto h-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 rounded-lg transition-transform hover:scale-105"
            >
              <img 
                src="/get_it_on_google_play.svg" 
                alt={t('hero.google_play_alt')}
                className="h-10 sm:h-12" // Adjusted height
              /> 
            </a>
          </div>

          {/* Footer Content Merged Below */}
          <div className="mt-16 pt-2">
            <Typography variant="paragraph" className="mb-0 text-slate-200">
              &copy; {year} {t('footer.copyright')}
            </Typography>
            <div className="flex flex-row justify-center items-center gap-4 mt-4">
              <Typography
                as="a"
                href="https://doc-hosting.flycricket.io/volco-srs-privacy-policy/3ea1a6fc-afdb-46e4-9180-fbb467e7f9e6/privacy"
                variant="small"
                className="text-slate-300 hover:text-white transition-colors mx-2"
              >
                {t('footer.privacy')}
              </Typography>
              <Typography
                as="a"
                href="https://doc-hosting.flycricket.io/volco-srs-terms-of-use/9d4ca67d-5a61-4b56-8e64-08caf0d3363c/terms"
                variant="small"
                className="text-slate-300 hover:text-white transition-colors mx-2"
              >
                {t('footer.terms')}
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default FinalCtaPresentation;
