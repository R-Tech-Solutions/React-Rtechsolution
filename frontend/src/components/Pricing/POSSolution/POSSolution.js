import React, { useState } from "react";
const images = [
  require("../../../assets/Pos/1.jpg"),
  require("../../../assets/Pos/2.jpg"),
  require("../../../assets/Pos/3.jpg"),
  require("../../../assets/Pos/4.jpg"),
  require("../../../assets/Pos/5.jpg"),
];

function POSPackages() {
  const packages = [
    {
      title: "Starter Super Market POS System",
      features: [
        "Cloud Based Setup (Online Access From Anywhere & Any Device)",
        "2 Virtual CPU",
        "4 GB",
        "No Setup Fee (Free System Setup)",
        "Initial Training ( Free Training )",
        "Sales Reporting Feature",
        "Point Of Sales Feature",
        "Inventory ( Store Management) Feature",
        "Expenses Management Feature",
        "CRM Feature",
        "Employee Management Feature",
        "Purchasing And Supplier Management Feature",
      ],
      pricing: {
        monthly: {
          single: "5000/- (Single User)",
          additional: "2500/- (Additional User)",
        },
        annually: {
          single: "50000/- (Single User)",
          additional: "25000/- (Additional User)",
        },
      },
      package:
        "Full POS Package With Cash-Draw , Printer , PC , Touch Screen Monitor , Keyboard , Mouse , 2D Bar-Code Reader : 175,000/- [125,000 (For Hardware) +50,000 (For Software)]",
    },
    {
      title: "Starter Electronic Shops POS System",
      features: [
        "Cloud Based Setup (Online Access From Anywhere & Any Device)",
        "1 Virtual CPU",
        "2 GB",
        "No Setup Fee (Free System Setup)",
        "Initial Training ( Free Training )",
        "Sales Reporting Feature",
        "Point Of Sales Feature",
        "Inventory ( Store Management) Feature",
        "Expenses Management Feature",
        "CRM Feature",
        "Employee Management Feature",
        "Purchasing And Supplier Management Feature",
      ],
      pricing: {
        monthly: {
          single: "5000/- (Single User)",
          additional: "2500/- (Additional User)",
        },
        annually: {
          single: "50000/- (Single User)",
          additional: "25000/- (Additional User)",
        },
      },
      package:
        "Full POS Package With Cash-Draw , Printer , PC , Touch Screen Monitor , Keyboard , Mouse , 2D Bar-Code Reader : 175,000/- [125,000 (For Hardware) +50,000 (For Software)]",
    },
    {
      title: "Small Scale Restaurant POS System",
      features: [
        "Cloud Based Setup (Online Access From Anywhere & Any Device)",
        "1 Virtual CPU",
        "2 GB",
        "No Setup Fee (Free System Setup)",
        "Initial Training ( Free Training )",
        "Sales Reporting Feature",
        "Point Of Sales Feature",
        "Inventory ( Store Management) Feature",
        "Expenses Management Feature",
        "CRM Feature",
        "Employee Management Feature",
        "Purchasing And Supplier Management Feature",
      ],
      pricing: {
        monthly: {
          single: "5000/- (Single User)",
          additional: "2500/- (Additional User)",
        },
        annually: {
          single: "50000/- (Single User)",
          additional: "25000/- (Additional User)",
        },
      },
      package:
        "Full POS Package With Cash-Draw , Printer , PC , Touch Screen Monitor , Keyboard , Mouse , 2D Bar-Code Reader : 155,000/- [105,000 (For Hardware) +50,000 (For Software)]",
    },
    {
      title: "Small Scale Restaurant POS System",
      features: [
        "Cloud Based Setup (Online Access From Anywhere & Any Device)",
        "1 Virtual CPU",
        "2 GB",
        "No Setup Fee (Free System Setup)",
        "Initial Training ( Free Training )",
        "Sales Reporting Feature",
        "Point Of Sales Feature",
        "Inventory ( Store Management) Feature",
        "Expenses Management Feature",
        "CRM Feature",
        "Employee Management Feature",
        "Purchasing And Supplier Management Feature",
      ],
      pricing: {
        monthly: {
          single: "5000/- (Single User)",
          additional: "2500/- (Additional User)",
        },
        annually: {
          single: "50000/- (Single User)",
          additional: "25000/- (Additional User)",
        },
      },
      package:
        "Full POS Package With Cash-Draw , Printer , PC , Touch Screen Monitor , Keyboard , Mouse , 2D Bar-Code Reader : 155,000/- [105,000 (For Hardware) +50,000 (For Software)]",
    },
    {
      title: "Small Scale Restaurant POS System",
      features: [
        "Cloud Based Setup (Online Access From Anywhere & Any Device)",
        "1 Virtual CPU",
        "2 GB",
        "No Setup Fee (Free System Setup)",
        "Initial Training ( Free Training )",
        "Sales Reporting Feature",
        "Point Of Sales Feature",
        "Inventory ( Store Management) Feature",
        "Expenses Management Feature",
        "CRM Feature",
        "Employee Management Feature",
        "Purchasing And Supplier Management Feature",
      ],
      pricing: {
        monthly: {
          single: "5000/- (Single User)",
          additional: "2500/- (Additional User)",
        },
        annually: {
          single: "50000/- (Single User)",
          additional: "25000/- (Additional User)",
        },
      },
      package:
        "Full POS Package With Cash-Draw , Printer , PC , Touch Screen Monitor , Keyboard , Mouse , 2D Bar-Code Reader : 155,000/- [105,000 (For Hardware) +50,000 (For Software)]",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ${expanded === index ? 'z-10 transform scale-105' : 'transform scale-100'}`}
            onMouseEnter={() => setExpanded(index)}
            onMouseLeave={() => setExpanded(null)}
          >
            <div className="p-4">
              <h2 className="text-blue-600 text-lg font-bold mb-2">{pkg.title}</h2>

              <div className="w-full h-32 mx-auto mb-4">
                <img
                  src={images[index]}
                  alt="POS System"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <ul className={`space-y-1 mb-4 transition-max-height duration-500 ease-in-out ${expanded === index ? 'max-h-full' : 'max-h-20 overflow-hidden'}`}>
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-1">•</span>
                    <span className="text-xs">{feature}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => toggleExpand(index)} className="text-blue-600 text-xs">
                {expanded === index ? 'Show Less ▲' : 'Show More ▼'}
              </button>
              <div className="space-y-1 mt-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-300 p-2 rounded">
                    <h3 className="font-bold mb-1">Monthly</h3>
                    <p className="text-xs">{pkg.pricing.monthly.single}</p>
                    <p className="text-xs">{pkg.pricing.monthly.additional}</p>
                  </div>
                  <div className="bg-blue-300 p-2 rounded">
                    <h3 className="font-bold mb-1">Annually</h3>
                    <p className="text-xs">{pkg.pricing.annually.single}</p>
                    <p className="text-xs">{pkg.pricing.annually.additional}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-center border-t pt-2">{pkg.package}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
}

export default POSPackages;

