import React from 'react'

function Work() {

    var images = [
        {URL:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp",top:'50%',left:'50%', isActive:true},
        {URL:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png",top:"53%",left:"43%", isActive:false},
        {URL:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-1080.webp",top:'57%',left:'42%', isActive:false},
        {URL:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg",top:'41%',left:'59%', isActive:false},
        {URL:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202.png",top:'63%',left:'43%', isActive:false},
        {URL:"https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01.jpg",top:'65%',left:'52%', isActive:false},
    ]
  return (
    <div className='w-full'>
      <div className="relative hero max-w-screen-xl mx-auto flex items-center justify-center mt-5">
        <h1 className='text-[26vw] leading-none font-medium select-none tracking-tight'>Work</h1>
      <div className='w-full h-full top-0 absolute'>
        {images.map((elem,index)=>(elem.isActive && <img className='w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%] ' style={{top:elem.top,left:elem.left}} src={elem.URL} alt="" srcset="" />))}
      </div>
      </div>
    </div>
  
  )
}

export default Work
