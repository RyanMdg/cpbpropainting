import {
  Home,
  Building2,
  Sparkles,
  Palette,
  Shield,
  Wallpaper,
  Stars,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import workSample1 from "../assets/images/walpaper_3.png";
import workSample2 from "../assets/images/wallpaper1.png";
import workSample3 from "../assets/images/wallpaper_2.png";

export function Services() {
  const wallpaperCollections = [
    {
      category: "Kids & Nursery Designs",
      description: "Create magical spaces for your little ones",
      designs: [
        {
          title: "Safari Dream",
          image:
            "https://images.unsplash.com/photo-1560130958-0ea787c275de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwd2FsbHBhcGVyJTIwbnVyc2VyeXxlbnwxfHx8fDE3Njg2NDQ0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Tropical Paradise",
          image:
            "https://images.unsplash.com/photo-1665037935097-2f26d8b38b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHdhbGxwYXBlciUyMHJvb218ZW58MXx8fHwxNzY4NjQ0NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Floral Fantasy",
          image:
            "https://images.unsplash.com/photo-1619987466144-ab49080340fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yYWwlMjB3YWxscGFwZXIlMjBiZWRyb29tfGVufDF8fHx8MTc2ODY0NDQwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Modern Geometric",
          image:
            "https://images.unsplash.com/photo-1659806403727-ec6af5ff5dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjB3YWxscGFwZXIlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2ODY0NDQwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      category: "Luxury Collections",
      description: "Premium wallpapers for sophisticated spaces",
      designs: [
        {
          title: "Elegant Texture",
          image:
            "https://images.unsplash.com/photo-1551554781-c46200ea959d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2FsbHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3Njg2NDQ0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Contemporary Design",
          image:
            "https://images.unsplash.com/photo-1503174971373-b1f69850bded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YWxscGFwZXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg2NDQ0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Luxury Finish",
          image:
            "https://images.unsplash.com/photo-1706954668876-44410ebbbfa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YWxscGFwZXIlMjBkZXNpZ258ZW58MXx8fHwxNzY4NjQ0NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          title: "Abstract Art",
          image:
            "https://images.unsplash.com/photo-1688413708888-8368d1d99a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxscGFwZXIlMjBwYXR0ZXJuJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY4NjQ0NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
  ];

  const paintingServices = [
    {
      icon: Home,
      title: "Interior Painting",
      description:
        "Professional interior painting for residential and commercial spaces.",
      features: [
        "Living rooms & bedrooms",
        "Kitchens & bathrooms",
        "Ceilings & trim work",
      ],
    },
    {
      icon: Building2,
      title: "Exterior Painting",
      description:
        "Enhance your property's curb appeal with expert exterior painting.",
      features: [
        "House siding & trim",
        "Decks & fences",
        "Weather-resistant coatings",
      ],
    },
    {
      icon: Sparkles,
      title: "Cabinet Refinishing",
      description:
        "Give your cabinets a fresh new look with professional refinishing.",
      features: [
        "Kitchen cabinets",
        "Bathroom vanities",
        "Custom color matching",
      ],
    },
  ];

  const wallpaperFeatures = [
    {
      icon: Stars,
      title: "Premium Materials",
      description:
        "We use only the highest quality wallpapers from trusted manufacturers worldwide.",
    },
    {
      icon: Palette,
      title: "Custom Designs",
      description:
        "Choose from thousands of designs or create your own custom wallpaper.",
    },
    {
      icon: Shield,
      title: "Expert Installation",
      description:
        "Our certified installers ensure flawless application with precision and care.",
    },
    {
      icon: Heart,
      title: "Satisfaction Guaranteed",
      description:
        "We stand behind our work with a comprehensive warranty and guarantee.",
    },
  ];

  return (
    <div>
      {/* Hero Section - Wallpaper Focus */}
      <section className="relative bg-[#23282d] text-white py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503174971373-b1f69850bded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YWxscGFwZXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg2NDQ0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        />
        <div className="absolute inset-0 bg-[#23282d]/85" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-7xl mb-6 uppercase tracking-wider">
              <span className="text-[#ffb601]">WALLPAPER</span>{" "}
              <span className="text-white">INSTALLATION</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your space with our premium wallpaper installation
              services. Choose from our exclusive collections or bring your own
              design.
            </p>

            <div className="flex items-center justify-center gap-3 text-sm text-gray-300 uppercase tracking-widest mb-10">
              <Link to="/" className="hover:text-[#ffb601] transition-colors">
                HOME
              </Link>
              <span className="text-[#ffb601]">/</span>
              <span className="text-[#ffb601]">SERVICES</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-[#ffb601] text-[#23282d] text-lg font-bold uppercase tracking-wider rounded-lg hover:bg-[#ffa500] transition-all shadow-2xl hover:shadow-[#ffb601]/50 hover:scale-105"
              >
                Book Free Consultation
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Wallpaper Service */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl text-[#23282d] mb-6">
              Why Choose Our{" "}
              <span className="text-[#ffb601]">Wallpaper Service</span>
            </h2>
            <div className="w-24 h-1 bg-[#ffb601] mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional wallpaper installation with attention to every detail
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wallpaperFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-[#ffb601] hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block mb-6"
                >
                  <div className="w-20 h-20 bg-[#ffb601] rounded-full flex items-center justify-center">
                    <feature.icon
                      className="w-10 h-10 text-[#23282d]"
                      strokeWidth={2}
                    />
                  </div>
                </motion.div>
                <h3 className="text-2xl text-[#23282d] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wallpaper Collections Gallery */}
      {wallpaperCollections.map((collection, collectionIndex) => (
        <section
          key={collectionIndex}
          className={`py-24 ${
            collectionIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-6 py-2 bg-[#ffb601]/10 rounded-full mb-4">
                <p className="text-[#ffb601] font-bold uppercase tracking-wider text-sm">
                  {collectionIndex === 0
                    ? "EXCLUSIVE PARTNERSHIP"
                    : "TRENDING NOW"}
                </p>
              </div>
              <h2 className="text-4xl sm:text-5xl text-[#23282d] mb-4">
                {collection.category}
              </h2>
              <p className="text-xl text-gray-600">{collection.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {collection.designs.map((design, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#23282d]/90 via-[#23282d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{design.title}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-[#ffb601] font-semibold">
                        Premium Quality
                      </p>
                      <ArrowRight className="w-5 h-5 text-[#ffb601]" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#23282d]/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-white font-semibold text-sm">
                      {design.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                to={`/gallery/${
                  collectionIndex === 0 ? "kids-nursery" : "luxury"
                }`}
                className="inline-flex items-center px-8 py-3 bg-[#23282d] text-white rounded-lg hover:bg-[#ffb601] hover:text-[#23282d] transition-all shadow-lg group"
              >
                View More Designs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Recent Wallpaper Projects */}
      <section className="py-32 bg-[#23282d] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#23282d] via-[#2d3339] to-[#23282d]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl text-white mb-6">
              Our Recent <span className="text-[#ffb601]">Installations</span>
            </h2>
            <div className="w-24 h-1 bg-[#ffb601] mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the quality and precision we bring to every wallpaper
              installation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: workSample1,
                title: "Luxury Residential Installation",
                category: "Premium Project",
              },
              {
                image: workSample2,
                title: "Modern Commercial Space",
                category: "Commercial",
              },
              {
                image: workSample3,
                title: "Contemporary Home Design",
                category: "Residential",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-[#23282d]/50 group-hover:bg-[#23282d]/70 transition-all duration-500" />

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 flex flex-col justify-end p-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <div className="mb-3">
                      <span className="inline-block px-4 py-1 bg-[#ffb601] text-[#23282d] text-xs font-bold uppercase tracking-wider rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl mb-2">{project.title}</h3>
                    <div className="w-16 h-1 bg-[#ffb601]" />
                  </motion.div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#23282d]/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                    <p className="text-white text-lg font-semibold">
                      {project.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Painting Services - Secondary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-[#23282d] mb-6">
              Also Offering{" "}
              <span className="text-[#ffb601]">Painting Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#ffb601] mx-auto mb-6" />
            <p className="text-xl text-gray-600">
              Complete painting solutions for residential and commercial
              properties
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {paintingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-[#ffb601] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#23282d]" />
                </div>
                <h3 className="text-2xl text-[#23282d] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-[#ffb601] mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffb601] via-[#ffc220] to-[#ffb601]" />
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
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Wallpaper className="w-16 h-16 text-[#23282d] mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl text-[#23282d] mb-6 uppercase tracking-wide">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-[#23282d]/80 mb-10 max-w-2xl mx-auto">
              Contact us today for a free consultation and bring your vision to
              life with our premium wallpaper installation services
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-12 py-5 bg-[#23282d] text-white text-lg font-bold uppercase tracking-wider rounded-lg hover:bg-[#1a1e22] transition-all shadow-2xl hover:scale-105"
            >
              Get Free Quote
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
