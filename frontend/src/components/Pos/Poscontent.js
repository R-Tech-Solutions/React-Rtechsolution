import React from 'react';
import { Link } from 'react-router-dom';
import POS1 from '../../assets/Pos/1.jpg';
import POS2 from '../../assets/Pos/2.jpg';
import POS3 from '../../assets/Pos/3.jpg';
import POS4 from '../../assets/Pos/4.jpg';
import POS5 from '../../assets/Pos/5.jpg';
import POS6 from '../../assets/Pos/6.jpg';
import POS7 from '../../assets/Pos/7.jpg';
import POS8 from '../../assets/Pos/8.jpg';
import POS9 from '../../assets/Pos/9.jpg';
import POS10 from '../../assets/Pos/10.jpg';
import POS11 from '../../assets/Pos/11.jpg';
import POS12 from '../../assets/Pos/12.jpg';
import POS13 from '../../assets/Pos/13.jpg';
import POS14 from '../../assets/Pos/14.jpg';
import POS15 from '../../assets/Pos/15.jpg';
import POS16 from '../../assets/Pos/16.jpg';
import POS17 from '../../assets/Pos/17.jpg';
import POS18 from '../../assets/Pos/18.jpg';
import POS19 from '../../assets/Pos/19.jpg';
import POS20 from '../../assets/Pos/20.jpg';
import POS21 from '../../assets/Pos/22.jpg';
import POS22 from '../../assets/Pos/20.jpg';
import POS23 from '../../assets/Pos/21.jpg';


const posModules = [
  { img: POS1, title: 'Supermarket POS Systems' },
  { img: POS2, title: 'Restaurant POS Systems' },
  { img: POS3, title: 'Groceries POS Systems' },
  { img: POS4, title: 'Saloon & Spa POS Systems' },
  { img: POS5, title: 'Enterprice POS Systems' },
  { img: POS6, title: 'E-commerce Pos Systems' },
  { img: POS7, title: 'Mobile POS Systems' },
  { img: POS8, title: 'Online Shop POS Systems' },
  { img: POS9, title: 'Cloud Based POS Systems' },
  { img: POS10, title: 'Pharmacy POS Systems' },
  { img: POS11, title: 'Cafes POS Systems' },
  { img: POS12, title: 'Mobile Shops POS Systems' },
  { img: POS13, title: 'Electronic Shops POS Systems' },
  { img: POS14, title: 'Computer Shops POS Systems' },
  { img: POS15, title: 'Repair Shops POS Systems' },
  { img: POS16, title: 'Textile Shops POS Systems' },
  { img: POS17, title: 'Hotels POS Systems' },
  { img: POS18, title: 'Clinics POS Systems' },
  { img: POS19, title: 'Book Shop POS Systems' },
  { img: POS20, title: 'Gym POS Systems' },
  { img: POS21, title: 'Delivery Buisness POS Systems' },
  { img: POS22, title: 'Accademy POS Systems' },
  { img: POS23, title: 'E Learning' },
];

function Poscontent() {
  return (
    <div>
      <h1 className="text-[#005880] text-3xl md:text-[64px] font-bold font-['Inria_Serif'] text-center">
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