import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center px-6 bg-blue-800 py-6 fixed top-0 left-0 right-0">
        <Navbar isLogin={true} />
      </div>

      <div className="flex-grow mt-24 flex flex-col items-center justify-center">
        {" "}
        {/* Margin to avoid overlap with fixed navbar */}
        <div className="bg-gray-200 rounded-lg p-6 flex items-center w-[95%] mx-auto h-96">
          <input
            type="text"
            placeholder="Search for courses"
            className="flex-grow p-2 border border-gray-300 rounded-md mx-10 mb-72 "
          />
          <button className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 mb-72 mr-10">
            Recommend
          </button>
        </div>
      </div>
      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Course Recommendation System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
