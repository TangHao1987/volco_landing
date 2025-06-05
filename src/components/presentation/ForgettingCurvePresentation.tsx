import React from "react";
import TextAndImageSection from "./TextAndImageSection";
import ImageWidget from "./ImageWidget";
import ThemeProvider from "../theme-provider";

const ForgettingCurveImage = ({ maxHeightClass }: { maxHeightClass?: string }) => (
  <ImageWidget 
    src="/forgetting-curve.png"
    alt="Ebbinghaus Forgetting Curve" 
    maxWidthClass="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl" // Responsive sizing
    maxHeightClass={maxHeightClass} // Will be overridden by TextAndImageSection in stacked layout
    objectFitClass="object-contain"
  />
);

export function ForgettingCurvePresentation() {
  return (
    <ThemeProvider>
      <TextAndImageSection 
        id="forgetting-curve"
        title="Why We Forget: The Science of the Forgetting Curve"
        description="Ever wondered why newly learned information fades so quickly? The Ebbinghaus forgetting curve illustrates how memory retention declines over time unless we actively reinforce it. Volco is designed to combat this natural process."
        imageComponent={<ForgettingCurveImage />}
        layoutStyle="stacked-text-top"
        bgColor="bg-slate-50" // Light background for contrast
      />
    </ThemeProvider>
  );
}

export default ForgettingCurvePresentation; 