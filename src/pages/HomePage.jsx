import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <div className=" min-h-screen w-screen m-auto py-6">
        <Navbar isLogin={false} />
        <div className=" flex mt-8">
          <div className="w-1/2 bg-gray-100 mt-48 ml-8">
            <h className="font-bold text-6xl text-gray-700">
              {" "}
              Unlock Your Potential, One Course at a Time!
            </h>
            <p className="font-semibold text-xl my-10 mr-8 text-gray-600 text-justify">
              {" "}
              Our platform connects you with courses that fit your lifestyle and
              goals. Whether you're looking to level up your career or explore
              something new, we’re here to support your journey every step of
              the way. Let’s discover your next big opportunity together!{" "}
            </p>
          </div>
          <div className="w-1/2 grid grid-cols-2 gap-4 mt-20">
            <div className=" border-gray-200 border-4 rounded rounded-tl-3xl h-64 mt-2  ml-6 ">
              <img
                src="/assets/picc1.jpg"
                className="h-full w-full rounded-tl-3xl"
              />
            </div>
            <div className=" border-gray-200 border-4 h-64 mr-10 ml-2">
              <img src="/assets/pic2.jpg" className="h-full w-full" />
            </div>
            <div className=" border-gray-200 border-4 rounded rounded-bl-3xl h-64 mt-4 ml-6">
              <img
                src="/assets/pic3.jpg"
                className="h-full w-full rounded-bl-3xl"
              />
            </div>
            <div className=" border-gray-200 border-4 rounded rounded-br-3xl h-64 mr-10 ml-2">
              <img
                src="/assets/pic4.jpg"
                className="h-full w-full rounded-br-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
