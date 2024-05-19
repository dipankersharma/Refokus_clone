import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

function Button({title = "Start a project"}) {


  return (
    <motion.div className=' btn max-w-40 px-4 py-2 bg-zinc-100 flex items-center justify-between text-black rounded-full cursor-pointer'>
      <span className='txt text-md font-small mr-3 ' >{title}</span>
      <BsArrowReturnRight className=' arrw text-xs' />
    </motion.div>
  )
}

export default Button
  