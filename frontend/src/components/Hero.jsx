import React from 'react';
import { ArrowDown, Code, Brain, Cpu } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 border border-blue-400/30 rounded-lg rotate-45"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-16 h-16 border border-purple-400/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-12 h-12 border border-cyan-400/30 rounded-lg"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <div className="w-24 h-24 border border-indigo-400/30 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 flex justify-center space-x-6">
          <div className="animate-pulse">
            <Code className="w-12 h-12 text-blue-400" />
          </div>
          <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            <Brain className="w-12 h-12 text-purple-400" />
          </div>
          <div className="animate-pulse" style={{ animationDelay: '1s' }}>
            <Cpu className="w-12 h-12 text-cyan-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Sriyaa
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          AI & Robotics Engineer crafting intelligent solutions with code, creativity, and cutting-edge technology
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Explore My Work
          </button>
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors">
            <ArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>

      {/* Background Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;