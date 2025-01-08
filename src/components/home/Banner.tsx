import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import college from '../../Images/College.jpeg';
import college3 from '../../Images/college3.jpg';
import students from '../../Images/students.jpeg';

const bannerData = [
  {
    id: 1,
    title: "Arjun College of Technical Education",
    description: "Empowering Minds, Shaping Futures.",
    image: college,
  },
  {
    id: 2,
    title: "State-of-the-Art Research Facilities",
    description: "Equipped with the latest technology and innovation centers",
    image: students,
  },
  {
    id: 3,
    title: "100% Placement Record",
    description: "Partnering with leading global organizations",
    image: college3,
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  };

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {bannerData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-4xl px-4 -mt-50">
            <h2
  className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
  style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)' }}
>
  {slide.title}
</h2>

              <p className="text-lg md:text-xl lg:text-2xl text-white">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;