import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full '>
      <div className="max-w-screen-xl mx-auto py-20 flex gap-1">
        <Card width={"basis-1/3"} para = {true} head ={false}/>
        <Card width = {"basis-2/3"} para = {false} head ={true} hover = "true"/>
      </div>
    </div>
  )
}

export default Cards
