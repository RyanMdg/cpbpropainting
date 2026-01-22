import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import logo from "../assets/images/logo.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#22333B] text-white relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C6AC8E] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <img src={logo} alt="CPB Pro Painting" className="h-16 mb-6" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional painting services delivering quality craftsmanship
              and stunning results for residential and commercial properties.
              Transforming spaces with color for over 17 years.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-[#C6AC8E]/10 border border-[#C6AC8E]/30 flex items-center justify-center hover:bg-[#C6AC8E] hover:border-[#C6AC8E] transition-all group"
                >
                  <Icon
                    size={20}
                    className="text-[#0A0908] group-hover:text-[#0A0908] transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-[#0A0908] mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/services", label: "Services" },
                { path: "/about", label: "About Us" },
                { path: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#0A0908] transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#C6AC8E] mr-0 group-hover:mr-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[#0A0908] mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+17782328002"
                  className="flex items-start space-x-3 text-gray-300 hover:text-[#0A0908] transition-colors group"
                >
                  <Phone
                    size={20}
                    className="text-[#0A0908] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span>(+1) 778-232-8002</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@cpbpropainting.com"
                  className="flex items-start space-x-3 text-gray-300 hover:text-[#0A0908] transition-colors group"
                >
                  <Mail
                    size={20}
                    className="text-[#0A0908] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span>info@cpbpropainting.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin
                  size={20}
                  className="text-[#0A0908] mt-1 flex-shrink-0"
                />
                <span>Your City, State</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} CPB Pro Painting. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#0A0908] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#0A0908] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-8 right-8 w-12 h-12 bg-[#C6AC8E] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#C6AC8E]/50 transition-shadow"
        >
          <ArrowUp className="text-[#0A0908]" size={20} />
        </motion.button>
      </div>
    </footer>
  );
}
