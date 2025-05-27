import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function ProblemStatementPresentation() {
  return (
    <ThemeProvider>
      <section id="problem" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
            Tired of Forgetting New Words?
          </Typography>
          <Typography className="text-lg sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto">
            Traditional learning methods often lead to quick forgetting. Volco is engineered to change that, using a smarter approach to help you truly master vocabulary.
          </Typography>
          <img 
            src="https://placehold.co/600x350/E0E7FF/4338CA?text=Forgetting+Curve+Graphic+(image2.jpg)" 
            alt="Forgetting Curve Graphic" 
            className="rounded-xl shadow-xl mx-auto max-w-2xl w-full border-4 border-slate-200"
          />
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ProblemStatementPresentation; 