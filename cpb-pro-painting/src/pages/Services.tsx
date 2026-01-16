import {
  Paintbrush,
  Home,
  Building2,
  Sparkles,
  Palette,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import InteriorPaint from "../assets/images/interior.png";
import ExteriorPaint from "../assets/images/exterior.png";
import KitchenCabinet from "../assets/images/kitchenCabinet.png";
import Commerrcial from "../assets/images/comerrcial.png";
import SurfacePrep from "../assets/images/surfacePrep.png";
import ColorConsultation from "../assets/images/ColorAdvice.png";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Interior Painting",
      description:
        "Transform your indoor spaces with professional interior painting services. We handle everything from single rooms to entire homes.",
      features: [
        "Living rooms & bedrooms",
        "Kitchens & bathrooms",
        "Hallways & staircases",
        "Ceilings & trim work",
        "Custom finishes & textures",
      ],
      image: InteriorPaint,
    },
    {
      icon: Building2,
      title: "Exterior Painting",
      description:
        "Enhance your property's curb appeal and protect it from the elements with our expert exterior painting services.",
      features: [
        "House siding & trim",
        "Decks & fences",
        "Garage doors",
        "Shutters & accents",
        "Weather-resistant coatings",
      ],
      image: ExteriorPaint,
    },
    {
      icon: Building2,
      title: "Commercial Painting",
      description:
        "Professional painting solutions for offices, retail spaces, and commercial properties with minimal disruption to your business.",
      features: [
        "Office buildings",
        "Retail stores",
        "Warehouses",
        "Restaurants & hotels",
        "Flexible scheduling",
      ],
      image: Commerrcial,
    },
    {
      icon: Sparkles,
      title: "Cabinet Refinishing",
      description:
        "Give your kitchen or bathroom a fresh new look with our expert cabinet painting and refinishing services.",
      features: [
        "Kitchen cabinets",
        "Bathroom vanities",
        "Built-in shelving",
        "Custom color matching",
        "Professional preparation",
      ],
      image: KitchenCabinet,
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description:
        "Not sure which colors to choose? Our expert color consultants will help you select the perfect palette for your space.",
      features: [
        "Professional color advice",
        "Sample testing",
        "Trend recommendations",
        "Color coordination",
        "Lighting considerations",
      ],
      image: ColorConsultation,
    },
    {
      icon: Shield,
      title: "Surface Preparation",
      description:
        "Proper preparation is key to a lasting finish. We provide comprehensive surface prep for all painting projects.",
      features: [
        "Drywall repair",
        "Surface cleaning",
        "Primer application",
        "Crack & hole filling",
        "Sanding & smoothing",
      ],
      image: SurfacePrep,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We meet with you to discuss your vision, timeline, and budget.",
    },
    {
      step: "02",
      title: "Quote",
      description: "Receive a detailed, transparent quote with no hidden fees.",
    },
    {
      step: "03",
      title: "Preparation",
      description:
        "We carefully prepare all surfaces and protect your property.",
    },
    {
      step: "04",
      title: "Painting",
      description: "Our expert team brings your vision to life with precision.",
    },
    {
      step: "05",
      title: "Final Inspection",
      description:
        "We ensure everything meets our high standards and your expectations.",
    },
    {
      step: "06",
      title: "Cleanup",
      description: "Your space is left clean and ready to enjoy.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#23282d] text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1688372199140-cade7ae820fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYWludGVycyUyMHdvcmtpbmd8ZW58MXx8fHwxNzY4NTM3MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        />

        {/* Dim Overlay */}
        <div className="absolute inset-0 bg-[#23282d]/80" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl mb-6">
              Our <span className="text-[#ffb601]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive painting solutions tailored to your needs. From
              residential interiors to commercial exteriors, we deliver
              excellence in every brushstroke.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="bg-[#ffb601] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#23282d]" />
                  </div>
                  <h2 className="text-3xl text-[#23282d] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#ffb601] mr-3">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-[#23282d] mb-4">
              Our <span className="text-[#ffb601]">Process</span>
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined approach to delivering exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg relative"
              >
                <div className="text-6xl text-[#ffb601] opacity-20 absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#ffb601] text-[#23282d] rounded-full flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl text-[#23282d] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#23282d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#ffb601] text-[#23282d] hover:bg-[#ffa500] transition-colors rounded-md"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
