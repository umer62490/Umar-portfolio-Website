// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Umar Khan. All rights reserved.
        </p>

        {/* Right Side - Social Links */}
        <div className="flex gap-4 mt-3 md:mt-0 ">
          <a
            href="https://github.com/umer62490"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-lg shadow hover:shadow-lg px-6 py-1  transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-umar-2296362a6?originalSubdomain=pk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-lg shadow hover:shadow-lg px-6 py-1 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:umer62490@gmail.com"
            className="bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold rounded-lg shadow hover:shadow-lg px-6 py-1 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
