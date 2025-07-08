import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Replace these with your actual image imports
import HDC from "../assets/HDC.jpg";
import CrewPic from "../assets/CrewPic.jpg";
import doc from "../assets/doc.png";
import finance from "../assets/finance.jpg";
import autodev from "../assets/autodev.jpg";
import picc from "../assets/picc.png";
const sliderProjects  = [

  {
    name: "StockMind - AI Stock Market Prediction",
    description:
      "StockMind is an AI-driven stock market prediction app that uses advanced machine learning techniques to analyze historical stock data and predict future trends. It features a user-friendly interface for real-time stock analysis, portfolio management, and personalized investment recommendations.",
    tags: [
      { name: "AITrading", color: "blue-text-gradient" },
      { name: "NLPFinance", color: "green-text-gradient" },
      { name: "MachineLearningStocks", color: "pink-text-gradient" },
    ],
    image: finance,
    source_code_link: "https://github.com/YasirAzam6/StockMind-AI",
  },

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
    name: "Khulasah Arabic PDF Summarization Engine",
    description:
      "Khulasah is an Arabic-language document summarization tool that extracts text from Arabic PDFs and generates concise summaries using transformer-based large language models. It is optimized for native Arabic input and designed to work directly with Hugging Face’s hosted inference API—no GPU setup or model downloads required.",
    tags: [
      { name: "Arabic-NLP", color: "blue-text-gradient" },
      { name: "Model Training", color: "green-text-gradient" },
      { name: "TextSummarization", color: "orange-text-gradient" },
      { name: "ModelEvaluation", color: "red-text-gradient" },
    ],
    image: picc,
    source_code_link: "https://github.com/YasirAzam6/-Khulasah-Arabic-PDF-Summarization-Engine",
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

  {
    name: "AutoDev – The AI Developer That Codes, Learns, and Collaborates.",
    description:
    "AutoDev is an agentic AI software engineer that understands high-level instructions, plans intelligently, and autonomously writes and manages code across projects. Powered by advanced LLMs, AutoDev can research, reason, code, and interact—making it your ultimate AI pair programmer.",
    tags: [
      { name: "#AIinDevelopment", color: "blue-text-gradient" },
      { name: "DevTools", color: "green-text-gradient" },
      { name: "PromptEngineering", color: "pink-text-gradient" },
    ],
    image: autodev,
    source_code_link: "https://github.com/YasirAzam6/AI-Doctor-with-Vision-Voice-capabilities",
  },

];

const ProjectSlider = () => {
  return (
    <div className="w-full py-10 min-h-[500px]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation
        style={{ height: '100%' }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {sliderProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1e1e2f] p-4 rounded-lg shadow-md h-full flex flex-col">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-sm text-gray-300 flex-grow">{project.description}</p>
              <div className="flex flex-wrap mt-3 gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className={`text-xs ${tag.color}`}>#{tag.name}</span>
                ))}
              </div>
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-400 hover:underline text-sm"
              >
                View Code
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
