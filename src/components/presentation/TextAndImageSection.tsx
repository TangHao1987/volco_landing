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
  textOrder?: 'text-first' | 'image-first'; // To control order on md screens and up
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
  const textSpanClass = "md:col-span-2";
  const imageSpanClass = "md:col-span-1";
  
  const textOrderClass = textOrder === 'text-first' ? 'md:order-1' : 'md:order-2';
  const imageOrderClass = textOrder === 'text-first' ? 'md:order-2' : 'md:order-1';

  return (
    <ThemeProvider>
      <section id={id} className={`py-16 md:py-24 ${bgColor}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {layoutStyle === 'side-by-side' ? (
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className={`text-center md:text-left ${textSpanClass} ${textOrderClass}`}>
                <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
                  {title}
                </Typography>
                <Typography className="text-lg sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto md:mx-0">
                  {description}
                </Typography>
                {actionsComponent && <div className="mt-8 md:mt-10">{actionsComponent}</div>}
              </div>
              <div className={`flex justify-center ${imageSpanClass} ${imageOrderClass} ${textOrder === 'text-first' ? 'md:justify-end' : 'md:justify-start'}`}>
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
              {actionsComponent && <div className="mt-4 mb-10 sm:mb-12">{actionsComponent}</div>}
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