import React from "react";
import TextAndImageSection from "./TextAndImageSection";
import ImageWidget from "./ImageWidget";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";

interface ProblemImageProps {
  maxHeightClass?: string;
}

const ProblemImage = ({ maxHeightClass }: ProblemImageProps) => (
  <ImageWidget 
    src="/result_page.png"
    alt="Forgetting Curve Graphic Substitute - Quiz Result Page" 
    maxWidthClass="w-full"
    maxHeightClass={maxHeightClass}
    additionalClasses="h-auto"
  />
);

export function ProblemStatementPresentation() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://volcosrs.com';
  const currentLang = getLangFromUrl(new URL(currentUrl));
  const t = useTranslations(currentLang);

  return (
    <TextAndImageSection 
      title={t('problem.title')}
      description={t('problem.description')}
      imageComponent={<ProblemImage />}
      bgColor="bg-[#42A5F520]"
      textOrder="image-first"
      layoutStyle="side-by-side"
    />
  );
}

export default ProblemStatementPresentation; 