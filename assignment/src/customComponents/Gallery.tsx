import React, { useState } from 'react';

// Define the type for images
interface Image {
  id: number;
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: Image[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [showMore, setShowMore] = useState(false);

  // Show only the first 4 images (2 rows) initially
  const initialCount = 4;
  const displayedImages = showMore ? images : images.slice(0, initialCount);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {displayedImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={` object-cover rounded-lg ${image.id & 1 ? 'h-[40vw]' : 'h-[70vw]' } `}
          />
        ))}
      </div>
      {images.length > initialCount && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
