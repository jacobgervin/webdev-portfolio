import "./home.css"

function Home() {
  return (
<div className="hero h-screen w-screen flex flex-col justify-center">
    <div className="container mx-auto my-auto flex flex-col items-center relative">
        <div className="z-20 flex flex-col">
        <h1 className="font-semibold text-lg tracking-widest jg">JACOB GERVIN</h1>
        <h2 className="font-extrabold text-3xl md:text-8xl  tracking-widest ">WEBDEVELOPER</h2>
        <a className="font-semibold text-md md:text-sm mt-1 tracking-widest cta">LOOKING FOR AN INTERN?</a>
        </div>
        <div className="colorbox absolute z-10"></div>

    </div>
</div>
  );
}

export default Home;
