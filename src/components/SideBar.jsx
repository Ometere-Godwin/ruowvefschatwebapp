import React from "react";
import Header from "./Header";
import Search from "./Search";

export default function SideBar() {
  return (
    <div className="flex-[1] bg-[#3e3c61]">
      <Header />
      <Search />
    </div>
  );
}
