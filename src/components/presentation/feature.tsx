import React from "react";
import TextAndImageSection from "./TextAndImageSection";
import TitledGridSection from "./TitledGridSection";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import ImageWidget from "./ImageWidget";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";

// Image component for "Dive into 29,000+ Words"
const WordDiscoveryImages = ({ t }: { t?: any }) => (
  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-4">
    <ImageWidget 
      src="/word_list_content_iphone.png" 
      alt={t ? t('image.volco_main_lists') : "Volco Main Lists Tab"}
      maxWidthClass="max-w-xs sm:max-w-sm"
      maxHeightClass="max-h-[50vh]"
      objectFitClass="object-contain"
    />
    <ImageWidget 
      src="/word_search_iphone.png" 
      alt={t ? t('image.volco_search') : "Volco Search Results"}
      maxWidthClass="max-w-xs sm:max-w-sm"
      maxHeightClass="max-h-[50vh]"
      objectFitClass="object-contain"
    />
  </div>
);

// Updated to display three quiz images using ImageWidget
const EngagingQuizzesImages = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 items-start mt-4">
    <ImageWidget 
      src="/example_typingquiz.png"
      alt="Example Typing Quiz"
      maxWidthClass="w-full max-w-[200px] sm:max-w-full"
      maxHeightClass="max-h-[50vh]"
      objectFitClass="object-contain" 
    />
    <ImageWidget 
      src="/quiz_meaning_selection.png"
      alt="Quiz Meaning Selection"
      maxWidthClass="w-full max-w-[200px] sm:max-w-full"
      maxHeightClass="max-h-[50vh]"
      objectFitClass="object-contain"
    />
    <ImageWidget 
      src="/voice_block_quiz_2.png"
      alt="Voice Block Quiz"
      maxWidthClass="w-full max-w-[200px] sm:max-w-full"
      maxHeightClass="max-h-[50vh]"
      objectFitClass="object-contain"
    />
  </div>
);

// Image component for "Learn Anywhere, Anytime"
const HomeImage = () => (
  <ImageWidget 
    src="/home.png" 
    alt="Volco Main Dashboard UI" 
    maxWidthClass="max-w-xs sm:max-w-sm md:max-w-md"
  />
)


// Image component for "Stats Tracking"
const StatsTrackingImage = ({ t }: { t?: any }) => (
  <ImageWidget 
    src="/statistic.png" 
    alt={t ? t('image.volco_stats') : "Volco Stats Page"}
    maxWidthClass="max-w-xs sm:max-w-sm md:max-w-md"
    objectFitClass="object-contain"
  />
);



export function FeaturesPresentation() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://volcosrs.com';
  const currentLang = getLangFromUrl(new URL(currentUrl));
  const t = useTranslations(currentLang);

  // Data for "How It Works" section grid - moved inside component to access translations
  const STATUS_ITEMS_DATA = [
    {
      title: t('features.status_to_study'),
      description: t('features.status_to_study_desc'),
    },
    {
      title: t('features.status_learning'),
      description: t('features.status_learning_desc'),
    },
    {
      title: t('features.status_known'),
      description: t('features.status_known_desc'),
    }
  ];

  // Grid items for "How It Works" section - moved inside component to access translations
  const howItWorksGridItems = STATUS_ITEMS_DATA.map((item, index) => (
    <Card key={index} shadow={false} className="p-6 bg-white rounded-lg shadow-md w-full max-w-xs sm:max-w-sm">
      <CardBody className="text-center flex flex-col items-center h-full">
        <Typography variant="h5" className="text-xl font-semibold text-slate-900 mb-3">
          {item.title}
        </Typography>
        <Typography className="text-slate-700 text-sm mb-4 flex-grow">
          {item.description}
        </Typography>
      </CardBody>
    </Card>
  ));

  return (
    <ThemeProvider>
      <TitledGridSection 
        id="how-it-works"
        bgColor="bg-slate-100"
        title={t('features.main_title')}
        description={t('features.main_description')}
        gridItems={howItWorksGridItems}
        itemsPerRow={3}
      />

      <TextAndImageSection 
        id="features" 
        title={t('features.word_discovery_title')}
        description={t('features.word_discovery_desc')}
        imageComponent={<WordDiscoveryImages t={t} />}
        layoutStyle="stacked-text-top"
        bgColor="bg-[#42A5F520]"
      />

      <TextAndImageSection 
        title={t('features.engaging_quizzes_title')}
        description={t('features.engaging_quizzes_desc')}
        imageComponent={<EngagingQuizzesImages />}
        layoutStyle="stacked-text-top"
        bgColor="bg-slate-100"
      />

      <TextAndImageSection 
        title={t('features.offline_learning_title')}
        description={t('features.offline_learning_desc')}
        imageComponent={<HomeImage />}
        layoutStyle="side-by-side"
        textOrder="image-first"
        bgColor="bg-[#42A5F520]"
      />

      <TextAndImageSection 
        id="stats"
        title={t('features.statistics_title')}
        description={t('features.statistics_desc')}
        imageComponent={<StatsTrackingImage t={t} />}
        layoutStyle="side-by-side"
        textOrder="text-first"
        bgColor="bg-slate-100"
      />
    </ThemeProvider>
  );
}

export default FeaturesPresentation;
