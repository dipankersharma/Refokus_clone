import React, { useState } from "react";
import { motion, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";

function Work() {
  const [images, setimages] = useState([
    {
      URL: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      URL: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png",
      top: "53%",
      left: "43%",
      isActive: false,
    },
    {
      URL: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-1080.webp",
      top: "57%",
      left: "42%",
      isActive: false,
    },
    {
      URL: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg",
      top: "41%",
      left: "59%",
      isActive: false,
    },
    {
      URL: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202.png",
      top: "63%",
      left: "43%",
      isActive: false,
    },
    {
      URL: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01.jpg",
      top: "65%",
      left: "52%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
   
     function imagesShow(arr){
       setimages(prev =>(
        prev.map((item,index)=>(
            arr.indexOf(index)=== -1 ? ({...item, isActive:false}):{...item, isActive:true}
        ))
       ))
     }
  
    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }    
  })



  
  return (
    <div className="w-full">
      <div className="relative hero max-w-screen-xl mx-auto flex items-center justify-center mt-5">
        <h1 className="text-[26vw] leading-none font-medium select-none tracking-tight">
          Work
        </h1>
        <div className="w-full h-full top-0 absolute">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%] "
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.URL}
                  alt=""
                  srcset=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
