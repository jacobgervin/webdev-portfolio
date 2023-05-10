import "./about.css"
import { SKILLS } from "./skills.js";
import { motion } from 'framer-motion';

function About() {
    return (
        <div id="about" className="h-screen w-screen aboutbackground">
             <div className="max-w-screen-xl p-8 mx-auto flex flex-col align-center justify-center">
                <div className="relative abouttitlecontainer mt-5">
                    <motion.div
                                         initial={{width: '125px'}}
                                         whileInView={{width: '50px'}}
                                         viewport={{ once: true }}
                                         transition={{ duration: 1.5 }}
                    className="absolute aboutbox z-10"></motion.div>
                    <div className="text-center relative z-20 ">
                    <h1 className=" font-extrabold tracking-widest text-3xl mt-20 z-20 abouttitle">ABOUT</h1>
                    </div>
                </div>
                <div className="text-center flex flex-col justify-center mt-10">
                    <h2 className="text-5xl font-thin tracking-widest"> WHO AM I?</h2>
                     <p className="mx-auto md:w-96 mt-5 leading-loose tracking-wide">I am currently studying for a bachelor’s degree in web development at Zealand in Roskilde. I am passionate about interesting and user-friendly web applications, and I enjoy exploring new technologies and techniques to enhance my skills.</p>
                </div>
                <div className="text-center flex flex-col justify-center items-center mt-10">
                    <h2 className="text-5xl font-thin tracking-widest">SKILLS</h2>
                    <div className="w-96 md:w-1/2 mt-5 p-2">
            {SKILLS.map((skill, index) => (
              <span key={index} className="inline-block px-3 py-1 text-sm font-light text-gray-800 mr-2 mb-2 tracking-widest">
                {skill.name}
              </span>
            ))}
          </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default About;
  