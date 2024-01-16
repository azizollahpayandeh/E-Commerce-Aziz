"use client"
import Link from "next/link"
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Menu from "../../Modules/Menu/MenuNav";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname()

const [clickHandlerMenu, setClickHandlerMenu] = useState(false);
const toggleMenu = () => {
  setClickHandlerMenu(!clickHandlerMenu);
};
const handleDocumentClick = (event: MouseEvent) => {
  if (clickHandlerMenu && menuRef.current && !menuRef.current.contains(event.target as Node)) {
    setClickHandlerMenu(false);
  }
};

useEffect(() => {
  document.addEventListener("click", handleDocumentClick)

  return () => {
    document.removeEventListener("click", handleDocumentClick);
  };
}, [clickHandlerMenu])

const menuRef = useRef<HTMLDivElement | null>(null);


  return (
    <>
      <header className="bg-white py-4">
        <div className=" mx-auto">
          <div className="flex justify-between items-center w-full border-b-2 border-gray-100 py-3">
            <div>
            <Image alt="logo" width={170} height={50} src="/assets/azizkala-logo-black.png"/>
            </div>
            <div className="flex items-center lg:space-x-20 space-x-5">
              <nav className="hidden lg:flex space-x-6">
                <Link className={`text-gray-500 font-[500] hover:text-gray-700 ${path == "/" ? "border-b-2" : ""} `} href="/">
                  Home
                </Link>
                <Link className={`text-gray-500 font-[500] hover:text-gray-700 ${path == "/concat" ? "border-b-2" : ""} `} href="/concat">
                  Contact
                </Link>
                <Link className={`text-gray-500 font-[500] hover:text-gray-700 ${path == "/about" ? "border-b-2" : ""} `} href="/about">
                  About
                </Link>
                <Link className={`text-gray-500 font-[500] hover:text-gray-700 ${path == "/sign-up" ? "border-b-2" : ""} `} href="/sign-up">
                  Sign Up
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center bg-gray-100 rounded-md overflow-hidden px-10 py-2">
                <IoSearch className="text-gray-500 w-[18px]" />
                <input
                  className="bg-transparent border-none outline-none placeholder-gray-500 text-sm"
                  placeholder="What are you looking?"
                  type="text"
                />
              </div>
              <IoMdHeartEmpty className="text-gray-500 cursor-pointer" fontSize={25}  />
              <HiOutlineShoppingCart className="text-gray-500 cursor-pointer" fontSize={25}/>
              <IoMdMenu className="text-gray-500 lg:hidden cursor-pointer"  onClick={toggleMenu}  fontSize={25}/>
            </div>
          </div>
          <div className={`menu flex justify-end lg:hidden pr-[150px] ${clickHandlerMenu ? "block" : "hidden"}`} ref={menuRef}>
          <Menu/>
        </div>
        </div>
      </header>
    </>
  )
}
