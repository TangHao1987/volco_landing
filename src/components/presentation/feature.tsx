import React from "react";
import TextAndImageSection from "./TextAndImageSection";
import TitledGridSection from "./TitledGridSection";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import ImageWidget from "./ImageWidget";

// Image component for "Dive into 29,000+ Words"
const WordDiscoveryImages = () => (
  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-4">
    <ImageWidget 
      src="/word_list_content_iphone.png" 
      alt="Volco Main Lists Tab"
      maxWidthClass="max-w-xs sm:max-w-sm"
      maxHeightClass="max-h-[50vh]"
      objectFitClass="object-contain"
    />
    <ImageWidget 
      src="/word_search_iphone.png" 
      alt="Volco Search Results"
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
const StatsTrackingImage = () => (
  <ImageWidget 
    src="/statistic.png" 
    alt="Volco Stats Page"
    maxWidthClass="max-w-xs sm:max-w-sm md:max-w-md"
    objectFitClass="object-contain"
  />
);

// Data for "How It Works" section grid
const STATUS_ITEMS_DATA = [
  {
    title: "To Study Status",
    description: "These are new words or words that are due for review. Volco identifies them as ready for your attention, based on your learning progress and the optimal review schedule.",
  },
  {
    title: "Learning Status",
    description: "Words in this status are actively being learned. They require more frequent review to solidify your memory. Volco will bring them back at increasing intervals until mastered.",
  },
  {
    title: "Known Status",
    description: "Congratulations! These are words you\'ve successfully mastered and have a strong, long-term memory of. Volco will review them much less frequently to ensure retention.",
  }
];

// Grid items for "How It Works" section
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

const howItWorksDescription = "Volco's intelligent Spaced Repetition System (SRS) automatically manages word status, moving them between \"To Study,\" \"Learning,\" and \"Known\" buckets. It schedules reviews at optimal times to ensure words stick in your long-term memory.";

export function FeaturesPresentation() {
  return (
    <ThemeProvider>
      <TitledGridSection 
        id="how-it-works"
        bgColor="bg-slate-100"
        title="Powered by Science: Your Words, Intelligently Managed."
        description={howItWorksDescription}
        gridItems={howItWorksGridItems}
        itemsPerRow={3}
      />

      <TextAndImageSection 
        id="features" 
        title="Dive into 29,000+ Words, Ready to Learn."
        description='No need to create flashcards! Explore curated "Word Books" by category (like BEC, GMAT, TOEFL) or study words ranked by frequency. Finding and adding words is effortless.'
        imageComponent={<WordDiscoveryImages />}
        layoutStyle="stacked-text-top"
        bgColor="bg-[#42A5F520]"
      />


      <TextAndImageSection 
        title="Engaging Quizzes Tailored to Your Learning Style."
        description="Make learning fun and effective with multiple quiz formats like multiple-choice, typing challenges, and word block puzzles, all designed to reinforce your understanding."
        imageComponent={<EngagingQuizzesImages />}
        layoutStyle="stacked-text-top"
        bgColor="bg-slate-100"
      />

      <TextAndImageSection 
        title="Learn Anywhere, Anytime – Your Progress is Always Safe."
        description="Volco works seamlessly without an internet connection, perfect for commutes or travel. Plus, your vocabulary and progress are securely backed up to the cloud."
        imageComponent={<HomeImage />}
        layoutStyle="side-by-side"
        textOrder="image-first"
        bgColor="bg-[#42A5F520]"
      />

      <TextAndImageSection 
        id="stats"
        title="See Your Vocabulary Grow with Clear Statistics."
        description="Volco provides insights on total study time, words mastered, study sessions, and learning streaks, helping you stay motivated and understand your learning journey."
        imageComponent={<StatsTrackingImage />}
        layoutStyle="side-by-side"
        textOrder="text-first"
        bgColor="bg-slate-100"
      />
    </ThemeProvider>
  );
}

export default FeaturesPresentation;
