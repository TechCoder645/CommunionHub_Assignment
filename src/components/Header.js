import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logocommunion.png"; // Adjust path if necessary

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <img src={logo} alt="Communion Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-800">
          <li>
            <Link to="/" className="hover:text-blue-600 font-semibold ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-blue-600 font-semibold">
              Events
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 font-semibold">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
