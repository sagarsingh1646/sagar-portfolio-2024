import React from 'react';
import { motion } from 'framer-motion';
import work_icon from "../assets/work-icon.png";

export default function IntroBody() {
  return (
    <div className="bg-neutral-900 h-2/3 pb-20">
      <div className="ml-6 pt-32 md:ml-20">
        <div className="bg-neutral-800 border border-green-500 rounded-md text-green-500 w-36 md:w-40">
          <p className="text-xs text-wrap p-1">Open for opportunities</p>
        </div>
        <div className="w-10/12 mt-2 md:mt-3 md:w-3/5">
          <p className="text-4xl md:text-5xl tracking-base text-white font-epilogue leading-snug font-light md:leading-normal">
            <span>{`I'm a CS engineer passionate about `}</span>
            <span className="italic">System Design, Operating Systems, Databases & Algorithms.</span>
          </p>
        </div>
        <motion.div 
          className="flex text-white mt-6"
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1 }}>
          <img className="w-6 h-6 md:w-8 md:h-8" alt="work-icon" src={work_icon}></img>
          <p className="pl-3 self-center text-sm md:text-base">
            <span>Currently working at </span>
            <a href="https://www.tatatechnologies.com/in" target="_blank" rel="noopener noreferrer">
              <span className="underline">TATA Technologies</span>
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );

}
