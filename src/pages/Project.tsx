import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from "react-type-animation";

import projectData from "../assets/ProjectData";
import myWorkData from "../assets/mywork";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 }
    }
  ]
};

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-500 mb-4">
        <TypeAnimation
            sequence={[
              "Welcome  to My Projects,",
              1000,
              "Panel",
              1000,
              "Showcasing My Work",
              1000,
              "Explore My Projects",
              1000,
              "Discover My Skills",
              1000,
              "See My Creativity",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here you'll find a selection of my latest work.
        </p>
      </div>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
          🛠️ Client & Freelance Projects
        </h3>
        <Slider {...sliderSettings}>
          {myWorkData.map((project) => (
            <div key={project.id} className="px-2">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
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
            </div>
          ))}
        </Slider>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-6 border-b pb-2">
          💻 We Can Make Personal & Portfolio Projects
        </h3>
        <Slider {...sliderSettings}>
          {projectData.map((project) => (
            <div key={project.id} className="px-2">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <div className="bg-blue-50 p-6 rounded-xl text-center max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg mb-4">
          These projects are just a glimpse of my journey...
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
