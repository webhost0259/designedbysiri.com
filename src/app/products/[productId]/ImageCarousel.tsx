import Image from "next/image";
import { useState } from "react";

interface ImageCarouselProps {
    imagePaths: string[];
}

const ImageCarousel = ({ imagePaths } : ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel w-full h-full relative">
      <div className="carousel-inner w-full h-full flex overflow-hidden">
        {imagePaths.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } w-full h-full flex-shrink-0`}
          >
            <Image 
                src={image} 
                alt={`Sireesha Reddy Designer Studio Logo, eligance with beauty ${index + 1}`}
                fill={true}
                className="object-cover transition-transform duration-700 transform hover:scale-105 p-4"
                unoptimized
            />
          </div>
        ))}
      </div>
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 text-4xl font-thin text-green-800 transform -translate-y-1/2 btn btn-circle btn-outline"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 text-4xl font-thin text-green-800 transform -translate-y-1/2 btn btn-circle btn-outline"
      >
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;