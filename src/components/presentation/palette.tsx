import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function PalettePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="hidden lg:flex justify-center">
            <img src="placeholder-screenshots6-7.png" alt="Volco Quiz Types Collage" className="max-w-xl rounded-3xl mx-auto shadow-lg" />
          </div>
          
          <div className="text-center lg:text-left">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight font-bold"
            >
              Engaging Quizzes Tailored to Your Learning Style.
            </Typography>
            <Typography color="gray" className="lg:pr-20">
              Describe the different quiz formats available (e.g., multiple-choice, typing, word blocks, fill-in-the-blank) and how they reinforce understanding in varied ways.
            </Typography>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;
