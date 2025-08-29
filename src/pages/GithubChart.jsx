// GitHubStats.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GitHubStats = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <motion.section
      className="flex flex-col items-center py-10 px-4 bg-white text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{  amount: 0.3 }}
      variants={fadeIn}
    >
      
      <motion.h2
        className="text-5xl font-bold mb-6 text-black"
        variants={fadeIn}
        transition={{ delay: 0.1 }}
      >
        GitHub Contributions & Stats
      </motion.h2>

      {/* GitHub Contribution Calendar (Static Image) */}
      <motion.div className="mb-6" variants={fadeIn} transition={{ delay: 0.3 }}>
        <img
          src="https://ghchart.rshah.org/umer62490"
          alt="GitHub Contribution Chart"
          className="w-[70vw] h-[10vw] mx-auto"
        />
      </motion.div>

      {/* GitHub Readme Stats */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
        variants={fadeIn}
        transition={{ delay: 0.5 }}
      >
        <img
          src="https://github-readme-stats.vercel.app/api?username=umer62490&show_icons=true&theme=radical"
          alt="GitHub Stats"
          className="w-full sm:w-[48%]"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=umer62490&layout=compact&theme=radical"
          alt="Top Languages"
          className="w-full sm:w-[48%]"
        />
      </motion.div>
    </motion.section>
  );
};

export default GitHubStats;

