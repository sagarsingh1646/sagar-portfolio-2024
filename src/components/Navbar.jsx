import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profilePhoto from "/profile_photo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 20,
      damping: 5,
      staggerChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      type: 'spring',
      stiffness: 400, //for slower closing
      damping: 50, // for smoother closing
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};


  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 20,
        damping: 5,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: 'spring',
        stiffness: 20,
        damping: 5,
      },
    },
  };

  const iconVariants = {
    open: {
      rotate: 45,
      transition: {
        type: 'spring',
        stiffness: 20,
        damping: 5,
      },
    },
    closed: {
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 20,
        damping: 5,
      },
    },
  };

  return (
    <nav className="bg-neutral-900 text-white font-sans">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-6 md:py-6">
        <div className="flex items-center md:ml-14">
          <div className="self-center py-1 overflow-hidden rounded-full h-9 w-9">
            <img
              alt="profile-photo"
              className="transform scale-150"
              src={profilePhoto}
            />
          </div>
          <div className="ml-4 font-light tracking-wider text-xl md:text-2xl self-center">
            <p>
              <a href="/" rel="noopener noreferrer">
                <span>Sagar Singh</span>
              </a>
            </p>
          </div>
        </div>
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu} 
            className="focus:outline-none"
            animate={isOpen ? "open" : "closed"}
            variants={iconVariants}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </motion.button>
        </div>
        <motion.div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="flex flex-col justify-center items-center pt-8 font-semibold md:flex-row space-y-4 md:space-y-0 md:space-x-8 md:mr-10 text-base md:text-lg">
            <motion.a
              href="#about"
              className="block md:inline-block"
              variants={itemVariants}
            >
              About
            </motion.a>
            <motion.a
              href="#resume"
              className="block md:inline-block"
              variants={itemVariants}
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
