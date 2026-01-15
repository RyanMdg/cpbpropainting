import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/images/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/services", label: "SERVICES" },
    { path: "/about", label: "ABOUT US" },
    { path: "/contact", label: "CONTACT US" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={14} className="mr-2 text-[#23282d]" />
              6475 Bruce St, Vancouver, BC V5P 3M8
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-[#ffb601] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#ffb601] transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <img src={logo} alt="CPB Pro Painting" className="h-12 sm:h-16" />
            </Link>

            {/* Contact Info & CTA - Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Call Us</p>
                <a
                  href="tel:+17782328002"
                  className="text-[#23282d] hover:text-[#ffb601] transition-colors"
                >
                  (+1) 778-232-8002
                </a>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Email Us</p>
                <a
                  href="mailto:hello@cpbpropainting.ca"
                  className="text-[#23282d] hover:text-[#ffb601] transition-colors"
                >
                  hello@cpbpropainting.ca
                </a>
              </div>
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#ffb601] text-[#23282d] hover:bg-[#ffa500] transition-all shadow-md hover:shadow-lg"
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-[#23282d] hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#23282d]/95 backdrop-blur-lg shadow-2xl"
            : "bg-[#23282d]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-5 text-sm tracking-wider transition-all duration-300 relative ${
                    isActive(link.path)
                      ? "text-[#ffb601] bg-[#ffb601]/10"
                      : "text-white hover:text-[#ffb601] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Search Icon */}
            <button className="hidden lg:flex p-3 text-white hover:text-[#ffb601] transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden border-t border-white/10"
              >
                <div className="py-4 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 text-sm tracking-wider transition-colors ${
                          isActive(link.path)
                            ? "bg-[#ffb601] text-[#23282d]"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="px-4 pt-4 border-t border-white/10 space-y-3">
                    <a
                      href="tel:+17782328002"
                      className="flex items-center text-white text-sm"
                    >
                      <Phone size={16} className="mr-2 text-[#ffb601]" />
                      (+1) 778-232-8002
                    </a>
                    <a
                      href="mailto:hello@cpbpropainting.ca"
                      className="flex items-center text-white text-sm"
                    >
                      <Mail size={16} className="mr-2 text-[#ffb601]" />
                      hello@cpbpropainting.ca
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
