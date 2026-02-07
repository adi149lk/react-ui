import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-18 py-8">
      <h4 className=" bg-black text-white px-6 py-2 rounded-full uppercase ">
        {" "}
        Target Audience
      </h4>
      <button className="px-6 py-2 rounded-full uppercase bg-gray-300 tracking-widest text-sm">
        digital banking platfrom
      </button>
    </div>
  );
}
