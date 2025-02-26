import React, { useState } from "react";
import WebDevelopment from './Pricing/WebDevelopment/WebDevelopment';
import AppDevelopment from './Pricing/AppDevelopment/AppDevelopment';
import POSSolution from './Pricing/POSSolution/POSSolution';
import Network from './Pricing/Network/Network';
import CCTV from './Pricing/CCTV/CCTV';

const ServiceBarWithDetailedCards = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab); // Toggle active tab
  };

  const services = [
    { name: "Web Development", component: <WebDevelopment /> },
    { name: "App Development", component: <AppDevelopment /> },
    { name: "POS Solution", component: <POSSolution /> },
    { name: "Network", component: <Network /> },
    { name: "CCTV", component: <CCTV /> },
  ];

  return (
    <div className="bg-primary py-8">
      <div className="container mx-auto px-6">
        {/* Status Bar */}
        <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-center sm:space-x-8 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`cursor-pointer text-lg font-medium rounded-full py-2 px-4 transition-all duration-300 ${
                activeTab === service.name
                  ? "bg-gradient-to-r from-blue-500 to-lightblue-600 text-white shadow-lg"
                  : "text-white hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick(service.name)}
            >
              {service.name}
            </div>
          ))}
        </div>

        {/* Content Display for Active Tab */}
        <div className="mt-8 flex flex-col items-center">
          {activeTab &&
            services
              .filter((service) => service.name === activeTab)
              .map((service) => (
                <div key={service.name} className="w-full">
                  {service.component}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBarWithDetailedCards;
