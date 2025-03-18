import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

interface SliderProps {
  slides?: SlideData[];
}

interface SlideData {
  title: string;
  description: string;
  image: string;
  benefits?: string[];
}

const defaultSlides: SlideData[] = [
  {
    title: 'SMOOTHIES',
    description: 'Smoothies are so healthy, refreshing and the perfect way to pack some extra fruit and veggies into your diet',
    image: '/smoothie-bowl.png',
    benefits: ['Antioxidants', 'Vitamins', 'Minerals', 'Nutrients']
  },
  {
    title: 'FRESH FRUITS',
    description: 'Delicious seasonal fruits packed with essential vitamins and natural sweetness for your daily diet',
    image: '/fruits.png',
    benefits: ['Fiber', 'Vitamins', 'Low Calories', 'Natural Sugar']
  }
];

const HomeSlider: React.FC<SliderProps> = ({ slides = defaultSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAnimating, slides.length]);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-orange-300 to-orange-200">
      <div className="max-w-6xl mx-auto relative">
        <div 
          className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-90' : 'opacity-100'}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full flex">
              <div className="w-1/2 p-12 flex flex-col justify-center">
                <h1 className="text-7xl font-bold text-white mb-4 relative">
                  {slide.title.split('').map((letter, i) => (
                    <span 
                      key={i} 
                      className={`inline-block transition-all duration-300 ${
                        isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                      }`}
                      style={{ 
                        transitionDelay: `${i * 50}ms`,
                        color: i > 1 && i < 4 ? '#FF6B6B' : 'white'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                  {slide.title === 'SMOOTHIES' && (
                    <span className="absolute -top-4 right-36">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CAF50" strokeWidth="2" />
                        <path d="M8 12L12 16L16 12" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 8V16" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </h1>
                <p className="text-white mb-8 max-w-md">{slide.description}</p>
                <div className="flex space-x-4 mb-12">
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full transition-colors">
                    Order Now
                  </button>
                  <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-orange-500 transition-colors">
                    Shop Now
                  </button>
                </div>
                <div className="flex flex-col">
                  <div className="text-rose-600 font-semibold mb-2">Benefits</div>
                  <div className="flex flex-col gap-1">
                    {slide.benefits?.map((benefit, i) => (
                      <div 
                        key={i} 
                        className={`text-rose-500 transition-all duration-300 ${
                          isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
                        }`}
                        style={{ transitionDelay: `${(i + 5) * 50}ms` }}
                      >
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center p-8">
                <div className={`transition-all duration-500 ${isAnimating ? 'scale-95 opacity-90' : 'scale-100 opacity-100'}`}>
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="object-contain max-w-full max-h-96 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="absolute right-12 bottom-12 bg-rose-500 hover:bg-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
        >
          <FiChevronRight size={24} />
        </button>
        
        <div className="absolute bottom-8 right-36 flex space-x-4">
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <FiFacebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <FiTwitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <FiInstagram size={20} />
          </a>
        </div>
        
        {/* Pagination dots */}
        <div className="absolute bottom-8 left-12 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-6 bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute right-0 bottom-0 h-full w-6 flex flex-col items-center justify-center">
        <div className="writing-mode-vertical-rl transform rotate-180 text-xs text-gray-600">
          Scroll Page
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;