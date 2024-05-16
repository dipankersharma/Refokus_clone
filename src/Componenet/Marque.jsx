import React from 'react'

function Marque({imageurl}) {
  return (
    <div className='flex w-full py-5 gap-32 whitespace-nowrap overflow-hidden'>
      {imageurl.map((item,index) => (<img  src={item}className='w-30 flex-shrink-0' key={index} />))}
      {imageurl.map((item,index) => (<img src={item} key={index} />))}
    </div>
  )
}

export default Marque
