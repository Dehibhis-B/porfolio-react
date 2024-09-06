import React, { useState } from "react";
import { logo } from "../assets";
import "./NavBar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-3">
        
        <p className="font-bold  text-gray-400" >&lt;Dehi<span className="text-greens-600" >bhis/&gt;</span></p>

        <div>
          <ul className="hidden md:flex font-mono text-[12px]">
            <li className="menuItem hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
              <a href="/#home">Home</a>
            </li>
            <li className="menuItem hover:scale-110">
              <a href="/#aboutme">About Me</a>
            </li>
            <li className="menuItem hover:scale-110">
              <a href="/#skills">Skills</a>
            </li>
            <li className="menuItem hover:scale-110">
              <a href="/#companies">Companies</a>
            </li>
            <li className="menuItem hover:scale-110">
              <a href="/#contact">Contact Us</a>
            </li>
          </ul>
          
          <div className="flex flex-col items-end">
            {!toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                onClick={() => setToggle(!toggle)}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setToggle(!toggle)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 cursor-pointer md:hidden h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}

            {toggle ? (
              <ul className="md:hidden absolute flex mt-8 flex-col bg-green-700 p-2 rounded-sm font-mono top-2">
                <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
                  <a href="/#home">Home</a>
                </li>
                <li className="menuItem p-3 hover:scale-110">
                  <a href="/#aboutme">About Me</a>
                </li>
                <li className="menuItem p-3 hover:scale-110">
                  <a href="/#skills">Skills</a>
                </li>
                <li className="menuItem p-3 hover:scale-110">
                  <a href="/#companies">Companies</a>
                </li>
                <li className="menuItem p-3 hover:scale-110">
                  <a href="/#contact">Contact Us</a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
