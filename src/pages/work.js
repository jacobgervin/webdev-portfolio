import "./work.css"
import cocktailshopImg from "../images/cocktailshop-mockup.png"
import jocImg from "../images/joc.png"
import { PROJECTS } from "./projects";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Work() {

    const projects = PROJECTS;

    return (
<div id="work" className="md:h-screen h-fit w-screen workbackground">
  <div className="max-w-screen-xl p-3 md:p-8 mx-auto flex flex-col">
    <div className="relative">
    <motion.div
                     initial={{width: '125px'}}
                     whileInView={{width: '50px'}}
                     viewport={{ once: true }}
                     transition={{ duration: 1 }}
    className="absolute workbox z-10"></motion.div>
        <div className="z-20 relative">
            <h1 className=" font-extrabold tracking-widest text-3xl mt-20 ml-2 worktitle">WORK</h1>
        </div>

    </div>
    <div
    className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 mt-10 ">
{projects.map((project, index) => (
        <motion.div
                 initial={{x: '-100px', opacity: 0}}
                 whileInView={{x: 0, opacity: 100}}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
        className="h-96 w-90 md:w-96 bg-neutral-700 relative overflow-hidden cursor-pointer">
        <Link to={`/workpage/${project.id}`}>
            <img src={project.image} className="object-cover hover:scale-110 transition duration-300 w-full h-full"/>
            <h3 className="absolute font-thin left-4 bottom-4">{project.name}</h3>
        </Link>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="absolute right-4 bottom-4 flex flex-row items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#262626" className="w-6 h-6" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg>
            </a>
        </motion.div>
))}

        
    </div>

  </div>
</div>
    );
  }
  
  export default Work;
  