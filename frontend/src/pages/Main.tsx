import { useTheme } from "@/context/ThemeContext";
import FadeInSection from "@/layout/FadeInSection";
import { Navbar } from "@/layout/Navbar";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Main() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Animations
  const slideVariants = {
    start: { y: 40, opacity: 0 },
    end: { y: 0, opacity: 1 }
  };
  const bounceVariants = {
    start: { y: 40 },
    bounce: { y: [0, 5, 0] }
  };

  const handleScroll = () => {
    if (sectionRef.current) {
      const { top, bottom } = sectionRef.current.getBoundingClientRect();
      const viewPortHeight = window.innerHeight;
      if (top < viewPortHeight && bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              text-center text-4xl sm:text-5xl lg:text-6xl xl:text-8xl text-black dark:text-white
            ">
            Master Concepts, One Flashcard at a Time
          </motion.p>
          <motion.div
            variants={slideVariants}
            initial="start"
            animate="end"
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:w-1/2 p-3 mt-3 flex flex-col items-center gap-y-4">
            <p className="tracking-wider text-xl text-gray-600 dark:text-slate-200 text-center">
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
                className="relative z-10 w-[250px] md:w-[400px] lg:w-[300px] xl:w-[390px]"
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
      <section className="min-h-[calc(100vh-160px)] flex flex-col justify-between mt-20 bg-theme-light dark:bg-theme-dark">
        <div id="how-it-works" className="flex flex-col items-center p-4">
          <FadeInSection>
            <p className="text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-black dark:text-white">
              How It Works
            </p>
            <p className="tracking-wider text-xl text-center text-gray-700 dark:text-gray-300 max-w-2xl mt-3 mb-10">
              Empower your study routine in just a few steps
            </p>
          </FadeInSection>

          <div ref={sectionRef} className="md:w-2/3 space-y-8 p-4">
            <motion.div
              variants={slideVariants}
              initial="start"
              animate={isVisible ? "end" : "start"}
              transition={{ duration: 0.9 }}
              className="text-gray-600 dark:text-white">
              <p className="font-medium text-xl">1) Create Decks</p>
              <p className="dark:text-slate-400">
                Organize your learning by creating custom decks. Name them based
                on subjects, topics, or anything you want to master.
              </p>
            </motion.div>
            <motion.div
              variants={slideVariants}
              initial="start"
              animate={isVisible ? "end" : "start"}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-gray-600 dark:text-white">
              <p className="font-medium text-xl">2) Add flashcards to Decks</p>
              <p className="dark:text-slate-400">
                Easily create flashcards with a question on one side and the
                answer on the other. You can add as many cards as you need to
                each deck.
              </p>
            </motion.div>
            <motion.div
              variants={slideVariants}
              initial="start"
              animate={isVisible ? "end" : "start"}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-gray-600 dark:text-white">
              <p className="font-medium text-xl">3) Favorite Key Flashcards</p>
              <p className="dark:text-slate-400">
                Mark your most important flashcards as favorites for quick
                access. Focus on what matters most to you.
              </p>
            </motion.div>
            <motion.div
              variants={slideVariants}
              initial="start"
              animate={isVisible ? "end" : "start"}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="text-gray-600 dark:text-white">
              <p className="font-medium text-xl">4) Practice Your Way</p>
              <p className="dark:text-slate-400">
                <span className="font-medium">Practice All Cards:</span> Go
                through the entire deck at once.
              </p>
              <p className="dark:text-slate-400">
                <span className="font-medium">Practice Favorites Only:</span>{" "}
                Focus on your starred cards when you need a quick review.
              </p>
            </motion.div>
            <motion.div
              variants={slideVariants}
              initial="start"
              animate={isVisible ? "end" : "start"}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="text-gray-600 dark:text-white">
              <p className="font-medium text-xl">
                5) Leverage Spaced Repetition
              </p>
              <p className="dark:text-slate-400">
                Strengthen your memory by using spaced repetition. Cards you
                struggle with will reappear more frequently to help reinforce
                learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
