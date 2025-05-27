import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

interface TitledGridSectionProps {
  id?: string;
  bgColor?: string;
  title: string;
  description: string;
  gridItems: React.ReactNode[];
  itemsPerRow?: 1 | 2 | 3 | 4; // Updated to include 1
}

export function TitledGridSection({
  id,
  bgColor = "bg-white",
  title,
  description,
  gridItems,
  itemsPerRow = 3, // Default to 3 items per row
}: TitledGridSectionProps) {
  let gridColsClass = "md:grid-cols-3"; // Default for itemsPerRow = 3
  if (itemsPerRow === 1) {
    gridColsClass = "md:grid-cols-1";
  } else if (itemsPerRow === 2) {
    gridColsClass = "md:grid-cols-2";
  } else if (itemsPerRow === 4) {
    gridColsClass = "md:grid-cols-4";
  }

  return (
    <ThemeProvider>
      <section id={id} className={`py-16 md:py-24 ${bgColor}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
            {title}
          </Typography>
          <Typography className="text-lg sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto">
            {description}
          </Typography>
          
          {/* Ensure gridItems is not empty before rendering the grid div */}
          {gridItems && gridItems.length > 0 && (
            <div className={`grid grid-cols-1 ${gridColsClass} gap-8 mt-12 mb-12`}>
              {gridItems.map((item, index) => (
                <div key={index} className="flex justify-center">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </ThemeProvider>
  );
}

export default TitledGridSection; 