import React from "react";

export default function Message() {
  return (
    <div className="flex gap-5 mb-5 reverseRow">
      <div className="flex flex-col text-gray-500 font-medium">
        <img
          src="assets/signIn.png"
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <span>Just now</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-3 items-center justify-center">
        <p className="bg-white py-2 px-2 rounded-b-[10px] rounded-l-[10px] ">
          hello, welcome to my world
        </p>
        <img src="assets/avatar.png" alt="" />
      </div>
    </div>
  );
}
