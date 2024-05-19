import { motion } from "framer-motion";
import React from "react";

function Marque({ imageurl, direction }) {
  return (
    <div className="flex w-full">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imageurl.map((item, index) => (
          <img src={item} className="" key={index} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imageurl.map((item, index) => (
          <img src={item} className="" key={index} />
        ))}
      </motion.div>
    </div>
  );
}
 
export default Marque;
