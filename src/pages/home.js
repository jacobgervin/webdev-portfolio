import "./home.css"
import Work from "./work";
import About from "./about";
import { motion } from "framer-motion";

function Home({ isChecked }) {
  return (
    <>
<div id="pagehero" className="hero h-96 md:h-48 w-screen flex flex-col justify-center">
    <div className="container md:mt-48 mx-auto my-auto  flex flex-col items-center relative">
        <motion.div
                              initial={{ opacity: 0}}
                              whileInView={{opacity: 100}}
                              viewport={{ once: true }}
                              transition={{ duration: 1 }}
        className="z-20 flex text-center flex-col">
        <h1 
        className="font-medium text-4xl jg tracking-wide">JACOB GERVIN</h1>
        <h2 className="font-thin text-3xl mt-3 md:text-xl webdev tracking-wide"> {isChecked ? "FULLSTACK UDVIKLER" : "FULLSTACK DEVELOPER"}</h2>
        </motion.div>
    </div>
</div>
<Work isChecked={isChecked} />
<About isChecked={isChecked} />
</>
  );
}

export default Home;
