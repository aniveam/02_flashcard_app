import FadeInSection from "@/components/FadeInSection";
import { MainHeader } from "@/components/MainHeader";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function Main() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (sectionRef.current) {
      const { top, bottom } = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the section is in the viewport
      if (top < viewportHeight && bottom >= 0) {
        setIsVisible(true); // Set to true if in viewport
      } else {
        setIsVisible(false); // Reset to false if out of viewport
      }
    }
  };

  const slideVariants = {
    start: { y: 40, opacity: 0 },
    end: { y: 0, opacity: 1 }
  };

  const bounceVariants = {
    start: { y: 40 },
    bounce: { y: [0, 5, 0] }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="main" className="flex flex-col items-center">
      <MainHeader />
      <section className="h-dvh mt-10">
        <div className="flex flex-col items-center p-5">
          <motion.p
            variants={slideVariants}
            initial="start"
            animate="end"
            transition={{ duration: 0.9 }}
            className="lg:w-2/3 text-center text-black dark:text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter">
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
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative p-5 flex grow justify-center items-center h-auto">
              <div className="absolute -inset-4 opacity-75 blur">
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
      <section
        style={{ height: `calc(100vh - 80px)` }}
        id="how-it-works"
        className="h-dvh w-full bg-theme-light dark:bg-theme-dark flex flex-col items-center">
                <FadeInSection>
        <h2 className="text-5xl text-center text-black dark:text-white mb-4 mt-10">
          How It Works
        </h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl">
          Empower your study routine in just a few steps
        </p>
        </FadeInSection>
  
        <motion.div
            ref={sectionRef} // Attach the ref to the section
            variants={slideVariants}
            initial="start"
            animate={isVisible ? "end" : "start"} // Animate based on visibility
            transition={{ duration: 0.5 }}
            className="p-10"
          >
          <p className="text-2xl text-center text-black dark:text-white">1) Create Decks</p>
          <p>Organize your learning by creating decks for different subjects or topics.</p>
        </motion.div>
    
      </section>

    </div>
  );
}
