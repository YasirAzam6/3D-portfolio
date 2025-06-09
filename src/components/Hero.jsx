import { motion } from "framer-motion";
import header from "../assets/header.jpeg";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

       <div className="flex items-center gap-4">
  
  <div className="flex items-center justify-between gap-4">
  <div>
    <h1 className={`${styles.heroHeadText} text-white`}>
      Hi, I'm <span className='text-[#915EFF]'>Yasir Azam</span>
    </h1>
    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
      An AI Engineer building robust and innovative <br className='sm:block hidden' />
      AI solutions with Python for over 3 years.
    </p>
     
  </div>

  <img
    src={header}
    alt="Yasir Azam"
    className="w-36 h-36 rounded-full object-cover border-2 border-[#915EFF]"
  />
</div>

</div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
