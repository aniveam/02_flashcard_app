import { useTheme } from "@/context/ThemeContext";
import { Navbar } from "@/layout/Navbar";
import { motion } from "framer-motion";

export function Main() {
  const { theme } = useTheme();
  // Animations
  const slideVariants = {
    start: { y: 40, opacity: 0 },
    end: { y: 0, opacity: 1 }
  };
  const bounceVariants = {
    start: { y: 40 },
    bounce: { y: [0, 5, 0] }
  };

  return (
    <div
      id="main"
      className="flex flex-col justify-center items-center bg-theme-light dark:bg-theme-dark">
      <Navbar />
      <section className="h-dvh mt-20">
        <div className="flex flex-col items-center">
          <motion.p
            variants={slideVariants}
            initial="start"
            animate="end"
            transition={{ duration: 0.9 }}
            className="
              lg:w-2/3 tracking-tighter
              text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black dark:text-white
            ">
            Master Concepts, One Flashcard at a Time
          </motion.p>
          <motion.div
            variants={slideVariants}
            initial="start"
            animate="end"
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:w-1/2 p-3 mt-3 flex flex-col items-center gap-y-4">
            <p className="text-xl text-gray-600 dark:text-slate-200 text-center">
              Experience effortless learning with a streamlined design—no
              clutter, just the essentials to help you master concepts quickly
            </p>
            <motion.button
              className="text-lg rounded-full bg-blue-600 text-white py-2 px-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}>
              Try it now <i className="fa-regular fa-hand-pointer"></i>
            </motion.button>

            <motion.div
              variants={bounceVariants}
              initial="start"
              animate="bounce"
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              className="relative p-5 flex grow justify-center items-center h-auto">
              <div className="absolute -inset-6 opacity-75 blur">
                <img
                  className="object-cover w-full h-full h-96"
                  src="/img/Artwork.png"
                  alt="Artwork"
                />
              </div>
              <img
                className="relative z-10 w-[250px] lg:w-[300px] xl:w-[390px]"
                src={
                  theme === "light"
                    ? "/img/Macbook.png"
                    : "/img/MacbookDark.png"
                }
                alt="MacBook"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div
        id="how-it-works"
        style={{ height: `calc(100vh - 160px)` }}
        className="h-dvh">
        <section>
          <motion.p>TEST</motion.p>
        </section>
      </div>
    </div>
  );
}
