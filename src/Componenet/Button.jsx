import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

function Button({title = "Start a project"}) {
  return (
    <div className='max-w-40 px-4 py-2 bg-zinc-100 flex items-center justify-between text-black rounded-full '>
      <span className='text-md font-small mr-3 ' >{title}</span>
      <BsArrowReturnRight className='text-xs' />
    </div>
  )
}

export default Button
  