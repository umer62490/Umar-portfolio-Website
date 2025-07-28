import React, { useEffect, useState, useRef } from 'react';
import Intro from './Intro';
import About from './About';
import TechSkills from './TechSkills';
import Projects from './Project';
import Contact from './Contact-Us';
import UmarImage from '../assets/images/umar-portfolio-final.png';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ExperienceEducation from './WorkExperienceAndEducation';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const { scrollY } = useScroll();
  const projectsRef = useRef(null);
  
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const x = useSpring(
    useTransform(scrollY, [0, 800, 1400], [1000, 0, 1000]),
    { stiffness: 60, damping: 18 }
  );
  
  const y = useSpring(
    useTransform(scrollY, [0, 2000], [0, 200]),
    { stiffness: 70, damping: 22 }
  );

  const opacity = useTransform(scrollY, [0, 1500, 1700], [1, 1, 0]);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorHovering, setIsCursorHovering] = useState(false);

  // 🔸 GSAP Scroll Animation for background glowing element
  

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden">


      {/* 🔆 Background Glowing Element (scroll animated) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
       
      </div>

      {/* Custom Cursor */}
      <motion.div
        className={`fixed w-full mr-10 z-[9999] pointer-events-none rounded-full transition-all duration-100 ease-out`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'gray',
          width: isCursorHovering ? '80px' : '80px',
          height: isCursorHovering ? '80px' : '80px',
          opacity: 0.7,
          mixBlendMode: 'difference',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating Animated Image */}
      <motion.img
        src={UmarImage}
        alt="Umar"
        style={{ x, y, opacity }}
        className="w-72 md:w-96 fixed top-32 z-20 pointer-events-none"
      />

      {/* Sections */}
      <Intro onViewWorkClick={scrollToProjects} />
      <About />
      <TechSkills />
      <ExperienceEducation />
      <Projects ref={projectsRef} />

      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
