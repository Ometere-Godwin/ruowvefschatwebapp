import React, { useState } from "react";
import Cookie from "universal-cookie";
import axios from "axios";

const initialState = {
  fullName: "",
  userName: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  image: "",
};

export default function Auth() {
  const [form, setForm] = useState(initialState);
  const [isSignUp, setIsSignup] = useState(true);

  const switchMode = () => {
    setIsSignup((previousIsSignUp) => !previousIsSignUp);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="p-10 bg-blue-700 flex items-center justify-center">
      <div className="rounded-xl flex flex-col bg-white w-[1024px] p-10">
        <p className="mb-9 text-2xl font-bold tracking-wide">
          {isSignUp ? "Sign Up" : "Sign In"}
        </p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-xl tracking-wide">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
                required
                className="p-3 border border-gray-500 rounded-xl outline-none"
              />
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="userName" className="text-xl">
              User Name
            </label>
            <input
              name="userName"
              type="text"
              placeholder="User Name"
              onChange={handleChange}
              required
              className="p-3 border border-gray-500 rounded-xl outline-none"
            />
          </div>

          {isSignUp && (
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="text-xl">
                Phone Number
              </label>
              <input
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                onChange={handleChange}
                required
                className="p-3 border border-gray-500 rounded-xl outline-none"
              />
            </div>
          )}

          {isSignUp && (
            <div className="flex flex-col">
              <label htmlFor="image" className="text-xl">
                Profile Picture
              </label>
              <input
                name="image"
                type="file"
                placeholder="Profile Picture"
                onChange={handleChange}
                required
                className="p-3 border border-gray-500 rounded-xl outline-none"
              />
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="p-3 border border-gray-500 rounded-xl outline-none"
            />
          </div>
          {isSignUp && (
            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="text-xl">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                required
                className="p-3 border border-gray-500 rounded-xl outline-none"
              />
            </div>
          )}
          <div>
            <button className="text-white border-none p-3 bg-black rounded-2xl">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
        <div className="mt-5 tracking-wide">
          <p className="cursor-pointer font-bold">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <span onClick={switchMode}>{isSignUp ? "Sign In" : "Sign Up"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
