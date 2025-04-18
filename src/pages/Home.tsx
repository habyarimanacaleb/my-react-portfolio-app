import React from "react";
import { Link } from "react-router-dom";
import styles from "../pages/Home.module.css";
import { TypeAnimation } from "react-type-animation";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-blue-700">
          <TypeAnimation
            sequence={[
              "Welcome to My Portfolio",
              1000,
              "Front-End Developer",
              1000,
              "React & Tailwind Expert",
              1000,
              "Creative UI Builder",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p
          className={`text-lg text-gray-700 mb-8 animate-fade-in ${styles.textLg}`}
        >
          I'm a Front-End Developer skilled in building responsive,
          user-friendly websites using React.js, Tailwind CSS, and modern web
          practices.
        </p>
        <Link
          to="/contact"
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-pulse"
        >
          Get in Touch
        </Link>
      </section>

      {/* Introduction Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6 animate-fade-in">About Me</h2>
        <p
          style={styles}
          className="text-lg text-gray-700 mb-4 animate-fade-in"
        >
          With a passion for creating interactive and seamless user experiences,
          I aim to make websites that are both functional and visually
          appealing. I constantly strive to stay updated with the latest
          technologies and trends in web development.
        </p>
        <p className="text-gray-700 mb-4 animate-fade-in">
          Beyond just coding, I enjoy solving real-world problems through
          digital interfaces. I thrive in team environments and love learning
          from collaborative efforts as well as mentoring others when I can.
        </p>
        <Link
          to="/about"
          className="py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 animate-pulse"
        >
          Learn More
        </Link>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <div className="flex flex-wrap justify-center">
          <span className="m-2 p-2 bg-gray-200 rounded-lg">React.js</span>
          <span className="m-2 p-2 bg-gray-200 rounded-lg">Tailwind CSS</span>
          <span className="m-2 p-2 bg-gray-200 rounded-lg">JavaScript</span>
          <span className="m-2 p-2 bg-gray-200 rounded-lg">HTML & CSS</span>
          <span className="m-2 p-2 bg-gray-200 rounded-lg">Git</span>
          <span className="m-2 p-2 bg-gray-200 rounded-lg">TypeScript</span>
          <span className="m-2 p-2 bg-blue-100 text-blue-800 font-semibold rounded-lg shadow-sm">
            UI/UX Principles
          </span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6 animate-fade-in">My Projects</h2>
        <p className="text-lg text-gray-700 mb-4 animate-fade-in">
          Explore some of my most recent works, ranging from personal designs to
          professional freelance jobs. Each one reflects my growth and
          creativity as a developer.
        </p>
        <div className="mb-6">
          <p className="text-gray-600 text-sm italic">
            <strong>Bonus:</strong> I’ve also worked on full-stack blog
            websites, tourism platforms, renting apps, and more!
          </p>
          <p className="text-gray-600 text-sm">
            I am always eager to collaborate on new challenges. Let’s build
            something amazing together.
          </p>
        </div>
        <Link
          to="/projects"
          className="py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 animate-pulse"
        >
          View Projects
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 animate-fade-in">
          Testimonials
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg m-4 animate-fade-in">
            <p className="text-gray-700 mb-4">
              "An excellent developer who delivers high-quality work on time."
            </p>
            <p className="font-bold">Jean D'Moul</p><br />
            <span>CEO & Co_Founder</span><br />
            <span>Ibirwa Kivu Biking Tours</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg m-4 animate-fade-in">
            <p className="text-gray-700 mb-4">
              "A pleasure to work with, always goes above and beyond."
            </p>
            <p className="font-bold">Hitayezu j.Pierr</p>
            <span>Student</span><br />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6 animate-fade-in">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8 animate-fade-in">
          Interested in working together? I’d love to hear your ideas. Whether
          it’s a new startup, a redesign, or just a quick question, feel free to
          reach out!
        </p>
        <Link
          to="/contact"
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-pulse"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
};

export default Home;
