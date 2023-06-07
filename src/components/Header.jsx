import React from "react";

export default function Header() {
  return (
    <div className="p-3 h-[80px] bg-gray-400 w-full flex items-center justify-between">
      <h1 className="font-bold text-white cursor-pointer">Ruowvefs</h1>
      <div className="flex items-center gap-3">
        <img
          className="w-[30px] h-[30px] bg-cover bg-[#fff] rounded-[50%]"
          src="assets/signIn.png"
          alt=""
        />
        <span>Ometere Godwin</span>
        <button className="border-none bg-[#3e3c61] text-gray-400 px-2 rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
}
