/** @format */

import React from 'react';
import AboutImg from '../assets/laptop.webp';

const About = () => {
  return (
    <section className="bg-white text-gray-900 px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between gap-10">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-4 w-[180px] border-[#ab0020] pb-2">
            About Me
          </h2>

          <p className="pb-5 text-lg">
            I’m <span className="font-semibold text-[#ab0020]">Tobi Awosola</span>, a Backend Engineer with a passion for building scalable, high-performance web applications and APIs. My core stack includes <b>Node.js, Express.js, MongoDB</b>, and I have hands-on experience with <b>React.js</b> and modern frontend tools.
          </p>
          <p className="pb-5 text-lg">
            I thrive in collaborative environments, value clean code, and enjoy solving real-world problems with technology. I’m always eager to learn, share knowledge, and contribute to impactful projects.
          </p>
          <p className="pb-5 text-lg">
            <b>Skills:</b> JavaScript, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, React.js, Redux, REST APIs, Git, Agile, and more.
          </p>
          <p className="text-lg">
            Outside of coding, I enjoy reading tech articles and mentoring aspiring developers.
          </p>
        </div>

        <div className="about-img flex justify-center md:justify-end">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="rounded-lg shadow-lg w-80 h-64 object-cover border-2 border-[#ab0020]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
