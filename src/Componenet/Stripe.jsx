import React from "react";
function Stripe({ value }) {
  return (
      <div className="flex items-center justify-between w-[16.66%] shrink-0 px-2 py-3 border-[1.5px] border-zinc-600 ">
        <img src={value.URL} alt="" />
        <span className="font-semibold">{value.number}</span>
      </div>
  );
}

export default Stripe;
