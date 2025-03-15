import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/Logocommunion.png'; 
import '../styles/fade.css';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 fade-in">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img
              src={logo} // Use the imported logo variable
              alt="Communion Logo"
              className="w-28 mx-auto md:mx-0"
            />
            <p className="text-gray-600 mt-4">
              Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <span className="text-gray-600 hover:text-gray-800">
                <FaFacebookF />
              </span>
              <span className="text-gray-600 hover:text-gray-800">
                <FaTwitter />
              </span>
              <span className="text-gray-600 hover:text-gray-800">
                <FaInstagram />
              </span>
              <span className="text-gray-600 hover:text-gray-800">
                <FaYoutube />
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Company</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
                <li><a href="/events/upcoming" className="text-gray-600 hover:text-gray-800">Events</a></li>
                <li><a href="/view-leaders" className="text-gray-600 hover:text-gray-800">About</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:contact@communionhub.org"
                    className="text-gray-600 hover:text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    contact@communionhub.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-gray-300 pt-6">
          <p className="text-gray-600 mb-4">
            Copyright © 2024. All rights reserved to Communion
          </p>
          <div className="flex justify-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">Privacy Policy</button>
            <button className="text-gray-600 hover:text-gray-800">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;