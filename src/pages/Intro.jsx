import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import TypeIt from "typeit-react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import 'hover.css/css/hover.css';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Intro = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const backgroundRef = useRef(null);
  const btnRef = useRef(null);
  const bounceRef = useRef();
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: false });
  const controls = useAnimation();

  // Scroll to Projects
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Init Particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: false,
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#3B8AF6",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.6,
        random: false,
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      links: {
        enable: true,
        distance: 130,
        color: "#3B8AF6",
        opacity: 0.3,
        width: 1,
      },
    },
    detectRetina: true,
  };
  
  

  // Bounce text animation
  useEffect(() => {
    const letters = bounceRef.current.querySelectorAll("span");
    letters.forEach((letter, i) => {
      gsap.to(letter, {
        y: -10,
        duration: 0.5,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true,
        delay: i * 0.1,
      });
    });
  }, []);

  // Background shapes animation
 

  // Fade-up animation on scroll
  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.4 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.8, ease: "easeOut" } },
  };

  const introText = "Hi, I'm Muhammad Umar";
  const words = introText.split(" ");

  return (
    <header
    id="intro"
    className="relative w-full min-h-screen flex flex-col md:flex-row flex-wrap items-center justify-between px-4 sm:px-6 md:px-16 bg-slate-900 text-slate-100 overflow-hidden z-10"
  >
    {/* Particle background */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 -z-10 pointer-events-none"
    >
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
    </motion.div>
  
    {/* Main Content */}
    <div
      ref={contentRef}
      className="w-full mt-8 md:w-1/2 max-w-full break-words text-center md:text-left space-y-6 z-10"
    >
      {/* Animated heading */}
      <motion.h1
        ref={bounceRef}
        className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight break-words"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        {words.map((word, i) => (
          <span key={i} style={{ marginRight: "12px", display: "inline-block" }}>
            {word.split("").map((char, j) => (
              <span key={j} style={{ display: "inline-block" }}>{char}</span>
            ))}
          </span>
        ))}
      </motion.h1>
  
      {/* Typing subtitle */}
      <h2 className="text-xl md:text-3xl font-semibold text-sky-400">
        <TypeIt
          options={{
            strings: [
              "Frontend Developer.",
              "React/Next Enthusiast ⚛️",
              "I craft beautiful UIs.",
            ],
            speed: 100,
            deleteSpeed: 50,
            nextStringDelay: 1000,
            breakLines: false,
            loop: true,
          }}
        />
      </h2>
  
      {/* Description */}
      <motion.p
        className="text-slate-400 text-lg max-w-md mx-auto md:mx-0"
        variants={fadeUp}
        initial="hidden"
        animate={controls}
      >
        I design and develop modern, responsive user interfaces using React and Next.js. I specialize
        in integrating APIs and bringing creativity to life with smooth, engaging animations. Clean
        code, modern UI/UX, and performance-focused development are at the core of my work.
      </motion.p>
  
      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4  justify-center md:justify-start"
        variants={buttonVariant}
        initial="hidden"
        animate={controls}
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.9, rotate: -1 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={handleScrollToProjects}
          className="hvr-buzz-out px-6 py-2 mb-4 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-lg shadow hover:shadow-lg"
          ref={btnRef}
        >
          View Work
        </motion.button>
  
        <a
          href="/umer-cv (1).docx"
          download="Umar_Resume.docx"
          className="hvr-bounce-to-right px-6 mb-4 py-2 border-2 border-sky-400 text-sky-400 font-semibold rounded-lg"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  </header>
  
  );
};

export default Intro;



/*

\documentclass[a4paper,10pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{lmodern}
\usepackage{geometry}
\usepackage{xcolor}
\usepackage{hyperref}
\usepackage{titlesec}
\usepackage{enumitem}
\geometry{margin=1in}
\hypersetup{
  pdfinfo={
    Title={Blue Neutral Simple Minimalist Professional Web Developer Resume},
    Author={Muhammad Umar},
    Keywords={DAGknJe2HYc,BAEOl4lI7B8,01},
    Creator={Canva (Renderer)},
    Producer={Canva (Renderer)},
    CreationDate={D:20250714065944+00'00'}
  }
}
\titleformat{\section}{\large\bfseries\color{blue!70}}{}{0em}{}[\titlerule]
\setlist[itemize]{leftmargin=*,itemsep=0pt,topsep=2pt}
\pagestyle{empty}
\begin{document}
\begin{center}
  {\Huge \textbf{Muhammad Umar}} \\
  \vspace{0.1cm}
  Software Developer \\
  \vspace{0.1cm}
  \href{mailto:umer62490@gmail.com}{umer62490@gmail.com} | +923322845831 | \href{https://www.linkedin.com/in/yourprofile}{https://www.linkedin.com/in/muhammad-umar-2296362a6?originalSubdomain=pk}
\end{center}
\vspace*{0.1cm}

\section*{Professional Summary}
Solution-oriented and problem solver with six months of experience building and maintaining software and software architecture. Highly skilled in communication, collaboration, and technical documentation.
\vspace*{0.1cm}

\section*{Work Experience}
\textbf{Frontend Developer} \\
\textit{Kdys Lab}, Remote \hfill {13 May 2025 -- 13 Jul 2025}
\begin{itemize}
  \item Worked on modern UI/UX designs and integrated chatbot APIs using React, Next.js, and TypeScript. Implemented animations with Three.js, Framer Motion, and GSAP for enhanced interactivity.
\end{itemize}
\vspace*{0.1cm}

\textbf{Frontend Developer} \\
\textit{Integration Xperts}, Remote \hfill {10 Sep 2024 -- 10 Dec 2024}
\begin{itemize}
  \item Built projects like a Kanban board, To-Do List, and Weather App during a 3-month React internship, focusing on API integration, Context API, and Redux. Implemented infinite scroll and pagination. Contributed to an E-commerce site, enhancing UI/UX and cart functionality with JSON integration.
\end{itemize}
\vspace*{0.1cm}

\textbf{Networking} \\
\textit{National Telecommunication Corporation}, Location \hfill {25 Mar 2023 -- May 2023}
\begin{itemize}
  \item Studied network topologies, data-center operations, transmission, and switching systems.
\end{itemize}
\vspace*{0.1cm}

\section*{Relevant Projects}
\textbf{Point Tracking System} \hfill {20 Jul 2023 -- 20 Jul 2024} \\
\textit{Final Year Project}
\begin{itemize}
  \item Developed a mobile application using Flutter with Firebase for real-time data handling and integration. Utilized Raspberry Pi for tracking purposes.
\end{itemize}
\vspace*{0.1cm}

\textbf{E-commerce Website} \hfill {1 Mar 2025 -- Present} \\
\textit{Web Development Project}
\begin{itemize}
  \item Created a medical website for online medicine ordering using React, Next.js, and TypeScript.
  \item Implemented features like an AI chatbot, WebChat interface, E-commerce shoes site, and a KDYS dashboard replica, with live designs.
\end{itemize}
\vspace*{0.1cm}

\section*{Education}
\textbf{Bachelor of Science in Computer Science} \hfill {2020 -- 2024} \\
\textit{NED University}, Karachi, Pakistan
\vspace*{0.1cm}

\section*{Skills}
\begin{itemize}
  \item Proficient in React, Next.js, JavaScript, HTML, CSS, TypeScript
  \item Experienced with animation libraries (GSAP, Framer Motion, Three.js)
  \item Knowledge of UI/UX design principles, responsive design, and API integration
  \item Skilled in code structure, architecture, and version control with Git and GitHub
\end{itemize}

\end{document}


*/