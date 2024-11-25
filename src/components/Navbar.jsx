import React from "react";
import { useNavigate } from "react-router";

const Navbar = ({ isLogin }) => {
  const navigate = useNavigate();

  return (
    <div className=" flex justify-between items-center px-6 bg-blue-800 py-4 fixed top-0 left-0 right-0 ">
      <div className="container mx-auto flex items-center relative">
        <img src="/assets/logoo.png" className=" h-16 w-32 mr-5 absolute " />
        <span className="text-white ml-25 font-semibold text-2xl absolute left-32">
          Course Recommendation System
        </span>
      </div>
      <div className="font-bold hover:underline text-xl mx-12 py-3 text-yellow-200">
        Overview
      </div>
      {isLogin ? (
        <div className="relative inline-block text-left group">
          <img src="/assets/user1.png" className="h-10 w-15 mx-10 px-12 " />
          <div
            className="absolute hidden right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 rounded-md 
          shadow-lg outline-none group-hover:block"
          >
            <div className="py-1">
              <a
                href="#user-profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                User Profile
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex gap-3">
          <button
            className="font-semibold text-xl mx-12 hover:underline text-white"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="font-semibold text-xl mx-12 hover:underline text-white"
            onClick={() => navigate("/signup")}
          >
            SignUp
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
