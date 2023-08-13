import "./about.css"
import { SKILLS } from "./skills.js";
import { motion, useMotionTemplate, useMotionValue  } from 'framer-motion';
import { useState, MouseEvent } from "react";



function About({ isChecked }) {
  

  const [showNumber, setShowNumber] = useState(false)
  const [showEmail, setShowEmail] = useState(false)

    return (
        <div id="about" className="h-contain w-screen aboutbackground">
             <div className="max-w-screen-xl p-8 mx-auto flex flex-col align-center justify-center">
                <div className="md:text-center flex flex-col justify-center mt-10">
                    <motion.h2
                                     initial={{ opacity: 0}}
                                     whileInView={{ opacity: 100}}
                                     viewport={{ once: true }}
                                     transition={{ duration: 1 }}
                    className="text-2xl font-light tracking-widest">{isChecked ? "OM MIG" : "ABOUT ME"}</motion.h2>
                     <motion.p
                                                          initial={{ opacity: 0}}
                                                          whileInView={{ opacity: 100}}
                                                          viewport={{ once: true }}
                                                          transition={{ duration: 1 }}
                     className="mx-auto md:w-2/3 mt-5 font-thin leading-loose tracking-wide">{isChecked ? "Jeg studerer på nuværende tidspunkt en professionsbachelor i webudvikling på Zealand i Roskilde. Jeg er passioneret omkring interessante og brugervenlige web applikationer, og jeg nyder at udforske nye teknologier og teknikker til at forbedre mine evner." : "I am currently studying for a bachelor’s degree in web development at Zealand in Roskilde. I am passionate about interesting and user-friendly web applications, and I enjoy exploring new technologies and techniques to enhance my skills."}</motion.p>
                </div>
                <div className="md:text-center flex flex-col md:justify-center md:items-center mt-10">
                    <motion.h2
                               initial={{ opacity: 0}}
                               whileInView={{ opacity: 100}}
                               viewport={{ once: true }}
                               transition={{ duration: 1 }} className="text-2xl font-light tracking-widest">{isChecked ? "TECH" : "TECH"}</motion.h2>
                    <div className=" md:w-1/2 mt-5 md:p-2">
            {SKILLS.map((skill, index) => (
              <motion.span
              initial={{ opacity: 0}}
              whileInView={{ opacity: 100}}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              key={index} className="inline-block px-3 py-1 text-sm font-thin bg-gray-100 text-gray-800 mr-2 mb-2 tracking-widest">
                {skill.name}
              </motion.span>
            ))}
          </div>
          <motion.div
                       initial={{ opacity: 0}}
                       whileInView={{ opacity: 100}}
                       viewport={{ once: true }}
                       transition={{ duration: 1 }}
           id="contact" className="h-96 flex mt-10 flex-col md:item-center md:justify-center">
                    <h3 className="tracking-widest font-light text-2xl">{isChecked ? "KONTAKT INFORMATION" : "CONTACT INFORMATION"}</h3>
                    <div className="flex flex-row mt-4"><button className="px-3 py-1 bg-gray-900 hover:bg-gray-700 text-gray-100 tracking-widest" onClick={() => setShowNumber(!showNumber)}>{isChecked ? "TELEFON" : "PHONE"}</button><p  onClick={() => setShowNumber(!showNumber)} className=" px-3 py-1 bg-gray-100 text-gray-800  text-xl font-thin tracking-wide cursor-pointer">{showNumber ? "4014 1319" : "******"}</p></div> 
                   <div className="flex flex-row  mt-4"><button className="px-3 py-1 bg-gray-900 hover:bg-gray-700 text-gray-100 tracking-widest" onClick={() => setShowEmail(!showEmail)}>EMAIL</button><p onClick={() => setShowEmail(!showEmail)} className="px-3 py-1 bg-gray-100 text-gray-800  text-xl font-thin tracking-wide cursor-pointer">{showEmail ? "jacobgervin@gmail.com" : "*********************"}</p></div> 
                </motion.div>
                </div>
            </div>
        </div>
    );
  }
  
  export default About;
  