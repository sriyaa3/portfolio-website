import React from 'react';
import { Heart, Code, Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/90 border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Sriyaa
                </span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI & Robotics Engineer passionate about building intelligent solutions 
              that make a difference. Currently pursuing BTech at VIT Chennai.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>using</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>and</span>
              <Brain className="w-4 h-4 text-purple-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase()}`).scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Core Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'AI/ML', 'React', 'Node.js', 'GCP', 'Robotics'].map((tech) => (
                <span key={tech} className="bg-slate-800 text-gray-300 px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Sriyaa. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Available for internship opportunities • 
              <span className="text-blue-400 ml-1">Open to work</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;