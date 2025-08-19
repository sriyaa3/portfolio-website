import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Data Ingestion Intern",
      company: "Ford Business Solutions India",
      period: "April - June 2025",
      location: "Chennai, India",
      type: "Internship",
      description: "Built a PoC integrating AI into a real-time cloud data pipeline using GCP technologies to optimize data ingestion processes.",
      achievements: [
        "Built AI-integrated cloud data pipeline (GCP Pub/Sub, Apache Beam, Dataflow, BigQuery)",
        "Implemented 8 core business rules in PostgreSQL with Beam functions",
        "Improved data acceptance into BigQuery by leveraging AI for dynamic decision-making",
        "Optimized real-time data streaming and processing workflows"
      ],
      technologies: ["GCP", "Apache Beam", "BigQuery", "PostgreSQL", "Python", "AI/ML"]
    },
    {
      title: "Software Development Engineer Intern",
      company: "Nicola Foundation",
      period: "December 2024 - March 2025",
      location: "Remote",
      type: "Internship",
      description: "Contributed to full-stack development of a custom ERP system for an educational institution with comprehensive modules.",
      achievements: [
        "Designed backend logic and MySQL schemas for educational ERP system",
        "Implemented key modules: Student, Employee, and Admin management",
        "Developed responsive frontend components using Angular",
        "Integrated RESTful APIs documented via Swagger",
        "Used Git for version control following SDLC practices"
      ],
      technologies: ["Angular", ".NET", "PHP", "MySQL", "HTML/CSS", "Swagger", "Git", "AWS"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hands-on experience building scalable solutions and AI-driven applications
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Company Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Building className="w-6 h-6 text-blue-400" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {exp.type}
                    </span>
                  </div>

                  {/* Middle Column - Description & Achievements */}
                  <div className="md:col-span-2 space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-md text-sm hover:bg-slate-600 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;