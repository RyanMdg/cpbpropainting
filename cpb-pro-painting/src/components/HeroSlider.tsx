import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import workSample1 from "../assets/images/612259937_2073330886767474_5233871115005836255_n.jpg";
import workSample2 from "../assets/images/sample2.png";
import workSample3 from "../assets/images/sample3.png";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: workSample1,
      subtitle: "PROFESSIONAL EXCELLENCE",
      title: "WE TRANSFORM SPACES WITH COLOR",
      description:
        "Quality craftsmanship and attention to detail in every brushstroke",
    },
    {
      image: workSample2,
      subtitle: "LUXURY FINISHES",
      title: "WE BELIEVE IN PERFECTION",
      description: "Premium painting services that exceed your expectations",
    },
    {
      image: workSample3,
      subtitle: "MODERN SOLUTIONS",
      title: "WE CREATE BEAUTIFUL HOMES",
      description:
        "Expert painters delivering stunning results for residential and commercial properties",
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
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
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
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* SECOND LINE - FROM RIGHT */}
                <motion.h1
                  key={`title-${currentSlide}`}
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-7xl text-white mb-6 tracking-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* THIRD LINE - FROM LEFT */}
                <motion.p
                  key={`description-${currentSlide}`}
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                  className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
                >
                  {slides[currentSlide].description}
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
                    className="px-8 py-4 bg-[#C6AC8E] text-[#0A0908] uppercase tracking-wider hover:bg-[#0A0908] transition-all shadow-lg hover:shadow-[#C6AC8E]/50"
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
