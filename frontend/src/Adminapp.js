import React, { useState } from "react";
import {
  FaHome,
  FaBars,
  FaAppStore,
  FaTachometerAlt,
  FaStar,
  FaUsers,
  FaDollarSign,
  FaBlog,
  FaRocket,
  FaArrowLeft,
  FaTimes,
} from "react-icons/fa";
import TestimonialsManager from "./components/admin/TestimonialForm";
import Carears from "./components/Carears";
import TeamManagement from "./components/admin/TeamManagement";
import App from "./components/admin/Appstore";
import { Tooltip } from "@mui/material";
import Pricing from "./components/admin/Pos"

const Adminapp = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [compactSidebar, setCompactSidebar] = useState(false);

  const menuItems = [
    { page: "dashboard", icon: FaTachometerAlt, label: "Dashboard" },
    { page: "testimonials", icon: FaStar, label: "Testimonials" },
    { page: "satisfiedClients", icon: FaUsers, label: "Satisfied Clients" },
    { page: "team", icon: FaUsers, label: "Team" },
    { page: "pricing", icon: FaDollarSign, label: "Pricing" },
    { page: "blog", icon: FaBlog, label: "Blog" },
    { page: "App", icon: FaAppStore, label: "App" },
    { page: "getStarted", icon: FaRocket, label: "Get Started" },
    { page: "home", icon: FaHome, label: "Home" },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <h1 className="text-center text-2xl mt-10">Welcome to Dashboard</h1>;
      case "testimonials":
        return <TestimonialsManager />;
      case "satisfiedClients":
        return <h1 className="text-center text-2xl mt-10">Satisfied Clients</h1>;
      case "team":
        return <TeamManagement />;
      case "pricing":
        return <Pricing />; 
      case "blog":
        return <h1 className="text-center text-2xl mt-10">Blog</h1>;
      case "App":
        return <App />;
      case "getStarted":
        return <h1 className="text-center text-2xl mt-10">Get Started</h1>;
      case "home":
        return <Carears />;
      default:
        return <h1 className="text-center text-2xl mt-10">Page Not Found</h1>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-[#005880] text-white transition-all duration-300 shadow-lg ${
          compactSidebar ? "w-20" : "w-64"
        } lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex items-center justify-between border-b border-blue-700">
          <span className={`text-xl font-bold transition-all ${compactSidebar ? "hidden" : "block"}`}>Navigation</span>
          <button className="text-white focus:outline-none" onClick={() => setCompactSidebar(!compactSidebar)}>
            {compactSidebar ? <FaBars /> : <FaArrowLeft />}
          </button>
        </div>

        <ul className="mt-4 space-y-2">
          {menuItems.map(({ page, icon: Icon, label }) => (
            <li
              key={page}
              onClick={() => setActivePage(page)}
              className={`p-3 flex items-center cursor-pointer transition-all rounded-lg ${
                activePage === page ? "bg-blue-700" : "hover:bg-blue-600"
              }`}
            >
              <Tooltip title={compactSidebar ? label : ""} placement="right">
                <Icon className="inline-block mr-3 text-lg" />
              </Tooltip>
              <span className={`${compactSidebar ? "hidden" : "block"} transition-all`}>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Toggle Button (Mobile) */}
      <button
        className="lg:hidden fixed top-4 left-4 bg-[#005880] text-white p-2 rounded-md focus:outline-none"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </button>

      {/* Main Content */}
      <div className={`flex-grow transition-all duration-300 p-6 ${sidebarOpen ? (compactSidebar ? "ml-20" : "ml-64") : "ml-0"}`}>
        {renderPage()}
      </div>
    </div>
  );
};

export default Adminapp;
