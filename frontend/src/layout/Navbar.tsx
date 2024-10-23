import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const { toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollIntoView = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="relative top-0 sticky w-full z-50 bg-theme-light dark:bg-theme-dark">
      <div className="h-20 grid grid-cols-3 items-center content-center">
        <div className="flex items-center hidden md:flex">
          <img src="/img/logo.png" width={200} />
        </div>
        <div className="flex flex-row justify-center items-center space-x-10 col-span-2 md:col-start-2 md:col-span-1">
          <Link
            to="/"
            className="text-black dark:text-white cursor-pointer"
            onClick={() => {
              scrollIntoView("#main");
              setIsMenuOpen(false);
            }}>
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Home
            </motion.p>
          </Link>
          <Link
            to="/"
            className="text-black dark:text-white cursor-pointer"
            onClick={() => {
              scrollIntoView("#how-it-works");
              setIsMenuOpen(false);
            }}>
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              How It Works
            </motion.p>
          </Link>
        </div>

        <div className="flex justify-end items-center space-x-5 p-4 md:flex hidden">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}>
            <Link
              to="/login"
              className="py-2 px-4 bg-slate-900 dark:bg-slate-700 text-white rounded-full">
              Log In
            </Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={toggleTheme}
            className="py-2 px-4 rounded-full bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-white">
            <i className="fa-solid fa-circle-half-stroke"></i>
          </motion.button>
        </div>

        {/* Hamburger Menu */}
        <div className="flex flex-row space-x-5 place-self-end p-4 block md:hidden">
          {!isMenuOpen ? (
            <button
              onClick={() => handleMenu()}
              className="w-10 h-10 rounded-full bg-slate-900 dark:bg-slate-800">
              <i className="fa-solid fa-bars text-white"></i>
            </button>
          ) : (
            <>
              <button
                onClick={() => handleMenu()}
                className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-600">
                <i className="fa-solid fa-x text-black dark:text-white text-sm"></i>
              </button>
              <div className="mt-4 flex flex-col justify-center items-center z-50 bg-slate-300 dark:bg-slate-600 absolute top-12 right-4 rounded shadow">
                <Link
                  className="w-full dark:text-white text-black text-center hover:bg-gray-400 py-2 px-3 rounded"
                  to="/login">
                  Log In
                </Link>

                <button
                  onClick={toggleTheme}
                  className="w-full dark:text-white text-black text-center hover:bg-gray-400 py-2 px-3 rounded">
                  <i className="fa-solid fa-circle-half-stroke"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(to right, blue 0%, green 33%, red 66%, yellow 100%)"
        }}
        className="absolute bottom-0 left-0 h-1 w-full"></div>
    </nav>
  );
}
