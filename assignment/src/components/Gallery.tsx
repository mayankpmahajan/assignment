import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const images = [
  { src: "https://images.unsplash.com/photo-1682686579976-879b74d6d7ea", alt: "Desert landscape", size: "medium" },
  { src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba", alt: "Tropical beach", size: "small" },
  { src: "https://images.unsplash.com/photo-1682687220795-796d3f6f7000", alt: "Snow-capped mountain", size: "tall" },
  { src: "https://images.unsplash.com/photo-1682687220509-61b8a906ca19", alt: "Forest waterfall", size: "wide" },
  { src: "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3", alt: "Autumn forest", size: "medium" },
  { src: "https://images.unsplash.com/photo-1682685797208-c741d58c2eff", alt: "Wheat field", size: "wide" },
  { src: "https://images.unsplash.com/photo-1682685797661-9e0c87f59c60", alt: "Lavender field", size: "small" },
  { src: "https://images.unsplash.com/photo-1682686581312-506a8b53190e", alt: "Northern lights", size: "tall" },
  { src: "https://images.unsplash.com/photo-1682686580950-960d1d513532", alt: "Desert road", size: "medium" },

];

const BentoGridGallery = () => {
  const [visibleImages, setVisibleImages] = useState(9);
  const [layoutImages, setLayoutImages] = useState([]);

  useEffect(() => {
    const layoutGrid = () => {
      let grid = [];
      let row = [];
      let rowSize = 0;
      
      for (let i = 0; i < visibleImages; i++) {
        const image = images[i];
        const imageSize = image.size === 'large' || image.size === 'wide' ? 2 : 1;
        
        if (rowSize + imageSize > 3) {
          grid.push(row);
          row = [image];
          rowSize = imageSize;
        } else {
          row.push(image);
          rowSize += imageSize;
        }
        
        if (i === visibleImages - 1) {
          while (rowSize < 3) {
            const filler = images[Math.floor(Math.random() * images.length)];
            row.push({...filler, size: 'small'});
            rowSize += 1;
          }
          grid.push(row);
        }
      }
      
      setLayoutImages(grid.flat());
    };

    layoutGrid();
  }, [visibleImages]);

  const loadMoreImages = () => {
    setVisibleImages(prevCount => Math.min(prevCount + 6, images.length));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {layoutImages.map((image, index) => (
          <div 
            key={index} 
            className={`
              ${image.size === 'large' ? 'col-span-2 row-span-2' : ''}
              ${image.size === 'medium' ? 'col-span-2' : ''}
              ${image.size === 'tall' ? 'row-span-2' : ''}
              ${image.size === 'wide' ? 'col-span-2' : ''}
              overflow-hidden rounded-lg shadow-lg
            `}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreImages}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-flex items-center transition-colors duration-300"
          >
            <span>View More</span>
            <ChevronDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BentoGridGallery;