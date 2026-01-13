"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:contact@example.com",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend needed
    console.log("Form submitted:", formData);
    alert("Thank you for your message! (This is a placeholder - form submission not implemented)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] overflow-hidden">
      {/* Subtle background enhancement */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-500/[0.025] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-purple-500/[0.025] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Let's collaborate on your next AI-powered project
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut" }}>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-gray-900/60 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:bg-gray-900/80 hover:border-gray-700/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut" }}>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-gray-900/60 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:bg-gray-900/80 hover:border-gray-700/50 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut" }}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-3.5 bg-gray-900/60 border border-gray-800/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:bg-gray-900/80 hover:border-gray-700/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.div variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut" }}>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-white text-[#0a0a0a] rounded-xl font-semibold text-base flex items-center justify-center gap-2.5 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3
              className="text-xl font-semibold text-white mb-8"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Connect with me
            </motion.h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-4 p-5 rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/30 to-gray-950/30 hover:border-gray-700/70 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                    variants={itemVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ x: 6, scale: 1.02 }}
                  >
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 group-hover:border-blue-500/40 group-hover:bg-gradient-to-br group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-all duration-300">
                      <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                    <span className="relative text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {link.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
