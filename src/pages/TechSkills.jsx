import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from 'react-icons/fa';
import {
  SiPostman,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiThreedotjs,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const TechSkills = () => {
  const textRef = useRef(null);
  const leftRef = useRef(null);

  // Animate heading letters
  useEffect(() => {
    const text = textRef.current;
    const characters = text.textContent.split('');
    text.textContent = '';

    characters.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.position = 'relative';
      span.style.fontSize = '4rem';
      text.appendChild(span);
    });

    gsap.fromTo(
      text.children,
      { opacity: 0, x: -50, scale: 1.5 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.2,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          toggleActions: 'restart none none none', // ✅ Repeats on scroll
        },
      }
    );
  }, []);

  // Animate left section
  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 85%',
          toggleActions: 'restart none none none', // ✅ Repeats on scroll
        },
      }
    );
  }, []);

  return (
    <section className='about flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-12 mt-[17vw]'>
      
      {/* 👈 Left Section: Tech Stack + Description */}
      <div ref={leftRef} className='w-full md:w-1/2 opacity-0'>
        <h1
          ref={textRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-black mb-20 text-left"
        >
          Tech&nbsp;Skills
        </h1>       

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-10 gap-y-12 text-5xl">
  {[
    { icon: <FaHtml5 className="text-orange-600" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS3" },
    { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
    { icon: <FaReact className="text-cyan-400" />, label: "React" },
    { icon: <TbBrandNextjs className="text-black" />, label: "Next.js" },
    { icon: <SiTailwindcss className="text-blue-400" />, label: "Tailwind" },
    { icon: <SiRedux className="text-purple-600" />, label: "Redux" },
    { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
    { icon: <SiGreensock className="text-green-500" />, label: "GSAP" },
    { icon: <SiFramer className="text-pink-500" />, label: "Framer Motion" },
    { icon: <SiThreedotjs className="text-gray-700" />, label: "Three.js" },
    { icon: <SiPostman className="text-orange-600" />, label: "Postman" },
    { icon: <FaGithub className="text-black" />, label: "GitHub" },
  ].map((tech, index) => (
    <div
      key={index}
      className="flex flex-col items-center group transition-all duration-300 transform hover:scale-110"
    >
      {tech.icon}
      <span className="text-sm mt-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">

        {tech.label}
      </span>
    </div>
  ))}
</div>

      </div>

      {/* 👉 Right Section (optional) */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        {/* Add image or other content here */}
      </div>
    </section>
  );
};

export default TechSkills;

