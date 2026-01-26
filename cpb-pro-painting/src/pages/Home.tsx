import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Users,
  Award,
  Clock,
  MapPin,
  Paintbrush,
  Droplet,
  Sparkles,
  ThumbsUp,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import workSample2 from "../assets/images/wallpaper_6.png";
import exteriorPainting from "../assets/images/exterior2.png";
import workSample5 from "../assets/images/wallpaper_3.png";
import Wallpaper10 from "../assets/images/wallpaper10.png";
import slide1 from "../assets/images/slide_1.jpg";
import slide2 from "../assets/images/slide_2.jpg";
import slide3 from "../assets/images/slide_3.jpg";
import slide4 from "../assets/images/slide_4.jpg";
import slide5 from "../assets/images/slide_5.jpg";
import slide6 from "../assets/images/slide_6.jpg";
import high1 from "../assets/images/high_1.jpg";
import high2 from "../assets/images/high_2.jpg";
import high3 from "../assets/images/high_3.jpg";
import high4 from "../assets/images/high_4.jpg";
import high5 from "../assets/images/high_5.jpg";
import high6 from "../assets/images/high_6.jpg";
import high7 from "../assets/images/high_7.jpg";
import high8 from "../assets/images/high_8.jpg";
import benjaminMooreLogo from "../assets/images/benjamin-moore.png";
import sherwinWilliamsLogo from "../assets/images/sherwin-williams.png";
import homeDepotLogo from "../assets/images/home-depot.png";
import cloverdalePaintLogo from "../assets/images/cloverdale.png";
import duluxLogo from "../assets/images/dulux.png";
import { HeroSlider } from "../components/HeroSlider";

export function Home() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  useEffect(() => {
    if (isProjectsOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [isProjectsOpen]);

  const projectGallery = [
    { title: "Luxury Wallpaper Installation", image: slide6 },
    { title: "Professional Finish", image: slide5 },
    { title: "Residential Project", image: slide1 },
    { title: "Modern Interior", image: slide2 },
    { title: "Elegant Design", image: slide3 },
    { title: "Luxury Finish", image: slide4 },
    { title: "Wallpaper Installation 1", image: high1 },
    { title: "Wallpaper Installation 2", image: high2 },
    { title: "Wallpaper Installation 3", image: high3 },
    { title: "Wallpaper Installation 4", image: high4 },
    { title: "Wallpaper Installation 5", image: high5 },
    { title: "Wallpaper Installation 6", image: high6 },
    { title: "Wallpaper Installation 7", image: high7 },
    { title: "Wallpaper Installation 8", image: high8 },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "5.0", label: "Average Rating" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  const services = [
    {
      title: "Wallpaper Installation",
      description:
        "Premium wallpaper collections with expert installation. Transform your space with stunning designs.",
      image:Wallpaper10,
      featured: true,
    },
    {
      title: "Interior Painting",
      description:
        "Transform your indoor spaces with expert interior painting services.",
      image:workSample5,
    },
    {
      title: "Exterior Painting",
      description:
        "Enhance your curb appeal with professional exterior painting solutions.",
      image:
       exteriorPainting,
    },
    {
      title: "Commercial Painting",
      description:
        "Professional painting services for businesses and commercial properties.",
      image:
        "https://images.unsplash.com/photo-1633505650701-6104c4fc72c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYWludGVkJTIwaG9tZXxlbnwxfHx8fDE3Njg0MjE2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];
  const featuredService = services.find((service) => service.featured);
  const regularServices = services.filter((service) => !service.featured);

  const testimonials = [
    {
      name: "Emma B.",
      location: "Vancouver, Canada",
      text: "My powder room has vaulted ceilings and a horizontal beam which required some quite advanced cuts in the wallpaper so I didn't want to do it myself. Charles did a great job with this complex little room! I would highly recommend his services - he is skilled, polite and efficient and he does a great job of cleaning up after he is finished. He even reinstalled our light fixture and offered to hang the mirror after he had cleaned up! Full service with this guy and a lovely personality to boot!",
      rating: 5,
    },
    {
      name: "Lesley S.",
      location: "Kelowna, Canada",
      text: "What an amazing experience! Charlie responded promptly to my enquiry. He arrived as arranged, was professional, personable and knowledgeable. He was able to come the next day! The job, as promised, was perfect! Not only would I highly recommend Charlie, but I plan to use him again for another project. Besides painting, he does dry wall and carpentry.",
      rating: 5,
    },
    {
      name: "Lee-Anne M.",
      location: "Vancouver, Canada",
      text: "Charlie was great to work with. Fast communication helped us resolve a small drywalling project quickly and efficiently. He was prompt with reviewing the job requirements, gave a reasonable cost and estimation of time required. Actual called to move date ahead which was appreciated. Great work and cleaned up the site. Would hire him again for any such work.",
      rating: 5,
    },
  ];

  const kidsWallpapers = [
    {
      title: "Safari Art Dream",
      image:
        "https://images.unsplash.com/photo-1761517099167-98255de4fabf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYW5pbWFsJTIwd2FsbHBhcGVyJTIwcGF0dGVybnxlbnwxfHx8fDE3NjkwOTQ4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Safari Landscape",
      image:
        "https://images.unsplash.com/photo-1560130958-0ea787c275de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG51cnNlcnklMjB3YWxscGFwZXJ8ZW58MXx8fHwxNzY5MDk0ODU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Goal!",
      image:
        "https://images.unsplash.com/photo-1715092147906-665a18cfae5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjBqdW5nbGUlMjBwYXR0ZXJufGVufDF8fHx8MTc2OTA5NDg1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Teddy on Clouds",
      image:
        "https://images.unsplash.com/photo-1560499164-a1ac81dc803b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWRkeSUyMGJlYXIlMjBwYXR0ZXJufGVufDF8fHx8MTc2OTA5NDg1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const frenchWallpapers = [
    {
      title: "Rainbow for Kids!",
      image:
        "https://images.unsplash.com/photo-1687575634846-aa07f7b18df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGtpZHMlMjBwYXR0ZXJufGVufDF8fHx8MTc2OTAyNjQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Tido",
      image:
        "https://images.unsplash.com/photo-1723283126735-f24688fcfcc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwcGF0dGVybnxlbnwxfHx8fDE3NjkwNDUzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Safari Original",
      image:
        "https://images.unsplash.com/photo-1682589183837-4e21dd5fc6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yYWwlMjBwYXR0ZXJuJTIwd2FsbHBhcGVyfGVufDF8fHx8MTc2OTA5NDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Jura",
      image:
        "https://images.unsplash.com/photo-1616643786457-d15eb569c1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBwYXR0ZXJuJTIwZGVzaWdufGVufDF8fHx8MTc2OTAyNDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const tropicalWallpapers = [
    {
      title: "Tropiques 2",
      image:
        "https://images.unsplash.com/photo-1555456135-7abb74958f7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGxlYWYlMjBwYXR0ZXJufGVufDF8fHx8MTc2OTA5NDg1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Tropiques",
      image:
        "https://images.unsplash.com/photo-1653941796655-98844505f783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwbGVhZiUyMHdhbGxwYXBlcnxlbnwxfHx8fDE3NjkwOTQ4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Tropical Time",
      image:
        "https://images.unsplash.com/photo-1485838744144-fad9fe873ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBwYXR0ZXJuJTIwd2FsbHBhcGVyfGVufDF8fHx8MTc2OTA5NDg1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Tropical Scenery",
      image:
        "https://images.unsplash.com/photo-1693530375155-98ace54f5b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5nbGUlMjBsZWF2ZXMlMjBwYXR0ZXJufGVufDF8fHx8MTc2OTA5NDg2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const luxuryWallpapers = [
    {
      title: "Marble Elegance",
      image:
        "https://images.unsplash.com/photo-1669102046402-7c5e93766565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjB0ZXh0dXJlJTIwcGF0dGVybnxlbnwxfHx8fDE3Njg5OTgzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Golden Geometry",
      image:
        "https://images.unsplash.com/photo-1691896203332-917e67ffc41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwZ2VvbWV0cmljJTIwd2FsbHBhcGVyfGVufDF8fHx8MTc2OTA5NDg2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Art Deco Supreme",
      image:
        "https://images.unsplash.com/photo-1579710118605-991e5fd8baf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBkZWNvJTIwcGF0dGVybnxlbnwxfHx8fDE3NjkwNDc1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Velvet Dreams",
      image:
        "https://images.unsplash.com/photo-1707569590647-6338f55e40ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YWxscGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2OTA5NDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Slider with Overlapping Yellow Container */}
      <div className="relative">
        <HeroSlider />

        {/* Overlapping Yellow Container */}
        <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-[#C6AC8E] px-6 md:px-12 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-4 shadow-2xl"
            >
              <h3 className="text-lg md:text-2xl text-white font-semibold uppercase tracking-wide">
                WE UNDERSTAND YOUR NEEDS ON RESTORATION
              </h3>
              <Link
                to="/contact"
                className="px-8 py-3 bg-[#0A0908] text-white font-semibold uppercase tracking-wider hover:bg-[#0A0908] transition-all whitespace-nowrap shadow-lg"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section - Dark Background */}
      <section className="relative bg-[#22333B] pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-20 h-20 mb-6"
                >
                  <stat.icon className="w-full h-full text-[#C6AC8E]" strokeWidth={1.5} />
                </motion.div>

                <div className="mb-3">
                  <div className="text-5xl lg:text-6xl text-[#EAE0D5] tracking-tight">
                    {stat.value}
                  </div>
                </div>

                <p className="text-[#EAE0D5] uppercase tracking-widest text-xs lg:text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WALLPAPER INSTALLATION SHOWCASE - PREMIER SECTION */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            

            <p className="text-sm uppercase tracking-[0.3em] text-[#C6AC8E] mb-4 font-semibold">
              Premium Wallpaper Installation Services in Dubai & Across the UAE
            </p>
            <h2 className="text-5xl sm:text-7xl text-[#0A0908] font-bold mb-6 uppercase tracking-wider">
              Luxury Wallpaper Fixing & Installation in{" "}
              <span className="text-[#C6AC8E]">Dubai</span>
            </h2>
            <div className="w-32 h-1 bg-[#C6AC8E] mx-auto mb-8" />
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
              Enhance your interiors with flawless, high-end wallpaper fixing. We
              provide professional wallpaper installation in Dubai, delivering
              precision craftsmanship, elegant finishes, and luxury results for
              residential and commercial spaces.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center px-10 py-5 bg-[#C6AC8E] text-[#0A0908] text-lg font-bold uppercase tracking-wider rounded-lg hover:bg-[#0A0908] hover:text-white transition-all shadow-2xl hover:shadow-[#C6AC8E]/50 hover:scale-105"
            >
              Explore All Collections
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </motion.div>

          {/* Kids Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl sm:text-5xl text-[#0A0908] mb-3">
                Our exclusive kids designs
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {kidsWallpapers.map((design, index) => (
                <motion.div
                  key={design.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden mb-4 bg-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-300">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-base text-[#0A0908] mb-1">
                    {design.title}
                  </h4>
                  <p className="text-sm text-gray-600">125.00Dhs/sqm</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/services"
                className="inline-block px-8 py-3 bg-[#0A0908] text-white rounded-full hover:bg-[#C6AC8E] hover:text-[#0A0908] transition-all font-semibold"
              >
                View More
              </Link>
            </div>
          </motion.div>

          {/* French Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-2xl"
          >
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-[#0A0908] text-white rounded-full mb-4 text-xs font-bold uppercase tracking-wider">
                EXCLUSIVE PARTNERSHIP WITH A FRENCH STUDIO
              </div>
              <h3 className="text-4xl sm:text-5xl text-[#0A0908] mb-3">
                La Touche Originale
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {frenchWallpapers.map((design, index) => (
                <motion.div
                  key={design.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden mb-4 bg-white shadow-md hover:shadow-2xl transition-shadow duration-300">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-base text-[#0A0908] mb-1">
                    {design.title}
                  </h4>
                  <p className="text-sm text-gray-600">125.00Dhs/sqm</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/services"
                className="inline-block px-8 py-3 bg-[#0A0908] text-white rounded-full hover:bg-[#C6AC8E] hover:text-[#0A0908] transition-all font-semibold"
              >
                View More
              </Link>
            </div>
          </motion.div>

          {/* Tropical Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-[#C6AC8E] text-[#0A0908] rounded-full mb-4 text-xs font-bold uppercase tracking-wider">
                TRENDING NOW
              </div>
              <h3 className="text-4xl sm:text-5xl text-[#0A0908] mb-3">
                Tropical wallpapers
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {tropicalWallpapers.map((design, index) => (
                <motion.div
                  key={design.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden mb-4 bg-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-300">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-base text-[#0A0908] mb-1">
                    {design.title}
                  </h4>
                  <p className="text-sm text-gray-600">125.00Dhs/sqm</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/services"
                className="inline-block px-8 py-3 bg-[#0A0908] text-white rounded-full hover:bg-[#C6AC8E] hover:text-[#0A0908] transition-all font-semibold"
              >
                View More
              </Link>
            </div>
          </motion.div>

          {/* Luxury Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl sm:text-5xl text-[#0A0908] mb-3">
                Luxury Modern Collection
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {luxuryWallpapers.map((design, index) => (
                <motion.div
                  key={design.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden mb-4 bg-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-300">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-base text-[#0A0908] mb-1">
                    {design.title}
                  </h4>
                  <p className="text-sm text-gray-600">125.00Dhs/sqm</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/services"
                className="inline-block px-8 py-3 bg-[#0A0908] text-white rounded-full hover:bg-[#C6AC8E] hover:text-[#0A0908] transition-all font-semibold"
              >
                View More
              </Link>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-12 bg-linear-to-r from-[#EAE0D5] to-[#C6AC8E] rounded-2xl"
          >
            <h3 className="text-3xl sm:text-4xl text-[#0A0908] mb-4 uppercase font-bold">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg text-[#0A0908]/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation and explore our complete wallpaper
              collection
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-4 bg-[#22333B] text-[#EAE0D5] text-lg font-bold uppercase tracking-wider rounded-lg hover:bg-[#0A0908] transition-all shadow-2xl hover:scale-105"
            >
              Book a Free Visit
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Residential Wallpaper Installation Dubai */}
      <section className="py-24 bg-[#22333B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl text-white mb-6">
                Residential{" "}
                <span className="text-[#C6AC8E]">Wallpaper Fixing</span>
              </h2>
              <div className="w-24 h-1 bg-[#C6AC8E] mb-8" />
              <p className="text-xl text-gray-300 leading-relaxed">
                Upgrade your home with stylish and professionally installed
                wallpaper. We handle bedrooms, living rooms, dining areas, and
                more—with minimal disruption and perfect results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={slide5}
                alt="Residential Wallpaper Installation"
                className="w-full h-100 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C6AC8E] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commercial & Hospitality Wallpaper Fixing UAE */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <img
                src={workSample2}
                alt="Commercial Wallpaper Installation"
                className="w-full h-[400px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C6AC8E] -z-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl sm:text-5xl text-[#0A0908] mb-6">
                Commercial{" "}
                <span className="text-[#C6AC8E]">Wallpaper Fixing</span>
              </h2>
              <div className="w-24 h-1 bg-[#C6AC8E] mb-8" />
              <p className="text-xl text-gray-600 leading-relaxed">
                We provide reliable wallpaper installation for offices, shops,
                hotels, restaurants, and other commercial spaces. Professional
                service tailored to your business needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expert Wallpaper Fixing & Installation Services */}
      <section className="py-24 bg-linear-to-br from-[#EAE0D5] to-[#C6AC8E] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%230A0908%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl text-[#0A0908] mb-6">
              Expert Wallpaper Fixing &{" "}
              <span className="text-[#22333B]">Installation Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#0A0908] mx-auto mb-8" />
            <p className="text-xl text-[#0A0908]/80 leading-relaxed mb-8">
              Transform your space with flawless wallpaper installation done by
              skilled professionals. Clean work, perfect finishes, and on-time
              service—every time.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-[#0A0908]">
                <Sparkles className="w-6 h-6" />
                <span className="font-semibold">Clean Work</span>
              </div>
              <div className="flex items-center gap-2 text-[#0A0908]">
                <Award className="w-6 h-6" />
                <span className="font-semibold">Perfect Finishes</span>
              </div>
              <div className="flex items-center gap-2 text-[#0A0908]">
                <ThumbsUp className="w-6 h-6" />
                <span className="font-semibold">On-Time Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[high1, high2, high3, high4, high5, high6, high7, high8].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="overflow-hidden shadow-lg"
              >
                <img
                  src={image}
                  alt={`Wallpaper Installation ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us CTA */}
      <section className="py-20 bg-[#0A0908] relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#C6AC8E]/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-6">
              Looking for Professional Wallpaper Fixing in{" "}
              <span className="text-[#C6AC8E]">Dubai?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contact us today for a free consultation and quotation anywhere in
              the UAE.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-[#C6AC8E] text-[#0A0908] text-lg font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-all shadow-2xl hover:shadow-[#C6AC8E]/50 hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C6AC8E]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl text-[#0A0908] mb-6">
              Why Choose <span className="text-[#C6AC8E]">Us</span>
            </h2>
            <div className="w-24 h-1 bg-[#C6AC8E] mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional wallpaper installation services with a
              commitment to quality, professionalism, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Skilled Craftsmen",
                description:
                  "Experienced professionals with extensive luxury project expertise for flawless installations.",
              },
              {
                icon: Sparkles,
                title: "Precision Alignment",
                description:
                  "Meticulous attention to detail ensuring seamless finishing on every wallpaper installation.",
              },
              {
                icon: ThumbsUp,
                title: "Professional Execution",
                description:
                  "Clean, discreet, and professional service that respects your space and schedule.",
              },
              {
                icon: Droplet,
                title: "Premium Materials",
                description:
                  "We use only high-quality materials and professional tools for lasting results.",
              },
              {
                icon: Paintbrush,
                title: "Tailored Solutions",
                description:
                  "Customized wallpaper solutions designed specifically for exclusive interiors.",
              },
              {
                icon: Award,
                title: "Commitment to Excellence",
                description:
                  "Your complete satisfaction is our priority—we deliver excellence on every project.",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group p-8 rounded-2xl bg-white border-2 border-transparent hover:border-[#C6AC8E] hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent
                      className="w-16 h-16 text-[#0A0908] mb-6"
                      strokeWidth={2}
                    />
                  </motion.div>
                  <h3 className="text-2xl text-[#0A0908] mb-4 group-hover:text-[#0A0908] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview - Enhanced */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl text-[#0A0908] mb-6">
              Our <span className="text-[#0A0908]">Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#C6AC8E] mx-auto mb-6" />
            <p className="text-xl text-gray-600">
              Comprehensive painting solutions for every need
            </p>
          </motion.div>
          {featuredService && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 bg-white shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[260px] lg:min-h-[360px]">
                  <img
                    src={featuredService.image}
                    alt={featuredService.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="p-10 lg:p-12 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#0A0908] mb-3">
                    Premier Service
                  </p>
                  <h3 className="text-3xl lg:text-4xl text-[#0A0908] mb-4">
                    {featuredService.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    {featuredService.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[#0A0908] font-semibold hover:text-[#0A0908] transition-colors"
                  >
                    Explore Details
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {regularServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-72 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl text-[#0A0908] mb-3 group-hover:text-[#0A0908] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[#0A0908] hover:gap-3 transition-all group/link"
                  >
                    Learn More
                    <ArrowRight
                      className="ml-2 group-hover/link:translate-x-2 transition-transform"
                      size={20}
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Enhanced */}
      <section className="py-32 bg-[#EAE0D5] relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#EAE0D5]/60 via-[#EAE0D5] to-[#EAE0D5]/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl text-[#0A0908] mb-6">
              Our <span className="text-[#0A0908]">Recent Work</span>
            </h2>
            <div className="w-24 h-1 bg-[#C6AC8E] mx-auto mb-6" />
            <p className="text-xl text-[#0A0908]">
              See the quality and precision we bring to every project
            </p>
          </motion.div>

          {/* Main Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              {
                image: slide6,
                title: "Luxury Wallpaper Installation",
                description: "Premium wallpaper fixing for elegant interiors",
              },
              {
                image: slide5,
                title: "Professional Finish",
                description: "Expert craftsmanship with attention to every detail",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group overflow-hidden shadow-2xl"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-linear-to-t from-[#0A0908] via-[#0A0908]/80 to-transparent flex items-end p-8"
                >
                  <div className="text-white">
                    <h3 className="text-3xl mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Project Gallery */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                image: slide1,
                title: "Residential Project",
                category: "Residential",
              },
              {
                image: slide2,
                title: "Modern Interior",
                category: "Commercial",
              },
              {
                image: slide3,
                title: "Elegant Design",
                category: "Premium",
              },
              {
                image: slide4,
                title: "Luxury Finish",
                category: "Custom",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                className="relative group overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div className="absolute inset-0 bg-linear-to-t from-[#C6AC8E]/90 via-[#C6AC8E]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#0A0908] text-sm font-medium mb-2 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-white text-xl">{item.title}</h4>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-16"
          >
            <button
              type="button"
              onClick={() => setIsProjectsOpen(true)}
              className="inline-flex items-center px-8 py-4 bg-[#C6AC8E] text-[#0A0908] rounded-lg hover:bg-[#0A0908] hover:text-white transition-all hover:shadow-lg hover:shadow-[#C6AC8E]/50 group"
            >
              View All Projects
              <ArrowRight
                className="ml-2 group-hover:translate-x-2 transition-transform"
                size={20}
              />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Ultra Elegant Redesign with Light Background */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C6AC8E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0A0908]/5 rounded-full blur-3xl" />

        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#C6AC8E]/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#C6AC8E]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-[#0A0908] fill-[#C6AC8E]"
                  />
                ))}
              </div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl text-[#0A0908] mb-4">
              What Our <span className="text-[#0A0908] italic">Clients</span>{" "}
              Say
            </h2>

            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C6AC8E]" />
              <div className="w-2 h-2 bg-[#C6AC8E] rotate-45" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C6AC8E]" />
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience with CPB Pro
              Painting
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full"
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#C6AC8E] to-[#0A0908] rounded-xl opacity-0 group-hover:opacity-75 blur transition-all duration-500" />

                  {/* Main Card - Dark Background */}
                  <div className="relative bg-gradient-to-br from-[#0A0908] to-[#0A0908] p-8 rounded-xl border border-[#C6AC8E]/20 group-hover:border-[#C6AC8E] shadow-lg group-hover:shadow-2xl group-hover:shadow-[#C6AC8E]/20 transition-all duration-500 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <svg
                        className="w-12 h-12 text-[#0A0908]/20 group-hover:text-[#0A0908]/40 transition-colors duration-500"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.2 + i * 0.1,
                            duration: 0.5,
                          }}
                        >
                          <Star className="w-4 h-4 text-[#0A0908] fill-[#C6AC8E]" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-6">
                      {testimonial.text}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#C6AC8E]/30 to-transparent mb-4" />

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      {/* Avatar Circle */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C6AC8E] to-[#0A0908] flex items-center justify-center text-white text-lg font-bold shadow-md group-hover:shadow-lg group-hover:shadow-[#C6AC8E]/50 transition-all duration-300">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>

                      {/* Name and Location */}
                      <div>
                        <p className="text-white font-semibold text-base mb-0.5">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-400 text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-600 text-base mb-5">
              Join our growing list of satisfied customers
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#C6AC8E] to-[#0A0908] text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              Start Your Project Today
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Partners - Horizontal Scrolling Section */}
      <section className="py-16 bg-white overflow-hidden border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl text-[#0A0908] mb-2">
              Our <span className="text-[#0A0908]">Partners</span>
            </h2>
            <p className="text-gray-600">Trusted brands we work with</p>
          </motion.div>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="relative">
          <div className="flex animate-scroll">
            {[...Array(4)].map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex gap-20 px-10 items-center shrink-0"
              >
                <img
                  src={benjaminMooreLogo}
                  alt="Benjamin Moore"
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                />
                <img
                  src={sherwinWilliamsLogo}
                  alt="Sherwin Williams"
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                />
                <img
                  src={homeDepotLogo}
                  alt="Home Depot"
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                />
                <img
                  src={cloverdalePaintLogo}
                  alt="Cloverdale Paint"
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                />
                <img
                  src={duluxLogo}
                  alt="Dulux"
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery Modal */}
      <AnimatePresence>
        {isProjectsOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/35 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
            onClick={() => setIsProjectsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <motion.div
              className="w-full max-w-6xl h-[80vh] bg-white shadow-2xl overflow-hidden mt-10 mb-10"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <div>
                  <h3 className="text-2xl text-[#0A0908]">Client Projects</h3>
                  <p className="text-gray-600 text-sm">
                    A full gallery of our recent work
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsProjectsOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-[#0A0908] hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>

              <div className="p-6 h-full overflow-y-auto">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {projectGallery.map((project, index) => (
                    <div
                      key={`${project.title}-${index}`}
                      className="group overflow-hidden shadow-lg"
                    >
                      <div className="aspect-4/3 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
