"use client"
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from 'next/image';

const items = [
  {
    id: 1,
    image: '/Image.png',
    title: 'Nike Air Max Pulse',
    gender: 'Men s shoes',
    price: 13.99,
    
  },
  {
    id: 2,
    image: '/Image2.png',
      title: 'Nike Air Max Pulse',
    gender: 'Men s shoes',
    price: 13.99,
  },
  {
    id: 3,
    image: '/Image3.png',
      title: 'Nike Air Max 97 SE',
    gender: 'Men s shoes',
    price: 16.99,
  },{
    id: 4,
    image: '/Image.png',
      title: 'Nike Air Max Pulse',
    gender: 'Men s shoes',
    price: 13.99,
  },
  {
    id: 5,
    image: '/Image2.png',
    title: 'Nike Air Max Pulse',
    gender: 'Men s shoes',
    price: 13.99,
  },
  {
    id: 6,
    image: '/Image3.png',
    title: 'Nike Air Max 97 SE',
    gender: 'Men s shoes',
    price: 16.99,
  },
  // Add more items as needed
];
const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mt-96 px-10">
          <div className="overflow-hidden">
              <h1 className='text-lg px-4 font-semibold mb-4'>Best of Air Max</h1>
        <div
          className="flex transition-transform duration-500 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div className="bg-white shadow-md rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={256}
                  width={100}
                  
                  className="w-full h-64 object-cover"
                />
                <div className="p-2 flex">
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.title}
                  <p className='text-sm text-gray-600 '>{item.gender}</p>
                          </h3>
                        
                  <p className="text-gray-800 ml-36">{item.price.toFixed(2)} €</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={handlePrevious}
          className="bg-white rounded-full   hover:bg-gray-200 focus:outline-none"
        >   
          <FaChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white rounded-full  mr-20 hover:bg-gray-200 focus:outline-none"
        >
          <FaChevronRight className="h-6 w-6 text-gray-800 " />
        </button>
      </div>
    </div>
  );
};

export default Slider;