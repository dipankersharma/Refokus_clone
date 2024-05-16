import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="capitalize mb-5 text-zinc-500 ">Socials</h4>
            {["instagram", "twitter(x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="text-zinc-600 block mt-5 capitalize">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="capitalize mb-5 text-zinc-500 ">Socials</h4>
            {["instagram", "twitter(x?)", "LinkedIn"].map((item, index) => (
              <a key={index} href="#" className="text-zinc-600 block mt-5 capitalize">{item}</a>
            ))}
          </div>
          <div className="basis-1/2">
            <p className="text-zinc-400 mb-5">Refokus is a forward-thinking web agency that combines Web Design, </p>
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
