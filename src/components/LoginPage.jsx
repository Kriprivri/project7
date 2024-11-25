import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen w-full flex bg-gray-200 overflow-hidden px-10 py-8 gap-4">
      <img
        className="w-[55%] h-full overflow-hidden rounded-2xl"
        src="/assets/login.jpg"
      />

      <form className="w-[45%] bg-white flex flex-col items-center  rounded-2xl">
        <p className=" text-blue-800 text-center text-4xl font-bold mt-6">
          Log In to Continue your Learning Journey
        </p>
        <div className="text-center space-y-4 mt-12 w-full px-20">
          <div>
            <label
              htmlFor="username"
              className="block text-lg font-serif font-semibold text-gray-700 mb-6 text-center"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-serif font-semibold text-gray-700 mb-6 mt-10 text-center"
            >
              Password
            </label>
            <div className="flex">
              <input
                type={isVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="ml-4 mt-3">
                <button onClick={handleShowPassword}>
                  {isVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="h-full flex justify-center items-center">
              <button className="px-5 py-2 bg-blue-800 text-white rounded-2xl mt-6 hover:bg-blue-600 font-semibold">
                Login
              </button>
            </div>
            <div className="text-center mt-6">
              <p className="text-black font-medium">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-red-500 font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
