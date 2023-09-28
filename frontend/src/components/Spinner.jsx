import React from "react";
import { motion } from "framer-motion";

const Spinner = () => {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        loop: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="flex items-center justify-center h-20 w-20">
      <motion.div
        className="border-t-4 border-blue-500 border-solid rounded-full h-12 w-12 animate-spin"
        variants={spinnerVariants}
        animate="animate"
      ></motion.div>
    </div>
  );
};

export default Spinner;
