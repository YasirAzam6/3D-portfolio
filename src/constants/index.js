import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  cg_pic,
  cg_round,
  cg_roundd,
  tesla,
  pearls_logo,
  shopify,
  carrent,
  HDC,
  finance,
  jobit,
  CrewPic,
  tripguide,
  doc,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "LLM-Powered Solutions ",
    icon: web,
  },
  {
    title: "Auto Agents",
    icon: mobile,
  },
  {
    title: "AI-Driven Analytics & Dashboards",
    icon: backend,
  },
  {
    title: "RAG Pipelines & Contextual Retrieval",
    icon: creator,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI Engineer",
    company_name: "CyberGen",
    icon: cg_roundd,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Developed AI-driven automation tools, streamlining workflows across multiple departments and reducing operational costs by 50%.",
      "Fine-tuned and deployed Large Language Models (LLMs) for domain-specific applications, enhancing decision making and improving response accuracy by 35%.",
      "Led the integration of Computer Vision models for real-time object detection and image classification, automating quality control and minimizing human errors.",
      "Implemented AI-powered cybersecurity solutions, leveraging anomaly detection models to proactively identify threats and reduce security breach response time by 40%",
    ],
  },
  {
    title: "Associate AI Engineer",
    company_name: "10Pearls",
    icon: pearls_logo,
    iconBg: "#E6DEDD",
    date: "July 2022 - June 2024",
    points: [
      "Built AI-powered chatbots and virtual assistants, enabling businesses to automate customer interactions, reduce response time by 40%, and improve engagement.",
      "Developed OCR-based Computer Vision applications, automating document processing and increasing data extraction accuracy by 45%, reducing manual workload.",
      "Designed predictive analytics models for finance and sales, forecasting trends with high accuracy and reducing manual reporting efforts by 50%.",
      "Implemented AI-powered fraud detection, leveraging machine learning algorithms to analyze transactions and identify fraudulent activity with 90% accuracy. ",
    ],
  },
  {
    title: "Python Developer",
    company_name: "AARSOL (Pvt) Ltd ",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2021 - May 2022",
    points: [
      "Designed and developed custom ERP modules, tailoring Odoo solutions to optimize business processes ",
      "Provided ongoing technical support and system maintenance, troubleshooting issues, deploying updates, and ensuring seamless ERP functionality. ",
      " Engineered scalable and efficient enterprise solutions, leveraging Python, Odoo frameworks, and PostgreSQL to enhance system performance and reliability. ",
    ],
  },
  
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "Heart Disease Classification Using Machine Learning",
    description:
      "Heart disease classification is a critical application of machine learning in the healthcare industry. This project focuses on optimizing multiple machine learning models to classify the presence of heart disease. The dataset used includes various health metrics such as age, sex, cholesterol levels, and more. The performance of different models is evaluated based on accuracy, both on cross-validation and test data.",
    tags: [
      { name: "AIinHealthcare", color: "blue-text-gradient" },
      { name: "MachineLearning", color: "green-text-gradient" },
      { name: "DataScience", color: "orange-text-gradient" },
      { name: "ModelEvaluation", color: "red-text-gradient" },
    ],
    image: HDC,
    source_code_link: "https://github.com/YasirAzam6/Heart-Disease-Classification-Using-Machine-Learning",
  },
  {
    name: "CrewContentGeneration",
    description:
      "The Automated Blog Generator using CrewAI is a Python-based project that uses AI agents to create a complete blog post—from research to editing. Powered by the CrewAI framework, DuckDuckGo API, and OpenAI, it automates topic research, content planning, writing, and editing in a logical sequence, delivering a polished blog post in Markdown format.",
    tags: [
      { name: "AIContentCreation", color: "blue-text-gradient" },
      { name: "ContentAutomation", color: "green-text-gradient" },
      { name: "AIAgents", color: "pink-text-gradient" },
    ],
    image: CrewPic,
    source_code_link: "https://github.com/YasirAzam6/CrewContentGeneration",
  },
  {
    name: "AI Doctor with Vision Voice Capabilities",
    description:
      "Meet your AI-powered medical assistant that listens to patient concerns, analyzes medical images, and provides natural, spoken doctor-like diagnoses. Combining state-of-the-art models for speech recognition, image understanding, and realistic voice synthesis, all within a sleek Gradio interface — this app makes medical AI accessible and interactive.",
    tags: [
      { name: "ImageAnalysis", color: "blue-text-gradient" },
      { name: "VisionLanguageModel", color: "green-text-gradient" },
      { name: "VoiceAssistant", color: "pink-text-gradient" },
    ],
    image: doc,
    source_code_link: "https://github.com/YasirAzam6/AI-Doctor-with-Vision-Voice-capabilities",
  },
  
];


const testimonials = [
  {
    testimonial:
      "I thought leveraging AI for our operations would be overwhelming, but Yasir and his team made it seamless and impactful.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never worked with an AI solutions provider who truly prioritizes client outcomes like Yasir does. Their insights transformed our decision-making..",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Yasir implemented their AI-driven analytics platform, we saw a 50% increase in operational efficiency. We couldn’t be more grateful!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  }, 
];

// const projects = [
//   {
//     name: "Heart Disease Classification Using Machine Learning",
//     description:
//       "Heart disease classification is a critical application of machine learning in the healthcare industry. This project focuses on optimizing multiple machine learning models to classify the presence of heart disease. The dataset used includes various health metrics such as age, sex, cholesterol levels, and more. The performance of different models is evaluated based on accuracy, both on cross-validation and test data.",
//     tags: [
//       {
//         name: "AIinHealthcare",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "MachineLearning",
//         color: "green-text-gradient",
//       },
//       {
//         name: "DataScience",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "ModelEvaluation",
//         color: "red-text-gradient",
//       },
//     ],
//     image: HDC,
//     source_code_link: "https://github.com/YasirAzam6/Heart-Disease-Classification-Using-Machine-Learning",
//   },

//   {
//     name: "CrewContentGeneration",
//     description:
//       "The Automated Blog Generator using CrewAI is a Python-based project that uses AI agents to create a complete blog post—from research to editing. Powered by the CrewAI framework, DuckDuckGo API, and OpenAI, it automates topic research, content planning, writing, and editing in a logical sequence, delivering a polished blog post in Markdown format.",
//     tags: [
//       {
//         name: "AIContentCreation",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "ContentAutomation",
//         color: "green-text-gradient",
//       },
//       {
//         name: "AIAgents",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: CrewPic,
//     source_code_link: "https://github.com/YasirAzam6/CrewContentGeneration",
//   },
//   {
//     name: "AI Doctor with Vision Voice Capabilities",
//     description:
//       "Meet your AI-powered medical assistant that listens to patient concerns, analyzes medical images, and provides natural, spoken doctor-like diagnoses. Combining state-of-the-art models for speech recognition, image understanding, and realistic voice synthesis, all within a sleek Gradio interface — this app makes medical AI accessible and interactive.",
//     tags: [
//       {
//         name: "ImageAnalysis",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "VisionLanguageModel",
//         color: "green-text-gradient",
//       },
//       {
//         name: "VoiceAssistant",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: doc,
//     source_code_link: "https://github.com/YasirAzam6/AI-Doctor-with-Vision-Voice-capabilities",
//   },
// ];


export { services, technologies, experiences, testimonials, projects};
