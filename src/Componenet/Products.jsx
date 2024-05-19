import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      name: "Arqitel",
      description:
        "hello everyone from the world with the following products and products available for purchase and use",
      live: true,
      case: false,
    },
    {
      name: "ttr",
      description:
        "hello everyone from the world with the following products and products available for purchase and use",
      live: true,
      case: false,
    },
    {
      name: "yir 2024",
      description:
        "hello everyone from the world with the following products and products available for purchase and use",
      live: true,
      case: true,
    },
    {
      name: "yahoo!",
      description:
        "hello everyone from the world with the following products and products available for purchase and use",
      live: true,
      case: true,
    },
  ];
  const [Pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 20);
  };
  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}

      <div className="w-full h-full absolute pointer-events-none top-0 ">
        <motion.div
          initial={{ y: Pos, x: "-50%" }}
          animate={{ y: Pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="w-[30rem] h-[20rem] absolute left-[45%] overflow-hidden"
        >
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -Pos + `rem` }}
            className="w-full h-full"
          >
            <video loop autoPlay muted className= {'w-full h-full'}src="src\Items\Arqitel project video 4_3.mp4"></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -Pos + `rem` }}
            className="w-full h-full "
          >
            <video loop autoPlay muted className= {'w-full h-full'}src="src\Items\Cula_promo_new_4_3.mp4"></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -Pos + `rem` }}
            className="w-full h-full"
          >
            <video loop autoPlay muted className= {'w-full h-full'}src="src\Items\Maniv-Compressed.mp4"></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -Pos + `rem` }}
            className="w-full h-full"
          >
            <video loop autoPlay muted className= {'w-full h-full'}src="src\Items\Silvr.mp4"></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
