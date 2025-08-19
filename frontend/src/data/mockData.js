// Mock data file for portfolio - this will be replaced with backend integration later

export const mockPortfolioData = {
  personal: {
    name: "Sriyaa",
    title: "AI & Robotics Engineer",
    tagline: "AI & Robotics Engineer crafting intelligent solutions with code, creativity, and cutting-edge technology",
    email: "sriyaa.connect@gmail.com",
    phone: "+91 XXXXX XXXXX",
    location: "Chennai, Tamil Nadu, India",
    profileSummary: `Dedicated and proactive final-year student pursuing BTech in Computer Science with specialization in 
    Artificial Intelligence and Robotics at VIT Chennai. Strong in problem-solving and creative thinking, I'm passionate about database and 
    backend development. My experience spans from building AI-integrated data pipelines at Ford to developing full-stack ERP systems. 
    I thrive on applying academic knowledge in professional environments and contributing to impactful projects 
    that push the boundaries of technology.`
  },

  education: {
    degree: "BTech - Computer Science with AI & Robotics",
    university: "Vellore Institute of Technology, Chennai",
    period: "September 2022 – June 2026",
    cgpa: "8.67",
    achievements: {
      grade12: "94%",
      grade10: "96%",
      school: "Kendriya Vidyalaya AFS No.1"
    }
  },

  experience: [
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
  ],

  projects: [
    {
      title: "Person-Following Drone SITL System",
      date: "January 2025",
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
      category: "robotics"
    },
    {
      title: "AI Meeting Assistant",
      date: "March 2025",
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
      category: "ai"
    },
    {
      title: "EV Route Optimization with Memetic Algorithm",
      date: "April 2025",
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
      category: "ai"
    }
  ],

  skills: {
    programming: ["Python", "Java", "C++", "JavaScript", "SQL", "HTML/CSS"],
    aiml: ["OpenAI APIs", "YOLOv8", "TensorRT", "Vertex AI", "Gemini", "Computer Vision", "NLP", "Machine Learning"],
    backend: ["MongoDB", "PostgreSQL", "MySQL", "Node.js", "FastAPI", ".NET", "PHP"],
    frontend: ["React.js", "Angular", "Bootstrap", "Streamlit", "Responsive Design"],
    cloud: ["GCP", "AWS", "Apache Beam", "BigQuery", "Docker", "Git", "Swagger"],
    hardware: ["Jetson Nano", "Intel RealSense", "MAVLink", "ONNX", "Edge Computing", "Robotics"],
    certifications: [
      "Prompt Design in Vertex AI",
      "Build Real World AI Applications with Gemini and Imagen"
    ],
    softSkills: [
      "Project Management",
      "Leadership", 
      "Technical Writing",
      "Teamwork",
      "Problem Solving",
      "Creative Thinking"
    ]
  },

  social: {
    github: "#",
    linkedin: "#",
    twitter: "#"
  }
};

// Helper function to get mock data
export const getMockData = (section) => {
  return mockPortfolioData[section] || null;
};

// Example usage in components:
// import { getMockData } from '../data/mockData';
// const personalData = getMockData('personal');