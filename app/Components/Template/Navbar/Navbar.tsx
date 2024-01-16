"use client"
import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
const handelclick = () => {
  console.log('hello');
  
}

  return (
    <>
      <header className="bg-white py-4">
        <div className=" mx-auto">
          <div className="flex justify-between items-center w-full border-b-2 border-gray-100 py-3">
            <div className="flex items-center lg:space-x-20 space-x-5">
              <h1 className="text-3xl font-bold">Exclusive</h1>
              <nav className="hidden md:flex space-x-6">
                <Link className="text-gray-500 font-[500] hover:text-gray-700" href="#">
                  Home
                </Link>
                <Link className="text-gray-500 font-[500] hover:text-gray-700" href="#">
                  Contact
                </Link>
                <Link className="text-gray-500 font-[500] hover:text-gray-700" href="#">
                  About
                </Link>
                <Link className="text-gray-500 font-[500] hover:text-gray-700" href="#">
                  Sign Up
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-md overflow-hidden px-10 py-2">
                <IoSearch className="text-gray-500 w-[18px]" />
                <input
                  className="bg-transparent border-none outline-none placeholder-gray-500 text-sm"
                  placeholder="What are you looking?"
                  type="text"
                />
              </div>
              <IoMdHeartEmpty className="text-gray-500 cursor-pointer" fontSize={25}  />
              <HiOutlineShoppingCart className="text-gray-500 cursor-pointer" fontSize={25}/>
              <IoMdMenu className="text-gray-500 md:hidden cursor-pointer"  fontSize={25}/>
            </div>
          </div>
          <button onClick={handelclick}>dsfdfkd</button>
          {/* mobile nav design here*/}
        </div>
      </header>
    </>
  )
}
