import React from "react";
import { navLinks } from "../utils/Constants";

export default function Search() {
  return (
    <div>
      <input
        className="w-full border-b bg-transparent h-10 p-3 text-gray-400 outline-none"
        type="text"
        placeholder="Find a user"
      />
      <div className="flex flex-col">
        {navLinks.map(({ id, avatar, name, chat }) => (
          <div className="text-white flex items-center gap-3 mt-4 pl-3 hover:bg-gray-400 cursor-pointer p-2 ">
            <img
              className="w-[50px] h-[50px] object-cover"
              key={id}
              src={avatar}
              alt=""
            />
            <div>
              <p>{name}</p>
              <p>{chat}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
