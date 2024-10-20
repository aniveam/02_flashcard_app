import { MainHeader } from "@/components/MainHeader";
import { motion } from "framer-motion";

export function Main() {
  return (
    <div className="flex flex-col items-center h-screen">
      <MainHeader />
      <motion.div
        className="mt-[20vh] flex flex-col items-center p-5"
        initial={{ opacity: 0, y: 40 }} // Initial state: transparent and slightly down
        animate={{ opacity: 1, y: 0 }} // Final state: fully visible and at normal position
        transition={{ duration: 0.6 }} // Animation duration
      >
        <div>
          <p className="text-black dark:text-white font-heading text-6xl tracking-wider">
            Master Concepts, One Flashcard at a Time
          </p>
        </div>
        <div className="w-1/2 p-3 mt-3">
          <p className="text-xl text-gray-600 dark:text-slate-200 text-center">
            Experience effortless learning with a streamlined design—no clutter,
            just the essentials to help you master concepts quickly
          </p>
        </div>
        <motion.button
          className="text-lg rounded-full mt-3 bg-blue-700 text-white py-2 px-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}>
          Try it now <i className="fa-regular fa-hand-pointer"></i>
        </motion.button>
      </motion.div>
    </div>
  );
}
