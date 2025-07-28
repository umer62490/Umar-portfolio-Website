// import React from 'react';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// const projects = [
//   {
//     title: "E-commerce Medical Store",
//     image: "/images/medical-store.png",
//     techStack: ["React", "Node.js", "MongoDB", "Tailwind", "JWT"],
//     description: "A full-stack medical store with category-based search, cart, orders, and admin dashboard.",
//     live: "https://medicalstore.live",
//     github: "https://github.com/username/medical-store"
//   },
//   {
//     title: "Bus Tracking App",
//     image: "/images/bus-tracker.png",
//     techStack: ["Flutter", "Firebase", "Google Maps API"],
//     description: "Real-time bus location tracking system with map view and ETA for users.",
//     live: "https://busapp.live",
//     github: "https://github.com/username/bus-tracker"
//   },
//   // Add more projects here...
// ];

// const Projects = () => {
//   return (
//     <section className="bg-[#0f172a] text-white py-16 px-4">
//       <h2 className="text-3xl font-bold text-center mb-12">🚀 Projects / Work</h2>
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {projects.map((project, idx) => (
//           <div key={idx} className="bg-[#1e293b] rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition">
//             <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
//             <div className="p-5 space-y-4">
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//               <div className="flex flex-wrap gap-2 text-sm">
//                 {project.techStack.map((tech, i) => (
//                   <span key={i} className="bg-blue-600 px-2 py-1 rounded-full">{tech}</span>
//                 ))}
//               </div>
//               <p className="text-sm text-slate-300">{project.description}</p>
//               <div className="flex items-center gap-4">
//                 <a href={project.live} target="_blank" className="text-cyan-400 flex items-center gap-1 hover:underline">
//                   <FaExternalLinkAlt /> Live Demo
//                 </a>
//                 <a href={project.github} target="_blank" className="text-gray-400 flex items-center gap-1 hover:underline">
//                   <FaGithub /> GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import FarmVilla from '../assets/videos/farm-villa-practice-design.mp4';
import ShoesWebDesign from '../assets/videos/shoes-website.mp4';
import TaxNTips from '../assets/videos/tax-N-Tips-about-page.mp4';
import WeatherApp from '../assets/videos/weather-app.mp4';
import Ndis from '../assets/videos/ndis-askai.mp4';
import KanbanBoard from '../assets/videos/kanban-board.mp4';
import MedicalWebsite from '../assets/videos/medical-usal.mp4';
import DashboardDesign from '../assets/videos/dashboard-design.mp4';

gsap.registerPlugin(ScrollTrigger);

// Bouncing Text Component
const BouncingText = ({ text, disableBounce = false }) => {
  const charRefs = useRef([]);

  useEffect(() => {
    if (disableBounce) return;

    const validChars = charRefs.current.filter(Boolean);
    gsap.fromTo(
      validChars,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: true,
      }
    );

    return () => gsap.killTweensOf(validChars);
  }, [text, disableBounce]);

  return (
    <>
      {text.split('').map((char, index) => (
        <span
          key={index}
          ref={(el) => (charRefs.current[index] = el)}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
};

// FlipCard Component
const FlipCard = ({ video, title, description, github,demo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="flip-card w-full max-w-[288px] h-96 [perspective:1000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      tabIndex="0"
      role="region"
      aria-label={`Project: ${title}`}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <video
            src={video}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-slate-800 text-white rounded-xl shadow-xl flex flex-col justify-center items-center px-4 text-center"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          <h2 className="text-3xl font-semibold mb-2">{title}</h2>
          <p className="text-lg mb-4 line-clamp-4">{description}</p>

          <div className="flex flex-col gap-2">
            {github ? (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-1 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-lg shadow hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> View Code
              </motion.a>
            ) : (
              <span className="text-xs text-gray-300">Code is confidential/private</span>
            )}

            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-lg shadow hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🌐 Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Projects Component
const Projects = () => {
  const headingRef = useRef(null);
  const cardContainerRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    const handleMediaQueryChange = (e) => setReduceMotion(e.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Animate heading
    if (headingRef.current && !reduceMotion) {
      const headingChars = headingRef.current.querySelectorAll('span');
      gsap.fromTo(
        headingChars,
        { opacity: 0, x: -50, scale: 1.5 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate FlipCards on scroll
    if (cardContainerRef.current && !reduceMotion) {
      const cards = cardContainerRef.current.querySelectorAll('.flip-card');
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardContainerRef.current,
            start: 'top 85%',
            toggleActions: 'restart none none none',
          },
        }
      );
    }

    return () => {
      gsap.killTweensOf('*');
      ScrollTrigger.getAll().forEach((st) => st.kill());
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [reduceMotion]);

  const cards = [
    {
      id: 1,
      video: FarmVilla,
      title: 'Farm Villa Design',
      description:
        'UI design of a farm villa landing page created in React JS, focusing on modern aesthetics and responsiveness.',
      github: 'https://github.com/umer62490/farmhouse-design/tree/master',
      demo: 'https://farmhouse-design.vercel.app/' 
    },
    {
      id: 2,
      video: ShoesWebDesign,
      title: 'Shoes Website',
      description:
        'Dynamic e-commerce site for shoes, leveraging Redux for state management, GSAP & Framer Motion for intricate animations, and React-Particles for visual effects.',
      github: 'https://github.com/umer62490/Shoes-Store/tree/master',
      demo: 'https://shoes-store-gray-two.vercel.app/' 
    },
    {
      id: 3,
      video: MedicalWebsite,
      title: 'Medical Website & Admin',
      description:
        'A comprehensive medical website built with React, featuring an intuitive admin panel for seamless product management.',
      github: 'https://github.com/umer62490/medicine-ecommerce/tree/master',
      demo: 'https://medicine-ecommerce-psi.vercel.app/' 
    },
    {
      id: 4,
      video: WeatherApp,
      title: 'Weather App',
      description:
        'React-based weather application integrating a country API to provide real-time weather data with dynamic background visuals based on current conditions.',
      github: 'https://github.com/umer62490/weather-api/tree/master',
      demo: 'https://weather-api-two-beta.vercel.app/' 
    },
    {
      id: 5,
      video: DashboardDesign,
      title: 'Dashboard Design',
      description:
        'A React-based dashboard interface meticulously crafted from Figma designs during an internship. (Code is confidential)',
      github: '',
       demo: 'https://kdys-design1-xd.vercel.app/' 
    },
    {
      id: 6,
      video: Ndis,
      title: 'NDIS Chatbot Integration',
      description:
        'Seamless chatbot integration using an external API, developed with Next.js and TypeScript for a National Disability Insurance Scheme project. (Code is private)',
      github: '',
    },
    {
      id: 7,
      video: TaxNTips,
      title: 'Tax N Tips About Page',
      description:
        'Informative "About Us" page developed using Next.js and TypeScript, designed for a tax and tips consultancy. (Code is private)',
      github: '',
    },
    {
      id: 8,
      video: KanbanBoard,
      title: 'Kanban Task Manager',
      description:
        'An interactive Kanban board built with React, featuring category filtering, calendar deadline view, and intuitive drag & drop functionality for task management.',
      github: 'https://github.com/umer62490/kanban-board/tree/master',
      demo: 'https://kanban-board-gamma-sooty.vercel.app/' 
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-slate-900 py-10 px-5 relative z-10">
      {/* Projects Heading */}
      <h2
        ref={headingRef}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-12 text-[#F1F5F9] leading-tight"
      >
        <BouncingText text="Projects" disableBounce={reduceMotion} />
      </h2>

      {/* Card Grid */}
      <div
        ref={cardContainerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 justify-items-center px-4 sm:px-0"
      >
        {cards.map((card) => (
          <FlipCard
            key={card.id}
            video={card.video}
            title={card.title}
            description={card.description}
            github={card.github}
            demo={card.demo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
