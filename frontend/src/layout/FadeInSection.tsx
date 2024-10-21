import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInSectionProps {
  children: ReactNode;
  direction?: "left" | "right"; // Make direction prop optional
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  direction
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let initialX = 0;
  if (direction === "left") {
    initialX = -100;
  } else if (direction === "right") {
    initialX = 100;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : initialX }}
      transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};

export default FadeInSection;
