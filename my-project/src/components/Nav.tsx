import React from "react";
import { NavLink } from "react-router-dom";

type NavLinkProps = {
  isActive: boolean;
};

const NavigationBar: React.FC = () => {
  return (
    <nav className="flex justify-around items-center p-4 shadow">
      <NavLink to="/">
        <img
          src="https://avatars.githubusercontent.com/u/148393487?v=4"
          alt="My Profile"
          className="h-16 w-16 rounded-full"
        />
      </NavLink>
      <ul className="navbar flex justify-between items-center font-bold">
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
    </nav>
  );
};

export default NavigationBar;
