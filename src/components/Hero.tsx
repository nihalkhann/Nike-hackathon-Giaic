// import React from 'react';
// import Image from 'next/image';
// const Hero = () => {
//   return (

//     <div className="relative w-[1344px] h-screen bg-gray-100 flex justify-center items-center sm:px-4 lg:px-8">
//       <div className="absolute  left-0 w-full h-full">
//         <Image
//           src="/hero.png"
//           alt="Nike Air Max Pulse"
//           width={1344}
//           height={925}
//           className="w-full h-full object-cover px-10"
//         />
//       </div>
//       <div className="absolute w-[1008px] h-[229px] left-[168px] top-[748px] mr-4">
        
//               <div className="px-4 py-6 md:px-8 md:py-8">
//                   <h2 className='text-md text-center mb-4 '>First Look</h2>
//           <h1 className="text-5xl font-bold text-center  mr-3 mb-2 ">NIKE AIR MAX PULSE</h1>
//           <p className="text-gray-700 mb-2 w-[511px] ml-52 text-center">
//             Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
//             — designed to push you past your limits and help you go to the max.
//           </p>
//           <div className="flex justify-between items-center  ">
//             <button className="bg-black text-white rounded-lg px-2 py-2 hover:bg-gray-800 transition-colors duration-300">
//               Notify Me
//             </button>
//             <button className="bg-black text-white rounded-lg px-2 py-2 hover:bg-gray-800 transition-colors duration-300">
//               Shop Air Max
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Hero;

"use client"
import Image from "next/image"
import Link from "next/link"    
export default function Hero(){
    return(
        <section className="flex justify-center flex-col items-center bg-[#fafafa] m-4 ">
            <div className="flex justify-center flex-col items-center pb-4">
            <h3 className="text-xl text-black font-bold">Hello Nike App</h3>
         <p className="text-sm text-gray-600" >
         <span>Download the app to access everything Nike.</span>{" "}
           <Link href={"/"} className="underline font-semibold text-gray-800"> Get Your Great</Link>
        </p>
            </div>
    
            
            <Image src={"/Hero.png"} alt={"shoes"} width={1344} height={700} className="rounded-md"/>
            <div className="flex justify-center items-center flex-col py-10 pt-4 text-center 
            ">
                <p className="text-sm text-center font-semibold">First Look</p>
                <h2 className="text-[24px]  md:text-4xl font-bold uppercase">Nike Air Max Pulse</h2>
                <p  className="text-sm leading-5 w-full pt-3 pb-2 text-center
                lg:w-[60%]">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                —designed to push you past your limits and help you go to the max.
           
                </p>
          <div className="flex justify-center items-center gap-3">
            <button className="bg-black text-white rounded-lg px-2 py-2 hover:bg-gray-800 transition-colors duration-300">
              Notify Me
            </button>
            <button className="bg-black text-white rounded-lg px-2 py-2 hover:bg-gray-800 transition-colors duration-300">
              Shop Air Max
            </button>
                </div>
            </div>
        </section>
    )
    
}