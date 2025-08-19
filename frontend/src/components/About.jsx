import React from 'react';
import { GraduationCap, Award, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about leveraging AI and robotics to solve complex real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated final-year student pursuing BTech in Computer Science with specialization in 
              <span className="text-blue-400 font-semibold"> Artificial Intelligence and Robotics</span> at VIT Chennai. 
              With a strong foundation in problem-solving and creative thinking, I'm passionate about database and 
              backend development.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My experience spans from building AI-integrated data pipelines at Ford to developing full-stack ERP systems. 
              I thrive on applying academic knowledge in professional environments and contributing to impactful projects 
              that push the boundaries of technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg">AI/ML Engineer</span>
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg">Backend Developer</span>
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg">Robotics Enthusiast</span>
            </div>
          </div>

          {/* Right Column - Education & Stats */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-8 h-8 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                    <p className="text-blue-400 font-semibold">BTech - Computer Science with AI & Robotics</p>
                    <p className="text-gray-300">Vellore Institute of Technology, Chennai</p>
                    <p className="text-gray-400 text-sm">September 2022 – June 2026</p>
                    <p className="text-cyan-400 font-semibold mt-2">CGPA: 8.67</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Achievements</h3>
                    <p className="text-gray-300">12th Grade: <span className="text-green-400 font-semibold">94%</span></p>
                    <p className="text-gray-300">10th Grade: <span className="text-green-400 font-semibold">96%</span></p>
                    <p className="text-gray-400 text-sm mt-1">Kendriya Vidyalaya AFS No.1</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Objective</h3>
                    <p className="text-gray-300">
                      Seeking opportunities to apply academic knowledge in professional environments, 
                      develop new skills, and contribute to impactful AI and robotics projects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;