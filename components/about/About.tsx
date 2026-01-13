"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Zap } from "lucide-react";
import Image from "next/image";

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

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const features = [
  {
    icon: Brain,
    title: "AI-Assisted Development",
    description: "Leveraging AI tools to accelerate development, enhance code quality, and solve complex problems efficiently.",
  },
  {
    icon: Code,
    title: "Full-Stack Expertise",
    description: "Building end-to-end solutions from frontend interfaces to backend APIs and database architecture.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Systems",
    description: "Creating responsive web applications and native mobile experiences with modern frameworks.",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description: "Integrating AI capabilities into applications to deliver intelligent, data-driven user experiences.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle background enhancement */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
        </motion.div>

        {/* Profile Section with Photo and Bio */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Profile Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50">
                <Image
                  src="/profile.jpg"
                  alt="Sphesihle Mlanzi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, 320px"
                  priority
                  quality={95}
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>

          {/* Professional Bio */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Sphesihle Mlanzi
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              AI Full-Stack Developer specializing in building intelligent, scalable web and mobile applications.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              I leverage modern technologies like Next.js, TypeScript, and AI APIs to create production-ready solutions
              that solve real-world problems. My approach combines technical expertise with AI-assisted development workflows
              to deliver high-quality software efficiently.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              With a focus on clean code, scalable architecture, and user-centric design, I help teams and businesses
              build innovative products that make an impact.
            </p>
          </div>
        </motion.div>

        {/* Expertise Cards */}
        <motion.h3
          className="text-2xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Areas of Expertise
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative p-8 rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/30 to-gray-950/30 hover:border-gray-700/70 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 h-full"
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <motion.div
                  className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-5 group-hover:border-blue-500/40 group-hover:bg-gradient-to-br group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-all duration-300"
                  variants={iconVariants}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </motion.div>
                <h3 className="relative text-xl font-semibold text-white mb-3 leading-tight">{feature.title}</h3>
                <p className="relative text-gray-400 leading-relaxed text-[15px]">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technologies & Tools */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Next.js",
              "TypeScript",
              "React",
              "Node.js",
              "Python",
              "Tailwind CSS",
              "PostgreSQL",
              "MongoDB",
              "OpenAI API",
              "AWS",
              "Docker",
              "Git",
              "Vercel",
              "TensorFlow",
              "Jest",
              "Playwright",
            ].map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gray-800/40 border border-gray-700/50 rounded-lg text-sm text-gray-300 hover:border-blue-500/50 hover:text-white hover:bg-gray-800/60 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
