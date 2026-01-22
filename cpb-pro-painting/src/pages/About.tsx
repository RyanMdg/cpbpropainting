import { Users, CheckCircle, Trophy, ThumbsUp, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import workSample1 from "../assets/images/612259937_2073330886767474_5233871115005836255_n.jpg";
import workSample2 from "../assets/images/sample2.png";

export function About() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const features = [
    {
      icon: Trophy,
      title: "WE'VE REPUTATION FOR",
      subtitle: "EXCELLENCE",
    },
    {
      icon: Handshake,
      title: "WE BUILD",
      subtitle: "PARTNERSHIPS",
    },
    {
      icon: ThumbsUp,
      title: "GUIDED BY",
      subtitle: "COMMITMENT",
    },
    {
      icon: Users,
      title: "A TEAM OF",
      subtitle: "PROFESSIONALS",
    },
  ];

  const valuesAccordion = [
    {
      id: "safety",
      title: "SAFETY",
      content:
        "We're committed to ensuring the security and health of our workers, our temporary workers, our clients, and the individuals within the communities where we work.",
    },
    {
      id: "customer-service",
      title: "CUSTOMER SERVICE",
      content:
        "We prioritize exceptional customer service, ensuring every client receives personalized attention and support throughout their project.",
    },
    {
      id: "integrity",
      title: "INTEGRITY",
      content:
        "Integrity is the foundation for everything that we do. Our commitment to honesty, trust, and transparency has earned us admiration and respect. We do the right thing — even when no one is watching.",
    },
  ];

  const achievements = [
    { number: "15+", label: "Years in Business" },
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Skilled Professionals" },
  ];

  const team = [
    {
      name: "Professional Team",
      role: "Expert Painters",
      image:
        "https://images.unsplash.com/photo-1688372199140-cade7ae820fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYWludGVyJTIwd29ya3xlbnwxfHx8fDE3Njg0MjE2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Quality Work",
      role: "Precision & Care",
      image: workSample1,
    },
    {
      name: "Beautiful Results",
      role: "Stunning Finishes",
      image: workSample2,
    },
  ];

  const whyChooseUs = [
    "Licensed and insured professionals",
    "Premium quality paints and materials",
    "Detailed preparation and cleanup",
    "Competitive and transparent pricing",
    "On-time project completion",
    "Satisfaction guarantee",
    "Eco-friendly paint options",
    "Free color consultations",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#0A0908] to-[#3a4149] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl mb-6">
                About <span className="text-[#C6AC8E]">CPB Pro Painting</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                For over 15 years, CPB Pro Painting has been transforming spaces
                with expert craftsmanship, quality materials, and unwavering
                dedication to customer satisfaction.
              </p>
              <p className="text-lg text-gray-300">
                We're more than just painters – we're partners in bringing your
                vision to life. Every project, from a single room to an entire
                building, receives our full attention and expertise.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1688372199140-cade7ae820fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYWludGVyJTIwd29ya3xlbnwxfHx8fDE3Njg0MjE2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Painting"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-[#C6AC8E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl text-[#0A0908] mb-2">
                  {achievement.number}
                </div>
                <div className="text-[#0A0908]">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Company Info */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                ABOUT US
              </p>
              <h2 className="text-4xl sm:text-5xl text-[#0A0908] mb-6">
                WE DELIVER <span className="text-[#C6AC8E]">LANDMARK</span>
                <br />
                PROJECTS
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                CPB Pro Painting is a fully-licensed, fully-insured professional
                painting company specializing in house and office painting,
                wallpaper installation and wall repair in Metro Vancouver.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded bg-[#C6AC8E] flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-[#0A0908]" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">
                        {feature.title}
                      </p>
                      <p className="text-sm font-semibold text-[#0A0908]">
                        {feature.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Values */}
            <div>
              <h3 className="text-3xl text-[#0A0908] mb-6">
                OUR <span className="text-[#0A0908]">VALUES</span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Integrity is the foundation for everything that we do. Our
                commitment to honesty, trust, and transparency has earned us
                admiration and respect. We do the right thing — even when no one
                is watching.
              </p>

              {/* Accordion */}
              <div className="space-y-3">
                {valuesAccordion.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded">
                    <button
                      onClick={() =>
                        setOpenAccordion(
                          openAccordion === item.id ? null : item.id
                        )
                      }
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-[#0A0908]">
                        {item.title}
                      </span>
                      <div
                        className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                          openAccordion === item.id
                            ? "bg-[#C6AC8E]"
                            : "bg-gray-200"
                        }`}
                      >
                        <span className="text-sm font-bold text-[#0A0908]">
                          {openAccordion === item.id ? "−" : "+"}
                        </span>
                      </div>
                    </button>
                    {openAccordion === item.id && (
                      <div className="px-5 pb-5 pt-2 text-gray-600 leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-[#0A0908] mb-4">
              Why Choose <span className="text-[#0A0908]">Us</span>
            </h2>
            <p className="text-xl text-gray-600">
              We go above and beyond to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#0A0908] shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#EAE0D5] text-[#0A0908]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">
              Meet Our <span className="text-[#0A0908]">Team</span>
            </h2>
            <p className="text-xl text-[#0A0908]">
              Skilled professionals dedicated to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative overflow-hidden mb-6 group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0908]/40 to-transparent opacity-60" />
                </div>
                <h3 className="text-xl mb-2">{member.name}</h3>
                <p className="text-[#0A0908]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-[#EAE0D5] to-[#C6AC8E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-[#0A0908] mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-[#0A0908] mb-8">
            Experience the CPB Pro Painting difference on your next project
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#22333B] text-[#EAE0D5] hover:bg-[#0A0908] transition-colors rounded-md"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
