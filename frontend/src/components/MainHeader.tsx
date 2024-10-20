import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function MainHeader() {
  const { toggleTheme } = useTheme();
  return (
    <div className="w-screen flex flex-row h-16 sticky bg-white dark:bg-theme-dark">
      <div className="flex-grow" />
      <div className="flex items-center space-x-3 pr-4">
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
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{
          background:
            "linear-gradient(to right, blue 0%, green 33%, red 66%, yellow 100%)"
        }}></div>
    </div>
  );
}
