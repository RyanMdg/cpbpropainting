import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Users,
  Clock,
  Briefcase,
  MapPin,
  Paintbrush,
  Droplet,
  Timer,
  DollarSign,
  Sparkles,
  ThumbsUp,
} from "lucide-react";
import { motion } from "motion/react";
import workSample1 from "../assets/images/612259937_2073330886767474_5233871115005836255_n.jpg";
import workSample2 from "../assets/images/sample2.png";
import workSample3 from "../assets/images/sample3.png";
import workSample4 from "../assets/images/sample4.png";
import workSample5 from "../assets/images/sample5.png";
import benjaminMooreLogo from "../assets/images/benjamin-moore.png";
import sherwinWilliamsLogo from "../assets/images/sherwin-williams.png";
import homeDepotLogo from "../assets/images/home-depot.png";
import cloverdalePaintLogo from "../assets/images/cloverdale.png";
import duluxLogo from "../assets/images/dulux.png";
import CountUp from "../components/CountUp";
import { HeroSlider } from "../components/HeroSlider";

export function Home() {
  const services = [
    {
      title: "Interior Painting",
      description:
        "Transform your indoor spaces with expert interior painting services.",
      image:
        "https://images.unsplash.com/photo-1742319096916-6c5c2c577b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHJvb20lMjBwYWludGluZ3xlbnwxfHx8fDE3Njg0MjE2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Exterior Painting",
      description:
        "Enhance your curb appeal with professional exterior painting solutions.",
      image:
        "https://images.unsplash.com/photo-1642369259805-8b2d772512fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY4Mzk4Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Commercial Painting",
      description:
        "Professional painting services for businesses and commercial properties.",
      image:
        "https://images.unsplash.com/photo-1633505650701-6104c4fc72c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYWludGVkJTIwaG9tZXxlbnwxfHx8fDE3Njg0MjE2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

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
              className="bg-[#ffb601] px-6 md:px-12 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-4 shadow-2xl"
            >
              <h3 className="text-lg md:text-2xl text-white font-semibold uppercase tracking-wide">
                WE UNDERSTAND YOUR NEEDS ON RESTORATION
              </h3>
              <Link
                to="/contact"
                className="px-8 py-3 bg-[#23282d] text-white font-semibold uppercase tracking-wider hover:bg-[#1a1e22] transition-all whitespace-nowrap shadow-lg"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section - Dark Background */}
      <section className="relative bg-[#23282d] pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                icon: Briefcase,
                value: "277",
                label: "Total Projects",
                delay: 0,
              },
              {
                icon: Users,
                value: "30",
                label: "Staff Members",
                delay: 0.1,
              },
              {
                icon: Clock,
                value: "4000",
                label: "Hours of Work",
                delay: 0.2,
              },
              {
                icon: MapPin,
                value: "20",
                label: "Cities Servicing",
                delay: 0.3,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, duration: 0.6 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-20 h-20 mb-6"
                >
                  <stat.icon
                    className="w-full h-full text-[#ffb601]"
                    strokeWidth={1.5}
                  />
                </motion.div>

                <div className="mb-3">
                  <div className="text-5xl lg:text-6xl text-white tracking-tight">
                    <CountUp
                      end={parseInt(stat.value)}
                      duration={2}
                      delay={stat.delay}
                    />
                  </div>
                </div>

                <p className="text-[#ffb601] uppercase tracking-widest text-xs lg:text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#ffb601]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl text-[#23282d] mb-6">
              Why Choose <span className="text-[#ffb601]">CPB Pro</span>
            </h2>
            <div className="w-24 h-1 bg-[#ffb601] mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional painting services with a commitment to
              quality, professionalism, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Paintbrush,
                title: "Expert Craftsmanship",
                description:
                  "Our skilled painters deliver flawless results with attention to every detail.",
              },
              {
                icon: Droplet,
                title: "Quality Materials",
                description:
                  "We use only premium paints and materials for long-lasting, beautiful finishes.",
              },
              {
                icon: Timer,
                title: "Timely Completion",
                description:
                  "Projects completed on schedule without compromising on quality.",
              },
              {
                icon: DollarSign,
                title: "Competitive Pricing",
                description:
                  "Fair, transparent pricing with no hidden costs or surprises.",
              },
              {
                icon: Sparkles,
                title: "Clean & Professional",
                description:
                  "We respect your space and leave it cleaner than we found it.",
              },
              {
                icon: ThumbsUp,
                title: "Satisfaction Guaranteed",
                description:
                  "Your complete satisfaction is our top priority on every project.",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group p-8 rounded-2xl bg-white border-2 border-transparent hover:border-[#ffb601] hover:shadow-2xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent
                      className="w-16 h-16 text-[#ffb601] mb-6"
                      strokeWidth={2}
                    />
                  </motion.div>
                  <h3 className="text-2xl text-[#23282d] mb-4 group-hover:text-[#ffb601] transition-colors">
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
      <section className="py-32 bg-linear-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl text-[#23282d] mb-6">
              Our <span className="text-[#ffb601]">Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#ffb601] mx-auto mb-6" />
            <p className="text-xl text-gray-600">
              Comprehensive painting solutions for every need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-80 overflow-hidden relative">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#23282d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <p className="text-sm">{service.description}</p>
                  </motion.div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl text-[#23282d] mb-4 group-hover:text-[#ffb601] transition-colors">
                    {service.title}
                  </h3>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[#ffb601] hover:gap-3 transition-all group/link"
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
      <section className="py-32 bg-[#23282d] relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#23282d] via-[#2d3339] to-[#23282d]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl text-white mb-6">
              Our <span className="text-[#ffb601]">Recent Work</span>
            </h2>
            <div className="w-24 h-1 bg-[#ffb601] mx-auto mb-6" />
            <p className="text-xl text-gray-300">
              See the quality and precision we bring to every project
            </p>
          </motion.div>

          {/* Main Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              {
                image: workSample1,
                title: "Professional Interior Work",
                description:
                  "Precision painting with meticulous attention to detail",
              },
              {
                image: workSample2,
                title: "Luxury Residential Finish",
                description: "High-end finishes for sophisticated spaces",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group overflow-hidden rounded-2xl shadow-2xl"
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
                  className="absolute inset-0 bg-linear-to-t from-[#23282d] via-[#23282d]/80 to-transparent flex items-end p-8"
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
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                image: workSample3,
                title: "Modern High-Rise Interior",
                category: "Residential",
              },
              {
                image: workSample4,
                title: "Elegant Ceiling Details",
                category: "Custom Finish",
              },
              {
                image: workSample5,
                title: "Luxury Living Space",
                category: "Premium Project",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
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
                <motion.div className="absolute inset-0 bg-linear-to-t from-[#ffb601]/90 via-[#ffb601]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#23282d] text-sm font-medium mb-2 uppercase tracking-wider">
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
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#ffb601] text-[#23282d] rounded-lg hover:bg-[#ffa500] transition-all hover:shadow-lg hover:shadow-[#ffb601]/50 group"
            >
              View All Projects
              <ArrowRight
                className="ml-2 group-hover:translate-x-2 transition-transform"
                size={20}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Ultra Elegant Redesign with Light Background */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffb601]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#23282d]/5 rounded-full blur-3xl" />

        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-[#ffb601]/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-[#ffb601]/20 to-transparent" />

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
                    className="w-6 h-6 text-[#ffb601] fill-[#ffb601]"
                  />
                ))}
              </div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl text-[#23282d] mb-4">
              What Our <span className="text-[#ffb601] italic">Clients</span>{" "}
              Say
            </h2>

            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-linear-to-r from-transparent to-[#ffb601]" />
              <div className="w-2 h-2 bg-[#ffb601] rotate-45" />
              <div className="h-px w-16 bg-linear-to-l from-transparent to-[#ffb601]" />
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience with CPB
              Pro Painting
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
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
                  <div className="absolute -inset-1 bg-linear-to-r from-[#ffb601] to-[#ffa500] rounded-xl opacity-0 group-hover:opacity-75 blur transition-all duration-500" />

                  {/* Main Card - Dark Background */}
                  <div className="relative bg-linear-to-br from-[#2d3339] to-[#23282d] p-8 rounded-xl border border-[#ffb601]/20 group-hover:border-[#ffb601] shadow-lg group-hover:shadow-2xl group-hover:shadow-[#ffb601]/20 transition-all duration-500 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <svg
                        className="w-12 h-12 text-[#ffb601]/20 group-hover:text-[#ffb601]/40 transition-colors duration-500"
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
                          <Star className="w-4 h-4 text-[#ffb601] fill-[#ffb601]" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 grow line-clamp-6">
                      {testimonial.text}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-linear-to-r from-transparent via-[#ffb601]/30 to-transparent mb-4" />

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      {/* Avatar Circle */}
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#ffb601] to-[#ffa500] flex items-center justify-center text-white text-lg font-bold shadow-md group-hover:shadow-lg group-hover:shadow-[#ffb601]/50 transition-all duration-300">
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
              className="inline-flex items-center px-8 py-3 bg-linear-to-r from-[#ffb601] to-[#ffa500] text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              Start Your Project Today
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#ffb601] via-[#ffc220] to-[#ffb601]" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2323282d' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl text-[#23282d] mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-2xl text-[#23282d]/80 mb-12">
              Get a free quote today and let us bring your vision to life
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="group inline-flex items-center px-12 py-5 bg-[#23282d] text-white hover:bg-[#1a1e22] transition-all rounded-lg shadow-2xl text-lg"
              >
                Contact Us Now
                <ArrowRight
                  className="ml-3 group-hover:translate-x-2 transition-transform"
                  size={24}
                />
              </Link>
            </motion.div>
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
            <h2 className="text-3xl sm:text-4xl text-[#23282d] mb-2">
              Our <span className="text-[#ffb601]">Partners</span>
            </h2>
            <p className="text-gray-600">Trusted brands we work with</p>
          </motion.div>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* Repeat the logos multiple times for seamless scrolling */}
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
    </div>
  );
}
