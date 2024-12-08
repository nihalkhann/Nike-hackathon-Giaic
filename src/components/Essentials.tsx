import React from 'react';
import Image from "next/image";
const Essentials = () => {
  const essentials = [
    {
      category: 'Men\'s',
      items: ['Air Force 1', 'Huarache', 'Air Max 95'],
    },
    {
      category: 'Women\'s',
      items: ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes'],
    },
    {
      category: 'Clothing',
      items: ['All Clothing', 'Marked Wear', 'Hoodies & Pullovers', 'Shirts & Tops'],
    },
    {
      category: 'Kids',
      items: ['Infant & Toddler Shoes', 'Kids\' Shoes', 'Kids\' Jordan Shoes', 'Kids\' Basketball Shoes'],
    },
  ];

  return (
    <div className="bg-white mt-auto  py-8 sm:py-12 lg:py-16">
          <h1>The Essentials</h1>
          <div className='flex flex-col-3 px-6 gap-2'>
              <Image
                  src="/Image (10).png"
                  height={540}
                  width={440}    
                  alt='pic'
                  >
              </Image>
              <Image
                  src="/Image (11).png"
                  height={540}
                  width={440}    
                  alt='pic'
                  >
              </Image>
              <Image
                  src="/Image (12).png"
                  height={540}
                  width={440}    
                  alt='pic'
                  >
              </Image>
                  
                  
          </div>
      <div className="container mx-auto mt-5 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {essentials.map((essential, index) => (
              <div key={index} className="flex flex-col items-center">

              <h3 className="text-lg font-bold mb-2">{essential.category}</h3>
              <ul className="space-y-1">
                {essential.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Essentials;