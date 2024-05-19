import React from "react";
import Stripe from "./Stripe";
import { motion } from "framer-motion";
function Stripes() {
  var data = [
    {
      URL: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 48,
    },
    {
      URL: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 2,
    },
    {
      URL: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 11,
    },
    {
      URL: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 48,
    },
    {
      URL: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 2,
    },
    {
      URL: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 11,
    },
  ];
  return (
    <div className="w-full flex overflow-hidden">
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:'linear',duration:20, repeat:Infinity}} className="flex w-full mt-32 shrink-0">
        {data.map((elem, index) => (
          <Stripe key={index} value={elem} />
        ))}
      </motion.div>
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:'linear',duration:20, repeat:Infinity}} className="flex w-full mt-32 shrink-0">
        {data.map((elem, index) => (
          <Stripe key={index} value={elem} />
        ))}
      </motion.div>
    </div>
  );
}

export default Stripes;
