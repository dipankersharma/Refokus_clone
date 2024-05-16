import React from 'react'
import Marque from './Marque'

function Marquees() {
  var image = [
    ["https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg" ,
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg",
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
    'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg',
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg",
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg"],
    ["https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg",
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg" ,
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg",
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg",
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
    'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg',
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg",
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg",
    "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg"]
  ]
  return (
    <div className='py-10'>
      {image.map((elem,index)=> (<Marque key={index} imageurl ={elem}/>))}
     
    </div>
  )
}

export default Marquees
