import React from 'react';
import { ExternalLink, Github, Calendar, Zap, Bot, Drone } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Person-Following Drone SITL System",
      date: "January 2025",
      icon: <Drone className="w-8 h-8" />,
      description: "Built an edge-based person-following drone using Jetson Nano and Intel RealSense D455 with depth-aware tracking capabilities.",
      highlights: [
        "Implemented real-time person tracking using YOLOv8n with TensorRT optimization",
        "Streamed RGB-D data via TCP with depth-aware tracking",
        "Enabled autonomous navigation in ArduCopter SITL using MAVLink protocol",
        "Achieved real-time inference on edge devices with ONNX optimization"
      ],
      technologies: ["Jetson Nano", "YOLOv8", "TensorRT", "MAVLink", "ONNX", "RealSense", "Python", "Computer Vision"],
      github: "#",
      demo: "#",
      youtube: "#",
      gradient: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30"
    },
    {
      title: "AI Meeting Assistant",
      date: "March 2025",
      icon: <Bot className="w-8 h-8" />,
      description: "Built a comprehensive Streamlit application to transcribe, summarize, and extract action items from meeting audio using advanced AI models.",
      highlights: [
        "Integrated OpenAI Whisper for accurate audio transcription",
        "Used GPT-4 for intelligent meeting summarization",
        "Automated task assignment via Trello API integration",
        "Support for multi-format audio input with downloadable PDF summaries"
      ],
      technologies: ["Streamlit", "OpenAI", "Whisper", "GPT-4", "Trello API", "Python", "NLP", "Audio Processing"],
      github: "#",
      demo: "#",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "EV Route Optimization with Memetic Algorithm",
      date: "April 2025",
      icon: <Zap className="w-8 h-8" />,
      description: "Developed an AI model for optimizing electric vehicle routes using advanced memetic algorithms for efficient path planning.",
      highlights: [
        "Implemented memetic algorithm for EV route optimization",
        "Generated and represented EV route nodes as graph networks",
        "Designed fitness function for route evaluation based on reachability",
        "Achieved iterative refinement and convergence for optimal solutions"
      ],
      technologies: ["Python", "Graph Theory", "Genetic Algorithms", "Optimization", "Machine Learning", "Data Structures"],
      github: "#",
      demo: "#",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions combining AI, robotics, and cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50 hover:scale-105 group`}>
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} border ${project.borderColor}`}>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="pt-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 6).map((tech, i) => (
                        <span key={i} className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="bg-slate-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-6 pt-4 border-t border-slate-700">
                  <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </button>
                  {project.youtube && (
                    <button className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Video</span>
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;