import React from "react";
import projectData from "../assets/ProjectData";
import myWorkData from "../assets/mywork";

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-500 mb-4">
          Welcome to My Projects Panel
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here you'll find a selection of my latest work. From full-stack applications to clean UI builds — dive in and explore.
        </p>
      </div>

      {/* My Work Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
          🛠️ Client & Freelance Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myWorkData.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h4>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-blue-500 hover:underline"
              >
                🔗 View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="mb-16">
        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-6 border-b pb-2">
          💻 We Can Make Personal & Portfolio Projects 
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h4>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Message */}
      <div className="bg-blue-50 p-6 rounded-xl text-center max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg mb-4">
          These projects are just a glimpse of my journey. From full-stack blog sites and tourism apps to real-world challenges like renting platforms — I’m constantly building and learning.
        </p>
        <p className="text-gray-800 font-semibold mb-2">
          💬 Got a project idea or need a collaborator?
        </p>
        <p className="text-blue-600 font-medium">
          Let’s connect and create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default Projects;
