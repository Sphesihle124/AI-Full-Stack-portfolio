"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Zap, Cloud, Workflow } from "lucide-react";
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
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying and managing scalable cloud infrastructure with Vercel, AWS, Docker, and modern CI/CD pipelines.",
  },
  {
    icon: Workflow,
    title: "API Development",
    description: "Designing and building robust RESTful and GraphQL APIs with authentication, validation, and documentation.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle background enhancement */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
        </motion.div>

        {/* Profile Section with Photo and Bio */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
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
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              Sphesihle Mlanzi
            </h3>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-3 sm:mb-4">
            I am an AI Full-Stack Developer based in Johannesburg, South Africa, focused on building intelligent, scalable web and mobile applications using modern technologies and AI-assisted development workflows.
            </p>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-3 sm:mb-4">
            With a background in graphic design and 3D artistry, I bring a strong eye for user experience and visual clarity into software engineering. This creative foundation combined with hands-on full-stack development, allows me to design and ship production-ready systems that are both technically robust and user-centric.

I leverage technologies such as Next.js, TypeScript, modern frontend frameworks, and AI APIs to build end-to-end solutions from clean responsive interfaces to scalable backend logic and AI-powered features. I have collaborated on real-world projects including CareerDash and BrainBox AI, gaining practical experience across the full development lifecycle, including development, testing, and deployment.
            </p>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            My approach emphasizes clean code, scalable architecture, performance, and practical AI integration. I am highly adaptable, continuously learning, and driven by building impactful digital products that solve real-world problems.
            </p>
          </div>
        </motion.div>

        {/* Expertise Cards */}
        <motion.h3
          className="text-xl sm:text-2xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Areas of Expertise
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
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
                className="group relative p-5 sm:p-6 rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-950/40 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full flex flex-col"
                variants={itemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Animated gradient border glow on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <motion.div
                  className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/15 border border-blue-500/30 mb-4 sm:mb-5 group-hover:border-blue-400/50 group-hover:from-blue-500/25 group-hover:to-purple-500/25 group-hover:scale-110 transition-all duration-300"
                  variants={iconVariants}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </motion.div>
                <h3 className="relative text-lg sm:text-xl font-bold text-white mb-2.5 sm:mb-3 leading-tight group-hover:text-blue-50 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="relative text-gray-400 leading-relaxed text-sm sm:text-[15px] group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technologies & Tools */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              "Next.js",
              "TypeScript",
              "React",
              "Node.js",
              "Python",
              "Tailwind CSS",
              "PostgreSQL",
              "OpenAI API",
              "AWS",
              "Docker",
              "Git",
              "GitHub",
              "Vercel",
              "Supabase",
              "Firebase",
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
