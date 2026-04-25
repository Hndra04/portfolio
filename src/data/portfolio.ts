export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  descriptions: string[];
}

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  location: string;
  period: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags?: { name: string; color: string }[];
  link?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  linkedin: string;
  formspreeId: string;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: SkillCategory[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Hendra Putra",
  title: "AI and Backend Engineer",
  linkedin: "https://www.linkedin.com/in/hendra-putra-897504295/",
  formspreeId: import.meta.env.VITE_FORMSPREE_ID,
  summary:
    "An AI and Backend Engineer skilled in developing intelligent systems and scalable backend solutions. Experienced in building end-to-end machine learning pipelines, deep learning, natural language processing, and computer vision. Proficient in API development and cloud-based systems, with a strong grasp of clean architecture and system optimization, focusing on modern AI techniques for efficient solutions.",
  education: [
    {
      institution: "Bina Nusantara University",
      degree: "Bachelor of Computer Science",
      gpa: "3.69 / 4.0",
      location: "Tangerang, Banten",
      period: "Sept, 2022 - Present",
    },
  ],
  experience: [
    {
      company: "Mekar Investama Teknologi",
      position: "AI and Backend Engineer",
      location: "Jakarta Selatan, DKI Jakarta",
      period: "Feb 2026 - Present",
      descriptions: [
        "Design and develop AI-powered features, including generative AI integration and Retrieval-Augmented Generation (RAG) using n8n.",
        "Build and maintain scalable backend systems and APIs with focus on clean architecture, security, and performance optimization.",
        "Conducted research on AI models (e.g., fine-tuning, pretrained models) to implement pipelines and automation workflows to support services and improving efficiency.",
      ],
    },
    {
      company: "Mekar Investama Teknologi",
      position: "Research and Development AI Intern",
      location: "Jakarta Selatan, DKI Jakarta",
      period: "Feb 2025 - Feb 2026",
      descriptions: [
        "Developed OCR-based pipelines for document processing (e.g., KTP/NPWP) including preprocessing, text extraction, and post-processing.",
        "Assisted in building backend APIs and integrating AI models into internal systems and workflows.",
        "Conducted research on AI models (e.g., fine-tuning, pretrained models) to improve accuracy and support system development.",
      ],
    },
    {
      company: "GDSC",
      position: "Machine Learning Path",
      location: "",
      period: "Oct 2023 - Jul 2024",
      descriptions: [
        "Completed tasks as part of the Google Developer Student Clubs (GDSC) Machine Learning path.",
        "Covered a variety of machine learning applications, from image classification to natural language processing.",
        "Conducted research on AI techniques and implementations.",
      ],
    },
  ],
  skills: [
    {
      name: "Programming",
      skills: ["Python", "SQL"],
    },
    {
      name: "Machine Learning & AI",
      skills: [
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Generative AI",
        "RAG",
      ],
    },
    {
      name: "Backend Development",
      skills: ["FastAPI", "Django API"],
    },
    {
      name: "Data Processing",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Data Preprocessing",
        "Feature Engineering",
      ],
    },
  ],
  projects: [
    {
      title: "Narrative Nest",
      description:
        "An app designed to make the process of creating storyboards easier and faster. Users can prompt an AI to generate storyboard frames using SDXL Lightning API.",
      tags: [
        { name: "React", color: "blue" },
        { name: "Tailwind", color: "pink" },
      ],
      link: "https://github.com/HanCreation/narrative-nest",
    },
    {
      title: "Diabetest",
      description:
        "An app designed for predicting diabetes using few parameters to help diagnose diabetes probability quickly and easily using Machine Learning model.",
      tags: [
        { name: "HTML", color: "purple" },
        { name: "Python", color: "yellow" },
        { name: "CSS", color: "green" },
      ],
      link: "https://github.com/Hndra04/Diabetest",
    },
    {
      title: "Music Genre Classification",
      description:
        "This model is designed for classifying music genre using features from the music dataset like MFCC, spectral bandwidth, chroma STFT, etc.",
      tags: [{ name: "Python", color: "yellow" }],
      link: "https://github.com/Hndra04/MusicGenreClassification",
    },
    {
      title: "Multi-label Image Classification",
      description:
        "This model is designed for predicting color and type of shirt from images by extracting features. This model uses CNN and VGG-16 architecture.",
      tags: [{ name: "Python", color: "yellow" }],
      link: "https://github.com/Hndra04/CompetitionHology7.0",
    },
    {
      title: "BeatBuddy",
      description:
        "BeatBuddy is a music recommender system made with React & Flask. The front-end made with React accepts user's request and forwards it to the server managed by Flask containing the machine learning model.",
      tags: [{ name: "Python", color: "yellow" }],
      link: "https://github.com/dewennn/BeatBuddy",
    },
    {
      title: "OCR KTP & NPWP",
      tags: [{ name: "Python", color: "yellow" }],
      description:
        "Developed OCR pipelines for Indonesian documents using PyTesseract, PaddleOCR, and EasyOCR for structured data extraction.",
    },
    {
      title: "Generative AI & RAG System",
      tags: [{ name: "Python", color: "yellow" }],
      description:
        "Built LLM-based solutions with Retrieval-Augmented Generation (RAG) to improve response accuracy for real-world queries.",
    },
    {
      title: "Brain Tumors Prediction from MRI using LMFRNet",
      description:
        "This project looks into the use of Wan and Yao's lightweight image classification model, LMFRNet, for brain tumor classification using magnetic resonance imaging (MRI).",
      tags: [{ name: "Python", color: "yellow" }],
    },
    {
      title: "SQL Query Generator Chatbot",
      tags: [{ name: "Python", color: "yellow" }],
      description:
        "Developed an LLM-based chatbot to convert natural language into SQL queries for data retrieval.",
    },
    {
      title: "Research Paper – Fraud Detection",
      tags: [{ name: "Python", color: "yellow" }],
      description:
        "Proposed a GAN-based sequential oversampling approach with continual learning for fraud detection in imbalanced data streams.",
    },
  ],
};
