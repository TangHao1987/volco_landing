import React from "react";
import TextAndImageSection from "./TextAndImageSection";
import ImageWidget from "./ImageWidget";
import ThemeProvider from "../theme-provider";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";

const ForgettingCurveImage = ({ maxHeightClass, t }: { maxHeightClass?: string; t?: any }) => (
  <ImageWidget 
    src="/forgetting-curve.png"
    alt={t ? t('forgetting_curve.image_alt') : "Ebbinghaus Forgetting Curve"} 
    maxWidthClass="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl" // Responsive sizing
    maxHeightClass={maxHeightClass} // Will be overridden by TextAndImageSection in stacked layout
    objectFitClass="object-contain"
  />
);

export function ForgettingCurvePresentation() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://volcosrs.com';
  const currentLang = getLangFromUrl(new URL(currentUrl));
  const t = useTranslations(currentLang);

  return (
    <ThemeProvider>
      <TextAndImageSection 
        id="forgetting-curve"
        title={t('forgetting_curve.title')}
        description={t('forgetting_curve.description')}
        imageComponent={<ForgettingCurveImage t={t} />}
        layoutStyle="stacked-text-top"
        bgColor="bg-slate-50" // Light background for contrast
      />
    </ThemeProvider>
  );
}

export default ForgettingCurvePresentation; 