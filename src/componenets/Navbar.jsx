import Logo from "../assets/food-logo.png";
import { MdShoppingCart } from "react-icons/md";
import DarkMode from "./DarkMode";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <nav className="nav  shadow-md py-4 px-8 bg-white fixed top-0 left-0 right-0 z-10 dark:bg-gray-900 dark:text-white duration 200 flex items-center gap-16">
      <div className="container mx-auto flex items-center justify-between gap-24 px-4">
        <a
          className="flex items-center text-zinc-900 text-3xl font-bold gap-4 dark:text-white"
          href=""
        >
          <img src={Logo} alt="" className="w-[50px]" /> Foodie
        </a>
        <ul className="md:flex items-center gap-8 hidden">
          <li>
            <a className="text-lg hover:text-primary duration-200" href="#">
              Home
            </a>
          </li>
          <li>
            <a
              className="text-lg hover:text-primary duration-200"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-lg hover:text-primary duration-200"
              href="#about"
            >
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="btn-wrapper flex items-center gap-4">
        <DarkMode />
        <button
          href=""
          className="btn--primary order-btn flex items-center gap-2 text-lg"
        >
          Order <MdShoppingCart />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
