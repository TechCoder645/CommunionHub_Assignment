import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logocommunion.png"; // Adjust path if necessary

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <img src={logo} alt="Communion Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-800">
          <li>
            <Link to="/" className="hover:text-blue-600 font-semibold">
              Home
            </Link>
          </li>

          {/* Events Dropdown */}
          <li className="relative">
            <button
              onClick={handleDropdownClick}
              className="hover:text-blue-600 font-semibold flex items-center"
            >
              Events <span className="ml-1">›</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                <ul className="py-2 text-gray-800">
                  <li>
                    <Link
                      to="/events/upcoming"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      Upcoming Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/events/create"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      Create Event
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600 font-semibold">
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={handleDropdownClick} className="text-gray-800">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isDropdownOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="py-2 text-gray-800">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/events/upcoming"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link
                to="/events/create"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                Create Event
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;