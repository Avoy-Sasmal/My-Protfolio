import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const welcomewords = ["Welcome", "स्वागत है", "Bienvenue", "ようこそ"];

const Preloader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % welcomewords.length);
    }, 300);

    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, 3000);
    return () => {
      clearTimeout(timer);
      clearInterval(wordTimer);
    };
  }, [onComplete]);

  return (
    <>
      {isLoading && (
        <motion.div
          className="flex justify-center items-center w-screen h-screen border-2 bg-black backdrop-blur-md"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-blue-300 text-4xl md:text-6xl font-bold text-shadow-lg  shadow-blue-300"
            initial={{
              scale: 0.5,
              opacity: 0,
            }}
            animate={{ scale: 4, opacity: 1 }}
            transition={{ duration: 5 }}
          >
            {welcomewords[wordIndex]}
          </motion.h1>
        </motion.div>
      )}
    </>
  );
};

export default Preloader;
