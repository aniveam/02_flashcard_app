import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export function MainHeader() {
  const { toggleTheme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function
  const smoothScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="h-20 grid grid-cols-3 w-full p-4 items-center relative sticky top-0 z-50 bg-theme-light dark:bg-theme-dark">
      {/* Link Group */}
      <div className="col-start-1 col-span-2 md:col-start-2 md:col-span-1 md:place-self-center space-x-10">
        <Link
          to="/"
          className="text-black dark:text-white cursor-pointer"
          onClick={() => {
            smoothScroll("#main");
            setMenuOpen(false); // Close menu on link click
          }}>
          Home
        </Link>
        <Link
          to="/"
          className="text-black dark:text-white cursor-pointer"
          onClick={() => {
            smoothScroll("#how-it-works");
            setMenuOpen(false); // Close menu on link click
          }}>
          How It Works
        </Link>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={handleMenuToggle}
          className="text-black dark:text-white">
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`} />
        </button>
      </div>

      {/* Buttons for larger screens */}
      <div className="place-self-end self-center space-x-3 hidden md:flex">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="py-2 px-4 bg-slate-900 dark:bg-slate-800 text-white rounded-full">
          <Link to="/login">Log In</Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          onClick={toggleTheme}
          className="py-2 px-4 rounded bg-gray-200 dark:bg-gray-800 text-slate-600 dark:text-white">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </motion.button>
      </div>

      {/* Collapsible Menu for Small Screens */}
      {isMenuOpen && (
        <div
          className={`z-50 absolute right-4 top-12 bg-slate-300 dark:bg-gray-600 rounded shadow-lg p-4 space-x-3`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="py-2 px-4 bg-slate-900 dark:bg-slate-800 text-white rounded-full">
            <Link to={"/login"}>Log In</Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={toggleTheme}
            className="py-2 px-4 rounded bg-gray-200 dark:bg-gray-800 text-slate-600 dark:text-white">
            <i className="fa-solid fa-circle-half-stroke"></i>
          </motion.button>
        </div>
      )}

      {/* Gradient Bottom Line */}
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{
          background:
            "linear-gradient(to right, blue 0%, green 33%, red 66%, yellow 100%)"
        }}></div>
    </nav>
  );
}
