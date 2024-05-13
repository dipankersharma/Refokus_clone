import React from 'react'
import { BsArrowRight } from "react-icons/bs";
function Card({width,para,head,hover}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[26rem] flex flex-col justify-between`}>
        <div className='w-full'>
        <div className='w-full flex items-center justify-between'>
       <h3>Our Heading</h3>
      <BsArrowRight />
        </div>
        <h1 className='text-3xl font-medium mt-5'>Whatever Heading</h1>
        </div>
        <div className="downelem w-full">
            {head && (
                <>
                 <h1 className='text-8xl font-semibold tracking-tight leading-none '>Start a Project</h1>
            <button className=' mt-5  rounded-full py-2 px-5 border-[1px] border-zinc-500'> Contact us</button>
                </>
            )}
           {para &&  <p className='text-sm text-zinc-400 font-medium '>Lorem ipsum dolor sit amet, consectetur adipisicing.</p> }
           
        </div>
    </div>
  )
}

export default Card
