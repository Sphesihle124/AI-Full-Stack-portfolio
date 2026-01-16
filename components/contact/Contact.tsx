"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sphesihlemlanzi59@gmail.com",
    href: "mailto:sphesihlemlanzi59@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 81 234 5678", // Update with your actual phone number
    href: "tel:+27812345678", // Update with your actual phone number
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sphesihle-mlanzi-2844a4287",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Sphesihle124",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]"
    >
      <div className="max-w-3xl lg:max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-md sm:max-w-xl mx-auto leading-relaxed px-2"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Ready to collaborate on your next AI-powered project? Let's connect.
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-gray-800 bg-[#0d0d0d] hover:border-gray-700 hover:bg-[#111111] transition-all duration-300"
                variants={itemVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gray-900/80 border border-gray-800 group-hover:border-gray-700 transition-all duration-300 flex-shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5 sm:mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-gray-200 group-hover:text-white transition-colors duration-300 truncate">
                    {item.value}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.p
            className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-5"
            variants={itemVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Follow me on
          </motion.p>
          <motion.div
            className="flex gap-3 sm:gap-4"
            variants={itemVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl border border-gray-800 bg-[#0d0d0d] hover:border-gray-600 hover:bg-[#111111] transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
