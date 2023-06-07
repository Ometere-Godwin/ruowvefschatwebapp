import React from "react";
import SideBar from "./SideBar";
import MessageHeader from "./MessageHeader";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <div className="flex border border-blue-400 rounded-[10px] h-[80%] w-[65%] overflow-hidden">
        <SideBar />
        <MessageHeader />
      </div>
    </div>
  );
}
