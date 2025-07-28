import React from "react";
import { motion } from "framer-motion";

import NEDLogo from "../assets/images/logo/ned-bg-remove.png";
import KDYSLogo from "../assets/images/logo/kdys-bg-remove.png";
import IXLogo from "../assets/images/logo/IX-bg-remove.png";
import NTCLogo from "../assets/images/logo/ntc-bg-remove.png";
import SKBZLogo from "../assets/images/logo/skbz-bg-remove.png";
import DegreeCollegeLogo from "../assets/images/logo/degree-bg-remove.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const experienceData = [
  {
    logo: NTCLogo,
    title: "National Telecommunication Corporation",
    role: "Internship - Telecom Networking (Switching, Transmission, Data Center)",
    duration: "Mar 2024 - May 2024",
  },
  {
    logo: IXLogo,
    title: "Integration Xperts",
    role: "Internship - Front-End Developer (React)",
    duration: "Sep 2024 - Dec 2024",
  },
  {
    logo: KDYSLogo,
    title: "Kdys Lab",
    role: "Internship - Frontend Developer (React/Next)",
    duration: "May 2025 - July 2025",
  },
];

const educationData = [
  {
    logo: NEDLogo,
    title: "NED University of Engineering and Technology",
    degree: "Bachelors of Science in Computer Science & IT",
    duration: "2020 - 2024 - 70%",
  },
  {
    logo: DegreeCollegeLogo,
    title: "DHACSS Degree College",
    degree: "Pre-Engineering in Intermediate",
    duration: "2018 - 2020 - 75%",
  },
  {
    logo: SKBZLogo,
    title: "Sheikh Khalifa Bin Zayed School",
    degree: "Matriculation in Computer Science",
    duration: "2016 - 2018 - 81%",
  },
];

const ExperienceEducation = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 py-10 font-sans">
      {/* Work Experience */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
        className="mb-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-5xl text-black font-bold mb-6"
        >
          Work Experience
        </motion.h2>

        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            custom={index}
            className="flex items-center justify-between gap-4 mb-6"
          >
            <img
              src={item.logo}
              alt={item.title}
              className="w-12 h-12 rounded-full object-contain"
            />
            <div className="flex-1 ml-3">
              <h3 className="text-lg font-semibold leading-relaxed text-[#08090A]">
                {item.title}
              </h3>
              <p className="text-md font-normal leading-relaxed text-[#08090A] mb-4">
                {item.role}
              </p>
            </div>
            <span className="text-[14px] font-normal leading-relaxed text-[#737373] mb-4">
              {item.duration}
            </span>
          </motion.div>
        ))}
      </motion.section>

      {/* Education */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-5xl text-black font-bold mb-6"
        >
          Education
        </motion.h2>

        {educationData.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            custom={index}
            className="flex items-center justify-between gap-4 mb-6"
          >
            <img
              src={item.logo}
              alt={item.title}
              className="w-12 h-12 rounded-full object-contain"
            />
            <div className="flex-1 ml-3">
              <h3 className="text-lg font-semibold leading-relaxed text-[#08090A]">
                {item.title}
              </h3>
              <p className="text-md font-normal leading-relaxed text-[#08090A] mb-4">
                {item.degree}
              </p>
            </div>
            <span className="text-[14px] font-normal leading-relaxed text-[#737373] mb-4">
              {item.duration}
            </span>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default ExperienceEducation;
