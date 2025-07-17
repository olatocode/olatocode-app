/** @format */

import React from 'react';
import LinkedInImg from '../assets/profile.jpg'; // Use the new profile photo

import {
  AiOutlineGithub,
} from 'react-icons/ai';
import { SiX } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="bg-[#facb33] px-5 text-gray-900 py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between gap-10">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Hi, <br />I am <span className="text-[#ab0020]">Tobi Awosola</span> 
          </h1>

          <p className="py-5 text-lg text-gray-700">
          Backend Engineer with 3+ years of experience building scalable E-commerce and FinTech applications
           using Node.js, TypeScript, and Express.js.
          
           <p className="py-5 text-lg text-gray-700">Proficient in designing RESTful APIs, working with both monolithic and microservices architectures,
            and managing databases like MongoDB and PostgreSQL.
             I focus on writing clean, secure and efficient backend code that drives performance and supports business growth.
             </p> 
          </p>

          <div className="flex py-5 space-x-4">
            <a
              href="https://twitter.com/olatocode"
              className="inline-block text-[#ab0020] hover:text-[#ab0020]"
              aria-label="X"
              target="_blank" rel="noopener noreferrer"
            >
              <SiX size={36} />
            </a>
            <a
              href="https://github.com/olatocode"
              className="inline-block text-gray-800 hover:text-black"
              aria-label="GitHub"
              target="_blank" rel="noopener noreferrer"
            >
              <AiOutlineGithub size={36} />
            </a>
          </div>

          <div className="flex space-x-4 mt-6">
            <a
              href="/#projects"
              className="btn bg-[#ab0020] border-2 border-[#ab0020] text-white px-6 py-3 rounded hover:bg-transparent hover:text-[#ab0020] transition"
            >
              See Projects
            </a>
            <a
              href="/Tobi-Awosola-Resume.pdf"
              download
              className="btn bg-white border-2 border-[#ab0020] text-[#ab0020] px-6 py-3 rounded hover:bg-[#ab0020] hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-img flex justify-center md:justify-end">
          <img
            src={LinkedInImg}
            alt="Tobi Awosola LinkedIn profile"
            className="rounded-full w-60 h-60 object-cover object-center border-2 border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
