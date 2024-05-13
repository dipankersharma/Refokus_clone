import React from 'react'

function Marque({imageurl}) {
  return (
    <div className='flex w-full py-5 gap-32 whitespace-nowrap overflow-hidden'>
      {imageurl.map(item => <img src={item}className='w-30 flex-shrink-0' />)}
      {imageurl.map(item => <img src={item} />)}
    </div>
  )
}

export default Marque
