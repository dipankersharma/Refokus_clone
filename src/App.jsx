
import React from 'react'
import Navbar from './Componenet/Navbar'
import Work from './Componenet/Work'
import Stripes from './Componenet/Stripes'
import Products from './Componenet/Products'
import Marquees from './Componenet/Marquees'

function App() {
  return (
    <div className=' w-full bg-zinc-900 pt-3 text-white'>
      <Navbar/> 
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
    </div>
  )
}

export default App
