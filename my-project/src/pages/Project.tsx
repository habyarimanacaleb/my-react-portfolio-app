import React from "react";
import projectData from "../assets/ProjectData";

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">
        {" "}
        Welcome To My Projects Panel On This Page There Some Of My Latest
        Projects.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
