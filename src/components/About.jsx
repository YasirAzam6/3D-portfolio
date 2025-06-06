import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        
        Welcome to my digital world! I specialize in creating smart solutions using Python and cutting-edge technologies, focusing on large language models (LLMs), and other backend applications supported by the APIs using FastAPI and Django. I can efficiently create the efficient backend/full-stack solutions with collaborative environments since teamwork is where I excel!
        <br></br>
        <br></br>

My educational journey blends an AI and computer science Bachelor's degree from Ripha International University with hands-on projects and certifications. Tech tools like LangChain, TensorFlow, FastAPI, Django, Pandas, matplotlib, NumPy, SQL, vectordatabases, and streamlit are my trusted companions.
<br></br>
<br></br>

Beyond development, I excel in deploying applications on GCP, Azure, AWS, and crafting Restful APIs and Websockets. Git ensures smooth collaboration through version control and continuous development.
<br></br>
<br></br>

In machine learning, deep learning, and LLM, I specialize in fine-tuning models on custom datasets and leverage transfer learning for tailored behaviors. Proficient in SQL and vector databases, I approach data-driven solutions holistically. Community service and mentorship are integral to my ethos, creating an environment for shared learning and growth. I'm more than a developer; a problem solver, community enthusiast, and a perpetual learner, ready to contribute to your journey of success!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
