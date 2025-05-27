import React from "react";
import {
  // Button, // Commented out as it might not be needed if all CTAs are removed from this component
  Card, // Card might still be used if we keep the structure for the image
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

// MetricCard might become unused if all metrics are removed.
// For now, keeping it in case you want to add different metrics later.
function MetricCard({ value, metricName }: { value: string, metricName: string }) {
  return (
    <Card color="transparent" shadow={false} className="text-center md:text-left">
      <Typography variant="h1" className="mb-2 text-4xl lg:text-5xl text-dark">
        {value}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {metricName}
      </Typography>
    </Card>
  );
}

// Removed volcoMetrics array
// const volcoMetrics = [
//   {
//     value: "1200+", 
//     metricName: "Words Mastered",
//   },
//   {
//     value: "75h", 
//     metricName: "Total Study Time",
//   },
//   {
//     value: "150", 
//     metricName: "Study Sessions",
//   },
//   {
//     value: "21 Days", 
//     metricName: "Learning Streaks",
//   },
// ];

export function TrackYourTriumph() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-center lg:text-left lg:w-1/2"> {/* Adjusted width to allow image to be on the side */}
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight font-bold"
            >
              See Your Vocabulary Grow with Clear Statistics.
            </Typography>
            <Typography color="blue-gray" className="mb-10">
              Detail the insights Volco provides: total study time, words mastered, study sessions, and learning streaks. Emphasize how these metrics help users stay motivated and understand their learning journey.
            </Typography>
          </div>
          {/* The section that previously held metric cards is now merged with the image section for a two-column layout */}
          <div className="lg:flex relative items-center">
            {/* This div used to contain the metrics. It's now empty or could be removed if the image takes full column width */}
            <div className="lg:w-1/2">
              {/* Removed the mapping of volcoMetrics */}
              {/* 
                <div className="grid gap-y-10 gap-x-8 grid-cols-2 mb-8">
                  {volcoMetrics.map((props, key) => (
                    <MetricCard key={key} {...props} />
                  ))}
                </div>
              */}
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                 <img src="placeholder-stats-page.png" alt="Volco Stats Page" className="max-w-md w-full rounded-3xl shadow-lg ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default TrackYourTriumph;
