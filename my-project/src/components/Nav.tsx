import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lucide icons for burger/close

type NavLinkProps = {
  isActive: boolean;
};

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu on link click (for mobile UX)
  };

  return (
    <nav className="p-4 shadow bg-white z-50 relative">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <NavLink to="/">
          <img
            src="images/logo.png"
            alt="My Profile"
            className="h-14 w-14 rounded-full"
          />
        </NavLink>

        {/* Desktop Menu */}
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

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 px-6 font-semibold text-center">
          <li>
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }: NavLinkProps) =>
                isActive ? "text-blue-500" : ""
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className={({ isActive }: NavLinkProps) =>
                isActive ? "text-blue-500" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              onClick={handleLinkClick}
              className={({ isActive }: NavLinkProps) =>
                isActive ? "text-blue-500" : ""
              }
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className={({ isActive }: NavLinkProps) =>
                isActive ? "text-blue-500" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;
