import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function FooterPresentation() {
  const year = new Date().getFullYear();

  return (
    <ThemeProvider>
      <footer className="bg-slate-800 text-slate-400 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="paragraph" className="mb-0">
            &copy; {year} Volco. All rights reserved.
          </Typography>
          <Typography variant="small" className="mt-2">
            Master your vocabulary, build lasting knowledge.
          </Typography>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default FooterPresentation;
