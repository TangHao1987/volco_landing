import React from "react";
import { Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

interface TextAndImageSectionProps {
  title: React.ReactNode;
  description: string;
  imageComponent: React.ReactNode;
  actionsComponent?: React.ReactNode;
  id?: string;
  bgColor?: string; // e.g., 'bg-white' or 'bg-slate-100'
  textOrder?: 'text-first' | 'image-first'; // To control order on lg screens and up
  layoutStyle?: 'side-by-side' | 'stacked-text-top'; // New prop for layout style
}

export function TextAndImageSection({
  title,
  description,
  imageComponent,
  actionsComponent,
  id,
  bgColor = "bg-white",
  textOrder = 'text-first',
  layoutStyle = 'side-by-side', // Default to side-by-side
}: TextAndImageSectionProps) {
  // Determine column spans and order for side-by-side layout
  const textSpanClass = "lg:col-span-2";
  const imageSpanClass = "lg:col-span-1";
  
  const textOrderClass = textOrder === 'text-first' ? 'lg:order-1' : 'lg:order-2';
  const imageOrderClass = textOrder === 'text-first' ? 'lg:order-2' : 'lg:order-1';

  return (
    <ThemeProvider>
      <section id={id} className={`py-16 md:py-24 ${bgColor}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {layoutStyle === 'side-by-side' ? (
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              <div className={`text-center lg:text-left ${textSpanClass} ${textOrderClass}`}>
                <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
                  {title}
                </Typography>
                <Typography className="text-lg sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto lg:mx-0">
                  {description}
                </Typography>
                {actionsComponent && <div className="mt-8 lg:mt-10">{actionsComponent}</div>}
              </div>
              <div className={`flex justify-center ${imageSpanClass} ${imageOrderClass} ${textOrder === 'text-first' ? 'lg:justify-end' : 'lg:justify-start'}`}>
                {imageComponent}
              </div>
            </div>
          ) : (
            // Stacked layout: text on top, image below
            <div className="text-center">
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
                {title}
              </Typography>
              <Typography className="text-lg sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto">
                {description}
              </Typography>
              {actionsComponent && <div className="mt-4 mb-10 sm:mb-12 flex">{actionsComponent}</div>}
              <div className="flex justify-center">
                {React.isValidElement(imageComponent) ? 
                  React.cloneElement(imageComponent as React.ReactElement<any>, { maxHeightClass: 'max-h-[55vh]' })
                  : imageComponent}
              </div>
            </div>
          )}
        </div>
      </section>
    </ThemeProvider>
  );
}

export default TextAndImageSection; 