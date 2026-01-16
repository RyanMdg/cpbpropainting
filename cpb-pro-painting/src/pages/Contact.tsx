import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { DubaiMap } from "../components/DubaiMap";
import { motion } from "motion/react";
export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567",
      link: "tel:5551234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@cpbpropainting.com",
      link: "mailto:info@cpbpropainting.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Your City, State, ZIP",
      link: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 8AM-6PM\nSat: 9AM-4PM",
      link: "#",
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
              Contact <span className="text-[#ffb601]">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your space? Get in touch with us today for a
              free consultation and quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#ffb601]"
              >
                <div className="bg-[#ffb601] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-[#23282d]" />
                </div>
                <h3 className="text-lg text-[#23282d] mb-2">{info.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {info.content}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl text-[#23282d] mb-6">
                Get a <span className="text-[#ffb601]">Free Quote</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! We've received your message and will contact you
                  soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#ffb601] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#ffb601] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#ffb601] focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#ffb601] focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="cabinet">Cabinet Refinishing</option>
                    <option value="consultation">Color Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#ffb601] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ffb601] text-[#23282d] px-6 py-4 rounded-lg hover:bg-[#ffa500] transition-colors flex items-center justify-center group"
                >
                  <span>Send Message</span>
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl text-[#23282d] mb-6">
                  Why Choose{" "}
                  <span className="text-[#ffb601]">CPB Pro Painting</span>?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Free, no-obligation quotes",
                    "Licensed and insured professionals",
                    "Quality materials and craftsmanship",
                    "Competitive pricing",
                    "On-time project completion",
                    "Satisfaction guaranteed",
                    "Eco-friendly options available",
                    "Flexible scheduling",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#ffb601] mr-3 text-xl">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#ffb601] to-[#ffa500] p-8 rounded-lg text-[#23282d]">
                <h3 className="text-2xl mb-4">Emergency Services</h3>
                <p className="mb-4">
                  Need urgent painting services? We offer emergency response for
                  time-sensitive projects.
                </p>
                <a
                  href="tel:5551234567"
                  className="inline-block bg-[#23282d] text-white px-6 py-3 rounded-lg hover:bg-[#1a1e22] transition-colors"
                >
                  Call Now: (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-[#23282d] mb-4">
              Frequently Asked <span className="text-[#ffb601]">Questions</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical painting project take?",
                answer:
                  "Project timelines vary based on size and scope. A single room typically takes 1-2 days, while whole-house projects may take 1-2 weeks. We provide detailed timelines in our quotes.",
              },
              {
                question: "Do you provide free estimates?",
                answer:
                  "Yes! We offer free, no-obligation quotes. Contact us to schedule a consultation and receive a detailed estimate.",
              },
              {
                question: "What type of paint do you use?",
                answer:
                  "We use premium-quality paints from trusted brands. We can also accommodate specific paint preferences and eco-friendly options.",
              },
              {
                question: "Are you licensed and insured?",
                answer:
                  "Absolutely. CPB Pro Painting is fully licensed and insured for your peace of mind and protection.",
              },
              {
                question: "Do you move furniture?",
                answer:
                  "Yes, we can help move and protect furniture as part of our preparation process. We ensure all items are safely covered and returned to their original positions.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border-l-4 border-[#ffb601] pl-6 py-4"
              >
                <h3 className="text-xl text-[#23282d] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl text-[#23282d] mb-4">
              Our <span className="text-[#ffb601]">Service Area</span>
            </h2>
            <p className="text-gray-600">
              Proudly serving Dubai, UAE and surrounding areas
            </p>
          </div>
          <DubaiMap />
        </div>
      </section>
    </div>
  );
}
