import React from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import project_1 from "../assets/project_sample1.jpeg";

function FeaturedWork() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <motion.div 
      ref={ref} 
      initial="hidden" 
      animate={controls} 
      variants={fadeInUpVariants} 
      className="bg-white rounded-10xl mt-36"
    >
      <div className="pl-10 pr-10 md:pl-20 md:pr-20">
        <div className="pt-20 md:pt-28">
          <div className="text-3xl md:text-5xl font-semibold">
            <p>Featured Work</p>
          </div>
        </div>
        <div className="pt-10 md:pt-20 px-5 md:px-10 border-b-2 flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:py-14 md:w-5/12 md:pr-5">
            <div className="text-xl md:text-3xl font-semibold">
              <p>Project title | Short design description</p>
            </div>
            <div className="pt-3">
              <p>
                Creating an end-to-end solution for individuals to access and
                share healthcare data with caregivers seamlessly.
              </p>
            </div>
            <div className="pt-3">
              <button
                type="button"
                className="text-white bg-neutral-900 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                View live site
              </button>
            </div>
          </div>
          <div className="w-full md:w-96 pt-5 md:pt-0">
            <img src={project_1} className="w-full" alt="Project Sample 1" />
          </div>
        </div>
        <div className="pt-10 md:pt-20 px-5 md:px-10 flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:py-14 md:w-5/12 md:pr-5">
            <div className="text-xl md:text-3xl font-semibold">
              <p>Project title | Short design description</p>
            </div>
            <div className="pt-3">
              <p>
                Creating an end-to-end solution for individuals to access and
                share healthcare data with caregivers seamlessly.
              </p>
            </div>
            <div className="pt-3">
              <button
                type="button"
                className="text-white bg-neutral-900 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
              >
                View live site
              </button>
            </div>
          </div>
          <div className="w-full md:w-96 pt-5 md:pt-0">
            <img src={project_1} className="w-full" alt="Project Sample 1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedWork;
