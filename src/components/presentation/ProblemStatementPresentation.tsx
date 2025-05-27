import React from "react";
import TextAndImageSection from "./TextAndImageSection";
import ImageWidget from "./ImageWidget";

interface ProblemImageProps {
  maxHeightClass?: string;
}

const ProblemImage = ({ maxHeightClass }: ProblemImageProps) => (
  <ImageWidget 
    src="/astro-launch-ui/result_page.png"
    alt="Forgetting Curve Graphic Substitute - Quiz Result Page" 
    maxWidthClass="w-full"
    maxHeightClass={maxHeightClass}
    additionalClasses="h-auto"
  />
);

export function ProblemStatementPresentation() {
  return (
    <TextAndImageSection 
      id="problem"
      title="Tired of Forgetting New Words?"
      description="Traditional learning methods often lead to quick forgetting. Volco is engineered to change that, using a smarter approach to help you truly master vocabulary."
      imageComponent={<ProblemImage />}
      bgColor="bg-white"
      textOrder="image-first"
      layoutStyle="side-by-side"
    />
  );
}

export default ProblemStatementPresentation; 