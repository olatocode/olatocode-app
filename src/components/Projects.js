/** @format */

import React from 'react';
import votevoice from '../assets/votevoice.webp';
import googleui from '../assets/googleui.webp';
import datavasity from '../assets/datavasity.png';
import healthcare from '../assets/healthcare.png';
import finsocial from '../assets/finsocial.png';
import eventblown from '../assets/eventblown.webp';

const Projects = () => {
  const projects = [
    {
      img: eventblown,
      title: 'EventBlown',
      desc: 'EventBlown is a platform to help event planners showcase their events online',
      live: 'https://documenter.getpostman.com/view/19291153/UVz1MXSN',
      code: 'https://github.com/olatocode/EventBlown',
    },
    {
      img: datavasity,
      title: 'Datavasity',
      desc: 'This is a learning platform for student who want to learn tech skills',
      live: 'https://datavasity.com/',
      code: '#',
    },
    {
      img: healthcare,
      title: 'Snh365healthcare',
      desc: 'This is a Health care platform where users can book an appointment with a doctor, before buying their herbal medicine.',
      live: 'https://snh-365-healthcare.org.ng/',
      code: '#',
    },
    {
      img: votevoice,
      title: 'VoteVoice',
      desc: ' An Election App. Built with ReactNative, Html & Css',
      live: 'https://play.google.com/store/apps/details?id=com.votevoice',
      code: 'https://github.com/olatocode',
    },
    {
      img: finsocial,
      title: 'Finsocial',
      desc: 'This platform is meant to improve user financial management in terms of investment and savings',
      live: 'https://finsocial.netlify.app/',
      code: '#',
    },
    {
      img: googleui,
      title: 'GoogleUI',
      desc: 'A simple Google UI Design using Html and Css',
      live: 'https://olatocode.github.io/googleui/',
      code: 'https://github.com/olatocode/googleui',
    },
  ];

  return (
    <section className="bg-primary text-dark px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl text-white font-bold mb-5 border-b-4 w-[180px] border-[#ab0020] pb-2">
            Projects
          </h2>

          <p className="pb-5 text-lg text-white text-gray-700">
            Here are some of my best projects, built with JavaScript (MERN), HTML, CSS, and WordPress.
          </p>
        </div>
        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative bg-white rounded-lg shadow-md border border-secondary overflow-hidden hover:shadow-lg transition" key={i}>
              <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-[#ab0020] mb-2">{project.title}</h3>
                <p className="flex-1 text-gray-700 mb-4">{project.desc}</p>
                <div className="flex space-x-3 mt-auto">
                  <a
                    href={project.live}
                    className="px-4 py-2 bg-recruiter text-white rounded hover:bg-[#ab0020] font-bold transition"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-4 py-2 bg-white border-2 border-[#ab0020] text-[#ab0020] rounded hover:bg-[#ab0020] hover:text-white font-bold transition"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
