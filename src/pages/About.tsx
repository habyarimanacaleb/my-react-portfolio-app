import React, { useState } from "react";
import { Linkedin, Github, Twitter, FileDown } from "lucide-react";

const About: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <img
          src="https://avatars.githubusercontent.com/u/148393487?v=4"
          alt="Profile"
          className="h-32 w-32 rounded-full mx-auto shadow-lg"
        />
        <h2 className="text-3xl font-bold mt-4">About Me</h2>
      </div>

      <p className="text-lg text-gray-700 mb-4 transition-all duration-300">
        I'm a Front-End Developer skilled in building responsive, user-friendly
        websites using React.js, Tailwind CSS, and modern web practices. With a
        passion for creating interactive and seamless user experiences, I aim to
        make websites that are both functional and visually appealing. I
        constantly strive to stay updated with the latest technologies and
        trends in web development.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Over the years, I've gained hands-on experience working with different
        tools and frameworks, enhancing my problem-solving and creative
        abilities. My focus is on making websites that not only look good but
        also provide excellent performance and accessibility. I approach each
        project with a meticulous attention to detail, ensuring a balance
        between aesthetics and functionality.
      </p>

      {showMore && (
        <div className="showmore">
          <p className="text-lg text-gray-700 mb-4">
            I’m passionate about learning new technologies and improving my
            coding skills. I believe in continuous growth and applying my
            knowledge to solve real-world challenges. In addition to web
            development, I enjoy mentoring others and sharing my knowledge with
            the community. Whether it's working on complex projects or
            collaborating with like-minded individuals, I enjoy every part of
            the development process.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            When I'm not coding, you can find me exploring new design trends,
            contributing to open-source projects, or learning something new
            about web development. I’m always looking for exciting projects to
            work on, and I’m eager to contribute to the world of web development
            with innovative solutions.
          </p>
        </div>
      )}

      <div className="flex justify-center my-6">
        <button
          onClick={toggleShowMore}
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4 text-center">Skills</h3>
        <div className="flex flex-wrap justify-center">
          {[
            "React.js",
            "Tailwind CSS",
            "JavaScript",
            "HTML & CSS",
            "Git",
            "TypeScript",
          ].map((skill) => (
            <span
              key={skill}
              className="m-2 p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/habyarimana-caleb-517555285"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/habyarimanacaleb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-800 hover:text-gray-900 transition"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-600 transition"
          >
            <Twitter size={20} /> Twitter
          </a>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://docs.google.com/document/d/1VI7BdVxgoHcXpCeDhGMUx0Ds-ElOsV3tJMVFTlteiPU/edit?usp=sharing"
          download
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          <FileDown size={18} /> Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
