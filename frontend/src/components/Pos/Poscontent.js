import React from 'react';
import { Link } from 'react-router-dom';
import POS1 from '../../assets/images/Retail POS.jpg';
import POS2 from '../../assets/images/Restaurent POS.jpg';
import POS3 from '../../assets/images/Mobile POS.jpg';
import POS4 from '../../assets/images/image (3).jpg';
import POS5 from '../../assets/images/image (4).jpg';
import POS6 from '../../assets/images/image (5).jpg';
import POS7 from '../../assets/images/image (6).jpg';
import POS8 from '../../assets/images/image (7).jpg';
import POS9 from '../../assets/images/image (8).jpg';
import POS10 from '../../assets/images/image (9).jpg';

const posModules = [
  { img: POS1, title: 'Supermarket POS Systems' },
  { img: POS2, title: 'Restaurant POS Systems' },
  { img: POS3, title: 'Groceries POS Systems' },
  { img: POS4, title: 'Saloon & Spa POS Systems' },
  { img: POS9, title: 'Enterprice POS Systems' },
  { img: POS10, title: 'E-commerce Pos Systems' },
  { img: POS10, title: 'Mobile POS Systems' },
  { img: POS10, title: 'Online Shop POS Systems' },
  { img: POS10, title: 'Cloud Based POS Systems' },
  { img: POS10, title: 'Pharmacy POS Systems' },
  { img: POS10, title: 'Cafes POS Systems' },
  { img: POS10, title: 'Mobile Shops POS Systems' },
  { img: POS10, title: 'Electronic Shops POS Systems' },
  { img: POS10, title: 'Computer Shops POS Systems' },
  { img: POS10, title: 'Repair Shops POS Systems' },
  { img: POS10, title: 'Textile Shops POS Systems' },
  { img: POS10, title: 'Hotels POS Systems' },
  { img: POS10, title: 'Clinics POS Systems' },
  { img: POS10, title: 'Book Shop POS Systems' },
  { img: POS10, title: 'Gym POS Systems' },
  { img: POS10, title: 'Delivery Buisness POS Systems' },
  { img: POS10, title: 'Accademy POS Systems' },
  { img: POS10, title: 'E Learning' },
];

function Poscontent() {
  return (
    <div>
      <h1 className="text-[#005880] text-4xl md:text-[64px] font-bold font-['Inria_Serif'] text-center">
      Explore POS Systems Across Various Sectors
      </h1>
      <div className="mb-10"></div>
      
      <div className="overflow-x-hidden">
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {posModules.map((pos, index) => (
            <Link
              key={index}
              to=""
              className="block text-center p-2 border border-gray-300 rounded-lg shadow-md bg-white h-48 flex flex-col justify-between"
            >
              <img
                src={pos.img}
                alt={pos.title}
                className="w-full h-24 object-cover rounded-lg"
              />
              <h3 className="text-xs font-medium mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
                {pos.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Poscontent;