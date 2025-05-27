import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white py-20">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="mb-8 text-center lg:text-left">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight font-bold"
            >
              Dive into 29,000+ Words, Ready to Learn.
            </Typography>
            <Typography color="blue-gray" className="lg:pr-32 mb-8">
              Emphasize that users don't need to create flashcards. Highlight the curated "Word Books" (by category like BEC, GMAT, TOEFL) and the ability to study words ranked by frequency.
            </Typography>
            <div className="mb-8">
                <img src="placeholder-screenshot4.png" alt="Volco Main Lists Tab" className="mx-auto lg:mx-0 w-full md:w-2/3 shadow-lg rounded-lg" />
            </div>
          </div>
          <div className="flex justify-center">
            <img src="placeholder-screenshot5.png" alt="Volco Word Search Results" className="mx-auto w-full md:w-2/3 shadow-lg rounded-lg" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
