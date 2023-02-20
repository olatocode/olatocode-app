/** @format */

import React from 'react';
import HeroImg from '../assets/olatoprofile.png';

import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from 'react-icons/ai';

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">o</span>latocode <br />
            Full-stack Developer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js, Node.js and MongoDB.
          </p>

          <div className="flex py-5 ">
            <a
              href="https://linkedin.com/tobi-awosola"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineLinkedin size={40} />{' '}
            </a>

            <a
              href="https://twitter.com/olatocode"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineTwitter size={40} />{' '}
            </a>

            <a
              href="https://www.facebook.com/tobi.awosola"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {' '}
              <AiOutlineFacebook size={40} />{' '}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
