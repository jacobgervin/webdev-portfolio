import { motion } from 'framer-motion'
import "./contact.css"


function Contact() {
    return (
        <div id="contact" className="h-screen w-screen aboutbackground">
             <div className="max-w-screen-xl p-8 mx-auto flex flex-col align-center items-center justify-center">
                <div className="relative abouttitlecontainer mt-10">
                    <motion.div
                    initial={{width: '125px'}}
                    whileInView={{width: '50px'}}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="absolute aboutbox z-10"></motion.div>
                    <div className="text-center relative z-20 ">
                    <h1 className=" font-extrabold tracking-widest text-3xl mt-20 z-20 abouttitle">CONTACT</h1>
                    </div>
                </div>
                <div className="h-96 flex flex-col item-center justify-center">
                    <h3 className="tracking-widest font-light text-2xl">CONTACT INFORMATION</h3>
                    <p className="mt-5 text-xl font-thin tracking-wide">PHONE: 4014 1319</p>
                    <p className="mt-5 text-xl font-thin tracking-wide">EMAIL: JACOBGERVIN@GMAIL.COM</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Contact;
  