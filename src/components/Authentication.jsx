import React, { useState } from "react";

export default function Authentication() {
  const [isSignUp, setIsSignup] = useState(true);

  const switchMode = () => {
    setIsSignup((previous) => !previous);
  };

  const handleSubmit = () => {};

  return (
    <div className="bg-red-600 flex items-center justify-center p-10">
      <div className=" p-10 w-[560px] bg-green-500 flex flex-col rounded-lg">
        <div className="flex items-center justify-center flex-col">
          <p>Ruowvefs</p>
          <p>{isSignUp ? "Signup" : "Login"}</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col tracking-wide gap-4"
        >
          {isSignUp && (
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg tracking-wide">
                Fullname
              </label>
              <input
                required
                type="text"
                name=""
                id=""
                placeholder="Fullname"
                className="p-2 outline-none rounded-md border border-gray-600"
              />
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="" className="text-lg tracking-wide">
              Email
            </label>
            <input
              type="email"
              required
              name=""
              id=""
              placeholder="Email"
              className="p-2 outline-none rounded-md border border-gray-600"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-lg tracking-wide">
              Password
            </label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              required
              className="p-2 outline-none rounded-md border border-gray-600"
            />
          </div>

          {isSignUp && (
            <div>
              <input
                style={{ display: "none" }}
                type="file"
                name="file"
                id="file"
                required
              />
              <label
                htmlFor="file"
                className="flex items-center gap-6 cursor-pointer"
              >
                <img src="assets/avatar.png" alt="" className="w-10 h-10" />
                <span>Add an image</span>
              </label>
            </div>
          )}
          <div>
            <button className="bg-black text-white px-3 py-2 rounded-lg">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
        <div>
          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <span
              onClick={switchMode}
              className="cursor-pointer text-red-800 hover:text-green-800"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
