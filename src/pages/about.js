import "./about.css"

function About() {
    return (
        <div id="about" className="h-screen w-screen aboutbackground">
             <div className="max-w-screen-xl p-8 mx-auto flex flex-col align-center justify-center">
                <div className="relative abouttitlecontainer mt-5">
                    <div className="absolute aboutbox z-10"></div>
                    <div className="text-center relative z-20 ">
                    <h1 className=" font-extrabold tracking-widest text-3xl mt-20 z-20 abouttitle">ABOUT</h1>
                    </div>
                </div>
                <div className="text-center flex flex-col justify-center mt-10">
                    <h2 className="text-5xl font-thin tracking-widest"> WHO AM I?</h2>
                     <p className="mx-auto md:w-96 mt-5 leading-loose tracking-wide">I am currently studying for a bachelor’s degree in web development at Zealand in Roskilde. I am passionate about interesting and user-friendly web applications, and I enjoy exploring new technologies and techniques to enhance my skills.</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default About;
  