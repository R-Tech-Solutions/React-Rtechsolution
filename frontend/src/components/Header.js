import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/images/brand.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServicesDropdown = () =>
    setIsServicesDropdownOpen(!isServicesDropdownOpen);

  return (
    <header>
      {/* Desktop Header */}
      <nav className="hidden lg:flex items-center justify-between py-6 px-8 lg:px-24 border-b border-gray-100 bg-white">
        <div className="logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="company-logo"
              style={{ width: '90px', height: '90px' }}
            />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="text-primary text-sm font-medium flex items-center hover:opacity-80 transition-opacity"
            >
              Services
              <img
                src="https://img.icons8.com/?size=100&id=87429&format=png&color=000000"
                alt="chevron down"
                className="ml-2"
                style={{ width: '16px', height: '16px' }}
              />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-md w-48 z-10">
                <Link
                  to="/services/app-development"
                  className="block text-primary text-sm font-medium hover:bg-gray-100 px-4 py-2 transition-opacity"
                >
                  App Development
                </Link>
                <Link
                  to="/services/web-development"
                  className="block text-primary text-sm font-medium hover:bg-gray-100 px-4 py-2 transition-opacity"
                >
                  Web Development
                </Link>
                <Link
                  to="/services/pos-system"
                  className="block text-primary text-sm font-medium hover:bg-gray-100 px-4 py-2 transition-opacity"
                >
                  POS Development
                </Link>
                <Link
                  to="/services/cctv-installation"
                  className="block text-primary text-sm font-medium hover:bg-gray-100 px-4 py-2 transition-opacity"
                >
                  CCTV Installation
                </Link>
                <Link
                  to="/services/networking"
                  className="block text-primary text-sm font-medium hover:bg-gray-100 px-4 py-2 transition-opacity"
                >
                  Networking
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/pricing"
            className="text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Pricing
          </Link>
          <Link
            to="/portfolio"
            className="text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Blog
          </Link>
          <Link to="/getstarted">
            <button className="bg-primary text-white text-sm font-medium px-8 py-2.5 rounded hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Header */}
      <nav className="lg:hidden py-6 px-8 flex items-center justify-between border-b border-gray-100 bg-white">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-500 text-xl hover:text-gray-800"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 256 256"
            fill="currentColor"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="40"
              y1="128"
              x2="216"
              y2="128"
              stroke="currentColor"
              strokeWidth="16"
            ></line>
            <line
              x1="40"
              y1="64"
              x2="216"
              y2="64"
              stroke="currentColor"
              strokeWidth="16"
            ></line>
            <line
              x1="40"
              y1="192"
              x2="216"
              y2="192"
              stroke="currentColor"
              strokeWidth="16"
            ></line>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="mobile-menu bg-white w-4/5 h-full absolute top-0 left-0 p-6">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 text-xl absolute top-2 right-2 hover:text-gray-800"
            >
              {/* Close Button Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 256 256"
                fill="currentColor"
              >
                <line
                  x1="200"
                  y1="56"
                  x2="56"
                  y2="200"
                  stroke="currentColor"
                  strokeWidth="16"
                ></line>
                <line
                  x1="200"
                  y1="200"
                  x2="56"
                  y2="56"
                  stroke="currentColor"
                  strokeWidth="16"
                ></line>
              </svg>
            </button>
            <ul className="mt-8 space-y-4">
              <li>
                <Link
                  to="/pricing"
                  className="text-primary text-lg font-medium hover:opacity-80"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-primary text-lg font-medium hover:opacity-80"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-primary text-lg font-medium hover:opacity-80"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/getstarted"
                  className="text-primary text-lg font-medium hover:opacity-80"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
