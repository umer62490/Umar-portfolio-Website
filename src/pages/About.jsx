import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useInView } from "react-intersection-observer";
import UmarImage from '../assets/images/umar-portfolio-final.png';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const About = () => {
  const contentRef = useRef(null);
  const textRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false }); // Repeat on scroll back

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Heading animation from bottom with scale
  useEffect(() => {
    const text = textRef.current;
    const characters = text.textContent.split('');

    text.textContent = ''; // Clear original

    characters.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.position = 'relative';
      span.style.fontSize = '4rem'; // Keep font size large
      span.style.transformOrigin = 'bottom';
      text.appendChild(span);
    });

    gsap.fromTo(
      text.children,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.05,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 85%',
          toggleActions: 'restart none none none', // Animate every time in view
        },
      }
    );
  }, []);

  return (
    <section className='about flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 mt-[17vw] overflow-x-hidden'>
      {/* Left: Image (optional) */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        {/* <motion.img
          src={UmarImage}
          alt="Umar"
          style={{ y }}
          className="w-72 md:w-96 rounded-2xl shadow-lg"
        /> */}
      </div>

      {/* Right: Content */}
      <div className='w-full md:w-1/2 md:order-2'>
        {/* Animated Heading */}
        <h1 ref={textRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-black mb-6">
          About&nbsp;Me
        </h1>

        {/* Animated Paragraphs */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="text-lg leading-relaxed text-gray-700 mb-4"
          >
            I’m Muhammad Umar, graduated from NED University — a passionate
            Frontend Developer with a strong command over React.js, JavaScript, and
            modern web technologies. My journey started with curiosity and a love
            for design, which gradually turned into a full-fledged development
            career.
          </motion.p>

          <motion.p
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="text-lg leading-relaxed text-gray-700"
          >
            I'm well-versed in tools and libraries like Tailwind CSS, GSAP, Framer
            Motion etc. My strength lies in creating interactive UIs, clean code,
            and responsive layouts — making the web more beautiful, one component at
            a time.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
