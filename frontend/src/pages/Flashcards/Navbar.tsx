import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface NavbarProps {
  toggleMenu: () => void;
  menuVisible: boolean;
}

export function Navbar({ toggleMenu, menuVisible }: NavbarProps) {
  const { toggleTheme } = useTheme();
  const { signOut } = useAuth();

  return (
    <div className="h-20 flex justify-between relative top-0 sticky w-full z-50 bg-nav-light dark:bg-nav-dark px-3">
      <div className="flex items-center">
        {!menuVisible ? (
          <button
            onClick={toggleMenu}
            className="w-10 h-8 sm:h-10 rounded-full bg-slate-400 dark:bg-slate-500">
            <i className="fa-solid fa-bars text-black"></i>
          </button>
        ) : (
          <button
            onClick={toggleMenu}
            className="w-10 h-8 sm:h-10 rounded-full bg-slate-400 dark:bg-slate-500">
            <i className="fa-solid fa-x text-black text-sm"></i>
          </button>
        )}
        <Link to="/">
          <img src="/img/logo.png" width={200} />
        </Link>
      </div>
      <div className="p-4 flex flex-row space-x-3 justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="py-2 px-4 bg-slate-900 dark:bg-slate-700 text-sm text-white rounded-full"
          onClick={signOut}>
          Log Out
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          onClick={toggleTheme}
          className="py-2 px-4 rounded-full bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-white">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </motion.button>
      </div>
      <div
        style={{
          background:
            "linear-gradient(to right, blue 0%, green 33%, red 66%, yellow 100%)"
        }}
        className="absolute bottom-0 left-0 h-1 w-full"></div>
    </div>
  );
}
