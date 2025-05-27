import React from 'react';

interface ImageWidgetProps {
  src: string;
  alt: string;
  maxWidthClass?: string; // e.g., 'max-w-xs sm:max-w-sm md:max-w-md'
  maxHeightClass?: string; // e.g., 'max-h-[75vh]', 'max-h-screen'
  aspectRatioClass?: string; // e.g., 'aspect-video', 'aspect-square', or custom like 'aspect-[9/16]' for phone mockups
  objectFitClass?: string; // e.g., 'object-cover', 'object-contain'
  additionalClasses?: string; // For any other specific styling
}

export function ImageWidget({
  src,
  alt,
  maxWidthClass = 'max-w-full',
  maxHeightClass = 'max-h-[75vh]', // Default value for max height
  aspectRatioClass,
  objectFitClass = 'object-contain', // Changed default to object-contain as it's generally safer with max-h
  additionalClasses = '',
}: ImageWidgetProps) {
  const baseClasses = `rounded-xl mx-auto ${maxHeightClass}`; // Use the prop here
  const allClasses = `${baseClasses} ${maxWidthClass} ${aspectRatioClass || ''} ${objectFitClass} ${additionalClasses}`.trim();

  return (
    <img 
      src={src}
      alt={alt}
      className={allClasses}
    />
  );
}

export default ImageWidget; 