import React from 'react';
import { FaMobileAlt, FaLaptopCode, FaGlobe, FaCashRegister, FaCamera } from 'react-icons/fa';
import App from '../assets/images/App21.png';
import Web from '../assets/images/web21.png';
import Pos from '../assets/images/pos.jpg';
import Cctv from '../assets/images/cctv.png';
import Network from '../assets/images/network.png';
import { Link } from 'react-router-dom';

const ServicesShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-extrabold text-center text-[#005880]">
        Our Services
      </h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 px-4 md:px-16 lg:px-36 py-8">
        {/* App Development Section */}
        <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300">
          <FaMobileAlt className="text-6xl text-blue-600 mb-4" />
          <h2 className="text-3xl font-semibold text-blue-600 mb-4 text-left">APP Development</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We craft stunning mobile apps using Flutter, delivering smooth cross-platform experiences for iOS and Android.
          </p>
          <Link
            to="/services/app-development"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded inline-block"
          >
            Explore APPS
          </Link>
        </div>

        {/* Web Development Section */}
        <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300">
          <FaLaptopCode className="text-6xl text-green-600 mb-4" />
          <h2 className="text-3xl font-semibold text-green-600 mb-4 text-left">WEB Development</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
          Transform your business with our cutting-edge Point of Sale system. Boost efficiency, track sales, and grow your revenue with ease.
          </p>
          <Link
            to="/services/web-development"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded inline-block"
          >
          Discover WEB
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300">
          <FaCashRegister className="text-6xl text-orange-600 mb-4" />
          <h2 className="text-3xl font-semibold text-orange-600 mb-4 text-left">POS System</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
          Secure your premises with state-of-the-art surveillance systems. We specialize in professional CCTV installations using top-tier equipment.
          </p>
          <Link
            to="/services/pos-system"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded inline-block"
          >
          Discover POS
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300">
          <FaCamera className="text-6xl text-yellow-500 mb-4" />
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4 text-left">CCTV Installation</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
          Secure your premises with state-of-the-art surveillance systems. We specialize in professional CCTV installations using top-tier equipment.
          </p>
          <Link
            to="/services/cctv-installation"
             className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded inline-block"
          >
          Discover CCTV
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition duration-300">
          <FaGlobe className="text-6xl text-purple-600 mb-4" />
          <h2 className="text-3xl font-semibold text-purple-600 mb-4 text-left">NETWORKING</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
          Empower your business with cutting-edge networking solutions. We design, implement, and maintain robust network infrastructures that drive efficiency and growth.
          </p>
          <Link
            to="/services/networking"
            className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded inline-block"
          >
          Discover NETWORK
          </Link>
        </div>
      </div>

      {/* App Development Showcase */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">How We Build Amazing Apps</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src={App}
              alt="App Development Process"
              className="w-[540px] h-[350px] rounded-[25px] shadow-lg shadow-black"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 text-left">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Flutter Magic</h3>
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li>Rapid prototyping and development</li>
              <li>Beautiful, native-like UI across platforms</li>
              <li>Smooth animations and transitions</li>
              <li>Efficient performance optimization</li>
              <li>Seamless integration with backend services</li>
            </ul>
            <Link
            to="/services/app-development"
            className="mt-6 bg-blue-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
          >
            Start Your App Project
          </Link>
            <button className="mt-6 font-bold py-2 px-6 rounded">
             
            </button>
          </div>
        </div>
      </div>


      {/* Web Development Highlight */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Cutting-Edge Web Solutions</h2>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src={Web}
              alt="Web Development Process"
              className="w-[540px] h-[350px] rounded-[25px] shadow-lg shadow-black"
            />
          </div>
          <div className="sm:text-left md:text-right md:w-1/2 md:pr-8">
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li>React.js for building interactive user interfaces</li>
              <li>Node.js for robust backend development</li>
              <li>Laravel for PHP-based enterprise solutions</li>
            </ul>
            <button className="mt-6  hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
              
              </button>
            <Link
            to="/services/web-development"
            className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded inline-block mt-5"
          >
          Explore Web Development
          </Link>

          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Revolutionizing Point-of-Sale Systems</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src={Pos}
              alt="App Development Process"
              className="w-[540px] h-[350px] rounded-[25px] shadow-lg shadow-black"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 text-left">
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li>Mobile POS for on-the-go transactionst</li>
              <li>Retail and Restaurant POS for seamless operations</li>
              <li>Cloud-Based and eCommerce POS for real-time integration</li>
              <li>Self-Service Kiosks for customer convenience</li>
              <li>Salon and Spa POS for appointment management</li>
              <li>Enterprise and Industry-Specific POS tailored to your needs</li>
            </ul>
            <Link
            to="/services/pos-system"
            className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded"
          >
            Start Your Point-of-Sale Systems
          </Link>
            <button className="mt-6 py-2 px-6 rounded">
             
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Advanced Surveillance for Peace of Mind</h2>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src={Cctv}
              alt="Web Development Process"
              className="w-[540px] h-[350px] rounded-[25px] shadow-lg shadow-black"
            />
          </div>
          <div className="sm:text-left md:text-right md:w-1/2 md:pr-8">
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li>Uniview: Cutting-edge video surveillance technology</li>
              <li>Hikvision: Industry-leading security solutions</li>
              <li>Dahua: Smart monitoring systems with superior reliability</li>
            </ul>
            <button className="mt-6  hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
              
              </button>
              <br/>``
            <Link
            to="/services/cctv-installation"
            className="bg-yellow-500 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded inline-block mt-5"
          >
          Explore Experience Safety
          </Link>

          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Seamless Connectivity, Tailored for You</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src={Network}
              alt="App Development Process"
              className="w-[540px] h-[350px] rounded-[25px] shadow-lg shadow-black"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 text-left">
            <ul className="space-y-2 text-gray-600 leading-relaxed">
              <li>Cisco: Enterprise-grade networking for scalability and security</li>
              <li>Ruijie: Innovative solutions for intelligent connectivity</li>
              <li>NetGear: High-performance networking for homes and businesses</li>
            </ul>
            <br/>   
            <Link
            to="/services/networking"
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded"
          >
            Start Your Network Connection Today
          </Link>
            <button className="mt-6  text-white font-bold py-2 px-6 rounded">
             
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesShowcase;
    