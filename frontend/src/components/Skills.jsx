import React from 'react';
import { Code2, Database, Cloud, Cpu, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Python", "Java", "C++", "JavaScript", "SQL", "HTML/CSS"],
      color: "blue"
    },
    {
      title: "AI/ML & Data",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["OpenAI APIs", "YOLOv8", "TensorRT", "Vertex AI", "Gemini", "Computer Vision", "NLP", "Machine Learning"],
      color: "purple"
    },
    {
      title: "Backend & Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Node.js", "FastAPI", ".NET", "PHP"],
      color: "green"
    },
    {
      title: "Frontend & Frameworks",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["React.js", "Angular", "Bootstrap", "Streamlit", "Responsive Design"],
      color: "cyan"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["GCP", "AWS", "Apache Beam", "BigQuery", "Docker", "Git", "Swagger"],
      color: "indigo"
    },
    {
      title: "Hardware & IoT",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Jetson Nano", "Intel RealSense", "MAVLink", "ONNX", "Edge Computing", "Robotics"],
      color: "red"
    }
  ];

  const certifications = [
    "Prompt Design in Vertex AI",
    "Build Real World AI Applications with Gemini and Imagen"
  ];

  const softSkills = [
    "Project Management",
    "Leadership",
    "Technical Writing",
    "Teamwork",
    "Problem Solving",
    "Creative Thinking"
  ];

  const colorMap = {
    blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-300",
    purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-300",
    green: "from-green-500/20 to-green-600/20 border-green-500/30 text-green-300",
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-300",
    indigo: "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 text-indigo-300",
    red: "from-red-500/20 to-red-600/20 border-red-500/30 text-red-300"
  };

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className={`inline-flex items-center space-x-3 mb-4 p-3 rounded-lg bg-gradient-to-r ${colorMap[category.color]} border`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-md text-sm hover:bg-slate-600 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Certifications</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;