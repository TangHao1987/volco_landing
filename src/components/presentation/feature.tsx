import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function FeaturesPresentation() {
  return (
    <ThemeProvider>
      {/* Section: Dive into 29,000+ Words */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
            Dive into 29,000+ Words, Ready to Learn.
          </Typography>
          <Typography className="text-lg sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto">
            No need to create flashcards! Explore curated "Word Books" by category (like BEC, GMAT, TOEFL) or study words ranked by frequency. Finding and adding words is effortless.
          </Typography>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <img 
              src="https://placehold.co/375x667/C7D2FE/4338CA?text=Main+Lists+Tab+(image4.jpg)" 
              alt="Volco Main Lists Tab"
              className="rounded-xl shadow-2xl mx-auto border-4 border-slate-200 max-w-xs sm:max-w-sm"
            />
            <img 
              src="https://placehold.co/375x667/C7D2FE/4338CA?text=Search+Results+(image5.jpg)" 
              alt="Volco Search Results"
              className="rounded-xl shadow-2xl mx-auto border-4 border-slate-200 max-w-xs sm:max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Section: Engaging Quizzes */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
            Engaging Quizzes Tailored to Your Learning Style.
          </Typography>
          <Typography className="text-lg sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto">
            Make learning fun and effective with multiple quiz formats like multiple-choice, typing challenges, and word block puzzles, all designed to reinforce your understanding.
          </Typography>
          <img 
            src="https://placehold.co/600x400/DBEAFE/3730A3?text=Quiz+Types+Collage+(image6.jpg)" 
            alt="Collage of Volco Quiz Types"
            className="rounded-xl shadow-xl mx-auto max-w-2xl w-full border-4 border-slate-200"
          />
        </div>
      </section>

      {/* Section: Learn Anywhere, Anytime */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
            Learn Anywhere, Anytime – Your Progress is Always Safe.
          </Typography>
          <Typography className="text-lg sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto">
            Volco works seamlessly without an internet connection, perfect for commutes or travel. Plus, your vocabulary and progress are securely backed up to the cloud.
          </Typography>
          <img 
            src="https://placehold.co/375x667/E0E7FF/4338CA?text=Fill-in-Blank+Quiz+with+Airplane+Mode"
            alt="Volco Quiz in Offline Mode"
            className="rounded-xl shadow-2xl mx-auto border-4 border-slate-200 max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </section>

      {/* Section: Stats Tracking */}
      <section id="stats" className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
            See Your Vocabulary Grow with Clear Statistics.
          </Typography>
          <Typography className="text-lg sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto">
            Volco provides insights on total study time, words mastered, study sessions, and learning streaks, helping you stay motivated and understand your learning journey.
          </Typography>
          <img 
            src="https://placehold.co/375x667/DBEAFE/3730A3?text=Volco+Stats+Page+(image7.jpg)" 
            alt="Volco Stats Page"
            className="rounded-xl shadow-2xl mx-auto border-4 border-slate-200 max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </section>
    </ThemeProvider>
  );
}

export default FeaturesPresentation;
