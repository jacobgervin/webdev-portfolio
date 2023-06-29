import "./home.css"
import Work from "./work";
import About from "./about";
import Contact from "./contact";
import { Link, animateScroll } from 'react-scroll';
import { filterProps, motion } from "framer-motion";

function Home() {
  return (
    <>
<div id="pagehero" className="hero h-screen w-screen flex flex-col justify-center">
    <div className="container mx-auto my-auto flex flex-col items-center relative">
        <div className="z-20 flex flex-col">
        <motion.h1 
                         initial={{y: '-50px', opacity: 0}}
                         whileInView={{y: 0, opacity: 100}}
                         viewport={{ once: true }}
                         transition={{ duration: 1 }}
        className="font-semibold text-lg tracking-widest jg">JACOB GERVIN</motion.h1>
        <motion.h2
                         initial={{ opacity: 100, filter: "blur(20rem)" }}
                         whileInView={{ opacity: 100, filter: "none" }}
                         viewport={{ once: true }}
                         transition={{ duration: 2 }}
         className="font-extrabold text-3xl md:text-8xl webdev tracking-widest ">WEBDEVELOPER</motion.h2>
        <motion.Link
          initial={{y: '50px', opacity: 0}}
          whileInView={{y: 0, opacity: 100}}
          viewport={{ once: true }}
          transition={{ duration: 1 }}

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
        className="font-light text-md md:text-sm mt-1 tracking-widest flex flex-row items-center navlink cta">LOOKING FOR AN INTERN?<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></motion.Link>
        </div>
    </div>
</div>
<Work />
<About />
<Contact />
</>
  );
}

export default Home;
