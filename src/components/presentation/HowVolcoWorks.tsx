import React from 'react';
import { Typography, Card, CardBody } from '@material-tailwind/react';
import ThemeProvider from "../theme-provider";

const STATUS_ITEMS = [
  {
    title: "To Study Status",
    description: "These are new words or words that are due for review. Volco identifies them as ready for your attention, based on your learning progress and the optimal review schedule.",
    imgSrc: "https://placehold.co/100x100/E0E7FF/4338CA?text=To+Study+Icon",
    imgAlt: "To Study Icon"
  },
  {
    title: "Learning Status",
    description: "Words in this status are actively being learned. They require more frequent review to solidify your memory. Volco will bring them back at increasing intervals until mastered.",
    imgSrc: "https://placehold.co/100x100/E0E7FF/4338CA?text=Learning+Icon",
    imgAlt: "Learning Icon"
  },
  {
    title: "Known Status",
    description: "Congratulations! These are words you\'ve successfully mastered and have a strong, long-term memory of. Volco will review them much less frequently to ensure retention.",
    imgSrc: "https://placehold.co/100x100/E0E7FF/4338CA?text=Known+Icon",
    imgAlt: "Known Icon"
  }
];

export function HowItWorksPresentation() {
  return (
    <ThemeProvider>
      <section id="how-it-works" className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
            Powered by Science: Your Words, Intelligently Managed.
          </Typography>
          <Typography className="text-lg sm:text-xl text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto">
            Volco's intelligent Spaced Repetition System (SRS) automatically manages word status, moving them between "To Study," "Learning," and "Known" buckets. It schedules reviews at optimal times to ensure words stick in your long-term memory.
          </Typography>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
            {STATUS_ITEMS.map((item, index) => (
              <Card key={index} shadow={false} className="p-6 bg-white rounded-lg shadow-md">
                <CardBody className="text-center">
                  <Typography variant="h5" className="text-xl font-semibold text-slate-900 mb-3">
                    {item.title}
                  </Typography>
                  <Typography className="text-slate-700">
                    {item.description}
                  </Typography>
                  <img src={item.imgSrc} alt={item.imgAlt} className="mx-auto mt-4 rounded-full w-24 h-24"/>
                </CardBody>
              </Card>
            ))}
          </div>

          <img 
            src="https://placehold.co/375x667/DBEAFE/3730A3?text=Quiz+Result+Page+(image3.jpg)" 
            alt="Quiz Result Page showing 'Next review in'"
            className="rounded-xl shadow-2xl mx-auto border-4 border-slate-200 max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </section>
    </ThemeProvider>
  );
}

export default HowItWorksPresentation; 