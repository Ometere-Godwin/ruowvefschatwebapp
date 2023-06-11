import React from "react";
import {
  BsFillCameraVideoFill,
  BsFillPersonPlusFill,
  BsThreeDots,
} from "react-icons/bs";
import Messages from "./Messages";
import Input from "./Input";

export default function MessageHeader() {
  return (
    <div className="flex flex-col flex-[2]">
      <div className="px-3  bg-[#5d5b8d] h-[80px] flex items-center justify-between">
        <span className="text-white tracking-wide text-lg font-bold cursor-pointer">
          Tyler
        </span>
        <div className="flex text-white items-center gap-3">
          <span className="flex items-center cursor-pointer">
            <BsFillCameraVideoFill className="w-6 h-6" />
          </span>

          <span className="flex items-center cursor-pointer">
            <BsFillPersonPlusFill className="w-6 h-6" />
          </span>

          <span className="flex items-center cursor-pointer">
            <BsThreeDots className="w-6 h-6" />
          </span>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
