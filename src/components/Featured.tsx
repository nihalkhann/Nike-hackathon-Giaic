import React from 'react';
import Image from 'next/image';

const Featured: React.FC = () => {
  return (
    <div className="w-[1330px] h-[977px] mx-auto my-10 md:px-0 mb-60">
          <div className="items-center gap-8">
              <h1 className='font-bold text-2xl mb-4 ml-10'>Featured Products</h1>
        <div className="md:w-1/2">
          <Image
            src="/feature.png"
            alt="Step into what feels good"
            height={925}
            width={1330}
            className="max-w-[1344px] h-[925px] px-10 rounded-lg"
          />
        </div>
        <div className=" text-center">
          <h2 className="text-6xl font-bold mb-4 mt-6">STEP INTO WHAT FEELS GOOD</h2>
          <p className="text-gray-600 mb-10 text-sm">
            Casual everyone should know the feeling of success in its perfect pair.
          </p>
          <button className="bg-black hover:text-gray-500 text-white font-bold py-3 px-6 rounded-full mt-6 mb-32">
            Find your Shoe
          </button>
        </div>
      </div>
    </div> 
  );
};
export default Featured;