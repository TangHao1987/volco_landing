import React from "react";
import {
  Button,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export function CodePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight font-bold"
            >
              Learn Anywhere, Anytime – Your Progress is Always Safe.
            </Typography>
            <Typography color="blue-gray" className="lg:pr-20">
              Explain that Volco works seamlessly without an internet connection, perfect for commutes or travel. Reassure users that their vocabulary and progress are securely backed up to the cloud and synced across devices.
            </Typography>
          </div>
          <div className="flex justify-center mt-8 lg:mt-0">
            <img src="placeholder-screenshot7-offline.png" alt="Volco Offline Mode - Fill-in-the-Blank Quiz" className="max-w-md rounded-3xl shadow-lg mx-auto" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;
