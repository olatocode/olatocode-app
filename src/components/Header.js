/** @format */

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/logo.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between items-center px-8 pt-8 pb-8 bg-primary text-[#facb33] fixed w-full z-10 shadow">
      <a href="/" className="logo flex items-center">
        <img src={logo} alt="Olatocode Logo" className="h-16 w-auto" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#blog">Blog</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? 'mobile-nav left-[-100%]' : 'mobile-nav left-0'}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#blog">Blog</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
