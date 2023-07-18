import { useParams } from "react-router-dom";
import { PROJECTS } from "../projects";
import "./workpage.css"

function Workpage({isChecked}) {

  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
<div className=" h-fit md:h-screen w-screen flex flex-col-reverse md:flex-row workpagebg">
  <div className=" w-screen md:w-1/2 h-full flex flex-col items-center justify-center">
    <div className="md:w-2/3 p-8">
        <h2 className="text-4xl font-thin tracking-widest">{project.name}</h2>
        <p className="mt-4 font-light leading-loose">{isChecked ? project.om : project.about}</p>
        <h2 className="text-4xl font-thin tracking-widest mt-6">TECHSTACK</h2>
        <div className="mt-4">
        {project.techstack.map((tech) => (
                    <span key={tech} className="inline-block px-1 py-1 text-sm font-light text-gray-800 mr-2 mb-2 tracking-widest">{tech}</span>
                  ))}
        </div>
        <div className="flex flex-col mt-10 md:mt-20">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-fit cursor-pointer font-thin flex flex-row items-center projectlink">{isChecked ? "SE PÅ GITHUB" : "VIEW ON GITHUB"} <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="mt-4 w-fit cursor-pointer font-thin flex flex-row items-center projectlink">{isChecked ? "SE LIVE" : "VIEW LIVE"}<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></a>
        </div>
      </div>
  </div>
  <div className="h-full bg-neutral-700 relative w-full md:w-1/2 mt-20 md:mt-0">
      {project.image && <img src={project.image} alt={project.name} className="object-cover w-full h-full" />}
  </div>
</div>
  );
}

export default Workpage;
