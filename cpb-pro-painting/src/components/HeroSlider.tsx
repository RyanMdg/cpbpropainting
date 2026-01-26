import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import slide1 from "../assets/images/slide_1.jpg";
import slide2 from "../assets/images/slide_2.jpg";
import slide3 from "../assets/images/slide_3.jpg";
import slide4 from "../assets/images/slide_4.jpg";
import slide5 from "../assets/images/slide_5.jpg";
import slide6 from "../assets/images/slide_6.jpg";

interface SlideData {
  type: "single" | "split";
  image?: string;
  leftImage?: string;
  rightImage?: string;
  subtitle: string;
  title: string;
  description: string;
}

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    {
      type: "single",
      image: slide6,
      subtitle: "PREMIUM WALLPAPER INSTALLATION",
      title: "LUXURY WALLPAPER FIXING IN DUBAI",
      description:
        "Transform your space with flawless wallpaper installation done by skilled professionals",
    },
    {
      type: "split",
      leftImage: slide1,
      rightImage: slide2,
      subtitle: "RESIDENTIAL SERVICES",
      title: "ELEGANT HOME TRANSFORMATIONS",
      description:
        "Stylish wallpaper solutions for bedrooms, living rooms, and dining areas",
    },
    {
      type: "split",
      leftImage: slide3,
      rightImage: slide4,
      subtitle: "COMMERCIAL SERVICES",
      title: "PROFESSIONAL BUSINESS SPACES",
      description:
        "Reliable wallpaper installation for offices, hotels, and retail spaces",
    },
    {
      type: "single",
      image: slide5,
      subtitle: "EXPERT CRAFTSMANSHIP",
      title: "PRECISION IN EVERY DETAIL",
      description:
        "Clean work, perfect finishes, and on-time service—every time",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-150 lg:h-175 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image(s) */}
          <div className="absolute inset-0">
            {currentSlideData.type === "single" ? (
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${currentSlideData.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 40%",
                }}
              />
            ) : (
              <div className="flex h-full">
                <div className="w-1/2 h-full overflow-hidden">
                  <img
                    src={currentSlideData.leftImage}
                    alt={currentSlideData.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-1/2 h-full overflow-hidden">
                  <img
                    src={currentSlideData.rightImage}
                    alt={currentSlideData.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-center max-w-4xl mx-auto">
                {/* FIRST LINE - FROM TOP */}
                <motion.p
                  key={`subtitle-${currentSlide}`}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className="text-[#EAE0D5] text-sm md:text-base tracking-[0.3em] uppercase mb-6"
                >
                  {currentSlideData.subtitle}
                </motion.p>

                {/* SECOND LINE - FROM RIGHT */}
                <motion.h1
                  key={`title-${currentSlide}`}
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-7xl text-white mb-6 tracking-tight"
                >
                  {currentSlideData.title}
                </motion.h1>

                {/* THIRD LINE - FROM LEFT */}
                <motion.p
                  key={`description-${currentSlide}`}
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                  className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* BUTTONS - FROM BOTTOM */}
                <motion.div
                  key={`buttons-${currentSlide}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-[#C6AC8E] text-[#0A0908] uppercase tracking-wider hover:bg-white transition-all shadow-lg hover:shadow-[#C6AC8E]/50"
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    to="/about"
                    className="px-8 py-4 border-2 border-white text-white uppercase tracking-wider hover:bg-white hover:text-[#0A0908] transition-all"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-[#C6AC8E] text-white backdrop-blur-sm transition-all z-10 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-[#C6AC8E] text-white backdrop-blur-sm transition-all z-10 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-[#C6AC8E] w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
