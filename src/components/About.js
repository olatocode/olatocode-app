/** @format */

import React from 'react';
import AboutImg from '../assets/laptop.webp';

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, I'm Tobi Awosola also known as OlatoCode. I'm a Software Engineer. I build beautiful Web Apps and APIs using Node.js,
            (Express.js), MongoDB, React.js, Html,Css and php(laravel,wordpress).
          </p>
          <p className="pb-5">
            I am proficient in Backend and touch of Frontend skills like
            React.js, Redux, Redux Tool Kit, Axios SaSS, Css3, Html5 and many
            more.
          </p>

          <p>
            My Backend skills involve JavaScript, Typescript, Node.js,
            Express.js, MongoDB, Postgresql and MSQL
          </p>

          <p>
            In my spare time, I like reading tech articles and I like sharing my
            knowledge with like minds.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
