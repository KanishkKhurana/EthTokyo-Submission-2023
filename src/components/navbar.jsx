import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import CompanyLogo from "../images/axelLogo.svg";
import { NavLink, Link } from "react-router-dom";
import {SiDiscord} from 'react-icons/si'
// import Advertisement from "./Advertisement";
import {AiOutlineTwitter} from 'react-icons/ai'


const NavbarItem = ({ title, classProps }) => (
  <NavLink
    to={
      title.toLowerCase() === "buidlers"
        ? "/buidlers"
        : title.toLowerCase() === "home"
        ? "/"
        : title.toLowerCase() === "businesses"
        ? "/businesses"
        : title.toLowerCase() === "communities"
        ? "/communities"
        : title.toLowerCase() === "about"
        ? "/about"
        : title.toLowerCase() === "metaverse" &&
          window.location.pathname === "/"
        ? "/about"
        : ""
    }
    className={({ isActive }) => (isActive ? "activeNavbarLink " : "")}
  >
    <li
      className={`mx-5 cursor-pointer flex font-BrinnanRegular hover:underline hover:underline-offset-8  text-xs tracking-widest ${classProps}  `}
    >
      {title}
      {title.toLowerCase() === "metaverse" && (
        <p className="px-1 mx-1 bg-[#872BFF] rounded-full text-[0.5rem] hidden md:block">
          {" "}
          coming soon{" "}
        </p>
      )}
    </li>
  </NavLink>
);

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  var NavLinkList = [
    "HOME",
    "BUIDLers",
    "BUSINESSES",
    "COMMUNITIES",
    "METAVERSE",
    "ABOUT",
  ];

  return (
    <div className="fixed z-30 w-full top-0  font-heading " >
      {/* <Advertisement/> */}
      <nav className="  flex justify-between md:justify-evenly items-center  pt-3 py-2 navbar-glassmorphism bg-neutral-100 border border-sky-300  rounded-full m-5">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <Link to="/">
            <img src={CompanyLogo} alt="logo" className="w-1/3 cursor-pointer" />
          </Link>
        </div>
        <div className="text-black   md:flex hidden list-none flex-row justify-between items-center flex-initial mr-8">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeNavbarLink underline underline-offset-8" : "")}
          >
            <li
              className={`mx-5 cursor-pointer flex font-BrinnanRegular hover:underline hover:underline-offset-8  text-xs tracking-widest   `}
            >
              HOME
              {/* {title.toLowerCase()==="metaverse" && <p className='px-1 mx-1 bg-[#872BFF] rounded-full text-[0.5rem] hidden md:block'> coming soon </p>} */}
            </li>
          </NavLink>
          <NavLink
            to="/listings"
            className={({ isActive }) => (isActive ? "activeNavbarLink underline underline-offset-8" : "")}
          >
            <li
              className={`mx-5 cursor-pointer flex font-BrinnanRegular hover:underline hover:underline-offset-8  text-xs tracking-widest   `}
            >
              LISTINGS
              {/* {title.toLowerCase()==="metaverse" && <p className='px-1 mx-1 bg-[#872BFF] rounded-full text-[0.5rem] hidden md:block'> coming soon </p>} */}
            </li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "activeNavbarLink underline underline-offset-8" : "")}
          >
            <li
              className={`mx-5 cursor-pointer flex font-BrinnanRegular hover:underline hover:underline-offset-8  text-xs tracking-widest   `}
            >
              PROFILE
              {/* {title.toLowerCase()==="metaverse" && <p className='px-1 mx-1 bg-[#872BFF] rounded-full text-[0.5rem] hidden md:block'> coming soon </p>} */}
            </li>
          </NavLink>
          
        
        </div>
        <div className="flex gap-2">
        <div className="hidden md:inline">
          <button className=" bg-gradient-to-r from-[#01C3F1] to-[#2BF2FF] text-[#262262]  hover:to-[#01C3F1] hover:from-[#2BF2FF] transition duration-300 tracking-widest ease-in-out py-1 px-3 text-center my-2 font-BrinnanRegular">
            <a
              href="https://twitter.com/KanishkKhurana_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter fontSize={23} /> 
            </a>
          </button>
        </div>
        <div className="hidden md:inline">
          <button className="bg-gradient-to-r from-[#5eead4] to-[#2BF2FF] text-[#262262] hover:to-[#5eead4] hover:from-[#2BF2FF] font-semibold  text-xs tracking-widest  py-2 px-3 text-center mr-2 my-2 font-BrinnanRegular">
            <a
              href="https://github.com/KanishkKhurana/EthTokyo-Submission-2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE <span className="font-InterRegular">↗ </span>
            </a>
          </button>
        </div>
        </div>
        <div className="flex relative ">
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-[#ff603b] md:hidden cursor-pointer mr-2"
              onClick={() => setToggleMenu(true)}
            />
            
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism bg-sky-100 text-[#ff603b] animate-slide-in ease-in-out duration-300"
            >
              <li className="text-2xl w-full h-max my-2  ">
              
                <AiOutlineClose onClick={() => setToggleMenu(false)} className="" />
              </li>
              <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeNavbarLink " : "")}
          >
            <li
              className={`mx-5 cursor-pointer flex font-BrinnanRegular hover:underline hover:underline-offset-8  m-2 text-lg tracking-widest  `}
              onClick={() => setToggleMenu(false)}
            >
              HOME
              {/* {title.toLowerCase()==="metaverse" && <p className='px-1 mx-1 bg-[#872BFF] rounded-full text-[0.5rem] hidden md:block'> coming soon </p>} */}
            </li>
          </NavLink>
          <NavLink
            to="/listings"
            className={({ isActive }) => (isActive ? "activeNavbarLink " : "")}
          >
            <li
              className={`mx-5 cursor-pointer flex font-BrinnanRegular hover:underline hover:underline-offset-8  m-2 text-lg tracking-widest   `}
              onClick={() => setToggleMenu(false)}
            >
              LISTINGS
              {/* {title.toLowerCase()==="metaverse" && <p className='px-1 mx-1 bg-[#872BFF] rounded-full text-[0.5rem] hidden md:block'> coming soon </p>} */}
            </li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "activeNavbarLink " : "")}
          >
            <li
              className={`mx-5 cursor-pointer flex font-BrinnanRegular hover:underline hover:underline-offset-8  m-2 text-lg tracking-widest   `}
              onClick={() => setToggleMenu(false)}
            >
              PROFILE
              {/* {title.toLowerCase()==="metaverse" && <p className='px-1 mx-1 bg-[#872BFF] rounded-full text-[0.5rem] hidden md:block'> coming soon </p>} */}
            </li>
          </NavLink>



              {/* {NavLinkList.map((item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps="m-2 text-lg"
                  onClick={() => setToggleMenu(false)}
                />
              ))} */}
              <li>
                <button className="text-[#ff603b] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-xs tracking-widest px-6 py-2.5 text-center mr-2 my-5 font-BrinnanRegular">
                  {" "}
                  <Link
                    to="/whitelist"
                  >
                    CODE <span className="font-InterRegular">↗ </span>
                  </Link>
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

