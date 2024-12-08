// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaRegHeart } from "react-icons/fa";
// import { CgSearch } from "react-icons/cg";
// import { BsBag } from "react-icons/bs";
// import { RxCross2 } from "react-icons/rx";


// const Header: React.FC = () => {
//   const [showPopup, setShowPopup] = useState(true);

//   const handlePopupClose = () => {
//     setShowPopup(false);
//   };

//   return (
//     <>
//       <header>
//         {/* Top Bar */}
//         <div className="bg-[#F5F5F5] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
//           <Image src="/Frame.png" alt="Frame" width={24} height={24} />
//           <Link href="#" className="text-gray-700 text-center ml-24 hover:text-black ">
//                Skip to main content
//            </Link>

//           <div className="flex md:gap-4 sm:gap-3 gap-2">
//             <Link href="/" className="hover:text-gray-800">
//               Find Link Store
//             </Link>
//             <Link href="/contact" className="hover:text-gray-800">
//               Help
//             </Link>
//             <Link href="/login" className="hover:text-gray-800">
//               Join Us
//             </Link>
//             <Link href="/" className="hover:text-gray-800">
//               Sign In
//             </Link>
//           </div>
//         </div>

//         {/* Main Navigation */}
//         <div className="flex flex-wrap justify-between items-center bg-white px-6 py-4">
//           {/* Left Section (Logo) */}
//           <div className="flex items-center">
//             <Image src="/Vector.png" alt="Nike Logo" className="md:w-[78px] sm:w-[60px] w-[30px]" width={78} height={78} />
//           </div>

//           {/* Center Section (Navigation Links) */}
//           <nav className="flex gap-4 md:gap-6 text-gray-700 font-bold md:text-[16px] sm:text-[14px] text-[10px]">
//             <Link href="/new" className="hover:text-black whitespace-nowrap">
//               New & Featured
//             </Link>
//             <Link href="/men" className="hover:text-black whitespace-nowrap">
//               Men
//             </Link>
//             <Link href="/women" className="hover:text-black whitespace-nowrap">
//               Women
//             </Link>
//             <Link href="/kids" className="hover:text-black whitespace-nowrap">
//               Kids
//             </Link>
//             <Link href="/Sale" className="hover:text-black whitespace-nowrap">
//               Sale
//             </Link>
//             <Link href="SNKRS/" className="hover:text-black whitespace-nowrap">
//               SNKRS
//             </Link>
//           </nav>

//           {/* Right Section (Search, Wishlist, Cart) */}
//           <div className="flex items-center gap-4 mt-4 md:mt-0">
//             {/* Search Bar */}
//             <div className="relative hidden md:block">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="bg-[#F5F5F5] rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
//               />
//                 <CgSearch className="absolute left-52 top-2.5 text-gray-500" />
//             </div>
//             <FaRegHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
//             <Link href ="/cart">
//             <BsBag className="text-gray-400 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Search Bar */}
//         <div className="block md:hidden px-6 mt-2">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
//             />
//             <CgSearch className="absolute right-3 top-2.5 text-gray-500" />
//           </div>
//         </div>
//       </header>

//       {/* Bottom Popup Section */}
//       {showPopup && (
//         <div className=" bg-gray-50 border-t shadow-lg text-center py-4 px-6 flex justify-between items-center ">
//           <div className="text-gray-600 text-sm ml-[400px]">
//             <h1 className="font-bold text-black">Hello Nike App </h1>
//             <span>Download the app to access everything Nike.{" "}</span>
//             <a href="#" className="text-black font-medium hover:underline">
//               Get Your Great
//             </a>
//           </div>
//           <button onClick={handlePopupClose} className="text-gray-600 hover:text-black focus:outline-none">
//             <RxCross2/>
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { BsBag } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Header: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <header>
        {/* Top Bar */}
        <div className="flex bg-gray-100 justify-between items-center px-4 py-2 text-xs md:text-sm font-medium text-gray-500">
          <Image src="/Frame.png" alt="Frame" width={24} height={24} />
          <Link
            href="#main-content"
            className="hidden md:flex text-gray-700 hover:text-black"
          >
            Skip to main content
          </Link>
          <div className="flex gap-3 md:gap-5">
            <Link href="/" className= " hover:text-gray-800">
              Find a Store
            </Link>
            <Link href="/contact" className="hover:text-gray-800">
              Help
            </Link>
            <Link href="/login" className="hover:text-gray-800">
              Join Us
            </Link>
            <Link href="/" className="hover:text-gray-800">
              Sign In
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex flex-wrap justify-between items-center bg-white px-4 md:px-8 py-4">
          {/* Left Section (Logo) */}
          <Link href="/">
            <Image
              src="/Vector.png"
              alt="Nike Logo"
              className="w-8 sm:w-12 md:w-16"
              width={64}
              height={64}
            />
          </Link>

          {/* Center Section (Navigation Links) */}
          <nav className="hidden md:flex gap-6 text-sm font-semibold text-gray-700">
            {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(/ & /g, "-")}`}
                  className="hover:text-black whitespace-nowrap"
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Right Section (Search, Wishlist, Cart) */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
              />
              <CgSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <FaRegHeart
              className="text-gray-700 w-6 h-6 cursor-pointer hover:text-black"
              aria-label="Wishlist"
            />
            <Link href="/cart">
              <BsBag
                className="text-gray-800 font-bold w-6 h-6 cursor-pointer hover:text-black"
                aria-label="Cart"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="block md:hidden px-4 mt-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <CgSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Bottom Popup Section */}
      {showPopup && (
        <div className="hidden md:flex ml-96 bg-white py-4 px-6  justify-between items-center">
          <div className="text-gray-600 md:text-center text-sm">
            <h1 className="font-bold text-black text-center">Hello Nike App</h1>
            <p>
              Download the app to access everything Nike.{" "}
              <a
                href="#"
                className="text-black font-medium hover:underline"
              >
                Get Your Great
              </a>
            </p>
          </div>
          <button
            onClick={handlePopupClose}
            className="text-gray-600 hover:text-black"
          >
            <RxCross2 />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
