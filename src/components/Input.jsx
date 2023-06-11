import React from "react";
import { IoMdAttach } from "react-icons/io";
import { BsFillCameraFill } from "react-icons/bs";

export default function Input() {
  return (
    <div className="h-[50px] text-black p-3 bg-gray-400 flex items-center justify-between">
      <input
        type="text"
        placeholder="Type a message"
        className="placeholder:text-gray-300 text-black bg-white w-full  outline-none p-2 rounded-lg mr-2"
      ></input>
      <div className="flex  items-center justify-center gap-3">
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <IoMdAttach className="w-5 h-5 text-gray-500 cursor-pointer" />
        </label>
        <BsFillCameraFill className="w-5 h-5 text-gray-500 cursor-pointer" />

        <button className="bg-green-800 py-1 px-2 rounded-lg text-white">
          Send
        </button>
      </div>
    </div>
  );
}
