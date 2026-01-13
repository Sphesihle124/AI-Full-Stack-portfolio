"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-gray-800/50 bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent mb-2">
              Sphesihle Mlanzi
            </h3>
            <p className="text-sm text-gray-500">
              AI Full-Stack Developer building intelligent solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-gray-500 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-gray-500 hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-gray-500 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Sphesihle124"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800/50 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Sphesihle Mlanzi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
