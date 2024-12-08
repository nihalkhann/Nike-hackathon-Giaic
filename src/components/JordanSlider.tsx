"use client"
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from 'next/image';

const products = [
  {
    id: 1,
    image: '/j1.png',
    title: 'Nike Dri-FIT ADV TechKnit Ultra',
    price: '$39.95',
    category: 'Men\'s Short-Sleeve Running Top',
  },
  {
    id: 2,
    image: '/j2.png',
    title: 'Nike Dri-FIT Challenger',
    price: '$24.95',
    category: 'Men\'s 7" Lined Shorts',
  },
  {
    id: 3,
    image: '/j3.png',
    title: 'Nike Dri-FIT ADV Run Division',
    price: '$52.95',
    category: 'Women\'s Long-Sleeve Running Top',
  },
  {
    id: 4,
    image: '/j4.png',
    title: 'Nike Fast',
    price: '$37.95',
    category: 'Women\'s Mid-Rise/7/8 Running Leggings with Pockets',
  },{
    id: 5,
    image: '/j1.png',
    title: 'Nike Dri-FIT ADV TechKnit Ultra',
    price: '$39.95',
    category: 'Men\'s Short-Sleeve Running Top',
  },
  {
    id: 6,
    image: '/j2.png',
    title: 'Nike Dri-FIT Challenger',
    price: '$24.95',
    category: 'Men\'s 7" Lined Shorts',
  },
  {
    id: 7,
    image: '/j3.png',
    title: 'Nike Dri-FIT ADV Run Division',
    price: '$52.95',
    category: 'Women\'s Long-Sleeve Running Top',
  },
  {
    id: 8,
    image: '/j4.png',
    title: 'Nike Fast',
    price: '$37.95',
    category: 'Women\'s Mid-Rise/7/8 Running Leggings with Pockets',
  },
];

const JordanSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-x-auto snap-x snap-mandatory -mx-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-4 snap-center ${
              index === currentIndex ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={product.image} alt={product.title} height={256}  width={150} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.title}</h3>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-lg font-medium">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full shadow"
          onClick={handlePrevious}
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full shadow"
          onClick={handleNext}
        >
          <FaChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default JordanSlider;