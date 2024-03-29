import * as React from "react";
import { useState } from 'react';
import { Link, animateScroll } from 'react-scroll';
import {motion} from "framer-motion";
import hamburger from './hamburger.json'
import Lottie from 'lottie-react'
import "./navbar.css"
import LanguagePicker from "./languagepicker";

function Navbar({ isChecked, setIsChecked }) {

  const [showNav, setShowNav] = useState(true)
  const variants = {
    open: { opacity: 1},
    closed: { opacity: 0},
    toggleOn: {},
    toggleOff: {}
  }

  const workvariant = {
    open: {x: 0,opacity:1},
    closed: {x: -100, opacity:0},
    toggleOn: {},
    toggleOff: {}
  }

    return (


<nav class="fixed w-full z-30 top-0 left-0 navbar ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
    <div className="md:w-40">
  <Link 
            to="pagehero"
            smooth={true}
            onClick={() => {
              const section = document.getElementById('pagehero');
              if (section) {
                animateScroll.scrollTo(section.offsetTop);
              } else {
                window.location.href = '/';
              }
            }}
  class="flex items-center navlink w-fit">
      <span class="self-center text-md font-normal whitespace-nowrap tracking-widest navbarbrand cursor-pointer">JACOB GERVIN</span>
  </Link>
  </div>

  <div class="flex md:order-2 justify-end w-40">
  <LanguagePicker  isChecked={isChecked} setIsChecked={setIsChecked}  />
    <a href="https://github.com/jacobgervin" className="flex flex-row items-center cursor-pointer hover:drop-shadow-xl hidden md:block" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#262626" className="w-7 h-7" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/jacob-gervin-25457b212/" className="flex flex-row items-center hover:drop-shadow-xl cursor-pointer hidden md:block" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#262626" className="w-7 h-7" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
    </a>

      <button onClick={() => setShowNav(!showNav)} type="button" class="inline-flex items-center p-2 text-sm text-gray-500 md:hidden  focus:outline-none">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <motion.div 
   class={`flex flex-col justify-center block md:hidden w-screen h-[88vh] ${showNav && 'hidden'}`}>
    <motion.ul
          animate={!showNav ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5 }}
    className='h-96 flex flex-col justify-evenly mb-10'>
      <li>        
         <motion.Link 

animate={!showNav ? "open" : "closed"}
variants={workvariant}
transition={{ duration: 0.25 }}
          to="work"
          smooth={true}
          onClick={() => {
            
            const section = document.getElementById('work');
            
            if (section) {
              animateScroll.scrollTo(section.offsetTop);
            } else {
              window.location.href = '/';
            }
            setShowNav(!showNav)
          }}
        class="block py-2 pr-4 text-6xl rounded md:bg-transparent md:p-0 navlink cursor-pointer">{isChecked ? "PROJEKTER" : "PROJECTS"}</motion.Link></li>
      <li>
                <motion.Link 
                animate={!showNav ? "open" : "closed"}
                variants={workvariant}
                transition={{ delay:0.25, duration: 0.25 }}
          to="about"
          smooth={true}
          onClick={() => {
            const section = document.getElementById('about');
            if (section) {
              animateScroll.scrollTo(section.offsetTop);
            } else {
              window.location.href = '/';
            }
            setShowNav(!showNav)
          }}
        class="block py-2 pr-4 text-6xl rounded md:bg-transparent md:p-0 navlink cursor-pointer">{isChecked ? "OM MIG" : "ABOUT"}</motion.Link>
      </li>
      <li>
      <motion.Link 
                      animate={!showNav ? "open" : "closed"}
                      variants={workvariant}
                      transition={{ delay:0.5, duration: 0.25 }}
          to="contact"
          smooth={true}
          onClick={() => {
            const section = document.getElementById('contact');
            if (section) {
              animateScroll.scrollTo(section.offsetTop);
            } else {
              window.location.href = '/';
            }
            setShowNav(!showNav)
          }}
        class="block py-2 pr-4 text-6xl rounded md:bg-transparent md:p-0 navlink cursor-pointer">{isChecked ? "KONTAKT" : "CONTACT"}</motion.Link>
      </li>
      <li>
      <motion.div
                animate={!showNav ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.5 }}
      class="flex md:order-2 space-x-3 justify-start w-full py-2 pr-4">
    <a href="https://github.com/jacobgervin" className="flex flex-row items-center cursor-pointer " target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#262626" className="w-10 h-10" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/jacob-gervin-25457b212/" className="flex flex-row items-center cursor-pointer" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#262626" className="w-10 h-10" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
    </a>
  </motion.div>
      </li>
    </motion.ul>

  </motion.div>
  <div class={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 `}>
    <ul class="flex flex-col p-4 md:p-0 mt-4  tracking-widest md:flex-row md:space-x-[100px] md:mt-0 navbarlinks">
      <li>
        <Link 
          to="work"
          smooth={true}
          onClick={() => {
            const section = document.getElementById('work');
            if (section) {
              animateScroll.scrollTo(section.offsetTop);
            } else {
              window.location.href = '/';
            }
          }}
        class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 navlink cursor-pointer">{isChecked ? "PROJEKTER" : "PROJECTS"}</Link>
      </li>
      <li>
        <Link 
          to="about"
          smooth={true}
          onClick={() => {
            const section = document.getElementById('about');
            if (section) {
              animateScroll.scrollTo(section.offsetTop);
            } else {
              window.location.href = '/';
            }
          }}
        class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 navlink cursor-pointer">{isChecked ? "OM MIG" : "ABOUT"}</Link>
      </li>
      <li>
        <Link 
          to="contact"
          smooth={true}
          onClick={() => {
            const section = document.getElementById('contact');
            if (section) {
              animateScroll.scrollTo(section.offsetTop);
            } else {
              window.location.href = '/';
            }
          }}
        class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 navlink cursor-pointer">{isChecked ? "KONTAKT" : "CONTACT"}</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>


    );
  }
  
  export default Navbar;
  