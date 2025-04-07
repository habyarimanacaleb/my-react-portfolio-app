import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing Font Awesome icons

type NavLinkProps = {
  isActive: boolean;
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <NavLink to="/">
            <img
              src="images/logo.png"
              alt="My Profile"
              className="h-14 w-14 rounded-full mb-4 md:mb-0"
            />
          </NavLink>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 font-bold items-center">
            <li className="hover:underline transition duration-300">
              <NavLink
                to="/"
                className={({ isActive }: NavLinkProps) =>
                  isActive ? "text-blue-500" : ""
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="hover:underline transition duration-300">
              <NavLink
                to="/about"
                className={({ isActive }: NavLinkProps) =>
                  isActive ? "text-blue-500" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="hover:underline transition duration-300">
              <NavLink
                to="/project"
                className={({ isActive }: NavLinkProps) =>
                  isActive ? "text-blue-500" : ""
                }
              >
                Project
              </NavLink>
            </li>
            <li className="hover:underline transition duration-300">
              <NavLink
                to="/contact"
                className={({ isActive }: NavLinkProps) =>
                  isActive ? "text-blue-500" : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://facebook.com"
            className="text-2xl hover:text-blue-500 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            className="text-2xl hover:text-blue-500 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/habyarimana-caleb-517555285/"
            className="text-2xl hover:text-blue-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            className="text-2xl hover:text-blue-500 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-6 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
