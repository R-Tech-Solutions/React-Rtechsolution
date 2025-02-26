import React from 'react';
import Camera1 from '../../../assets/images/camera1.jpg';
import Camera2 from '../../../assets/images/wizminds.png';

const CCTV = () => {
  const services = [
    {
      title: "3MP 4 Cameras Set",
      advantages: ["Basic Installation", "Clear Video Quality", "Affordable Pricing"],
      price: "Rs 65,000 with installation",
      image: Camera1,
    },
    {
      title: "2MP 4 IP Cameras Set",
      advantages: ["High-Resolution Quality", "Remote Monitoring", "Advanced Setup"],
      price: "Starting from Rs 150,000 with installation",
      image: Camera2,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {services.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-72 md:w-80 flex-shrink-0"
        >
          <div className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              {item.title}
            </h3>
            <ul className="text-sm text-gray-600 list-disc list-inside mb-3">
              {item.advantages.map((adv, i) => (
                <li key={i}>{adv}</li>
              ))}
            </ul>
            <p className="text-lg font-bold text-center text-gray-800">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CCTV;
