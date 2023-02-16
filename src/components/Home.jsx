import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    
    <div
      name="home"
      className="h-screen w-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold drop-shadow-2xl font-stick ">
            Hi,
            <br></br>
            I'm Hari
            <br></br>
             Front-End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building and desgining software.
            Currently, I love to work on web application using technologies 
            like React, Tailwind,Bootstrap.
          </p>

          <div className=" flex gap-3 font-stick">
            <a href="harihara sudhan resume 022.pdf"
            download="harihara sudhan resume 022.pdf"> 
              <button className=' animate-pulse rounded-xl p-1  '>MY RESUME </button>
                         
            </a>
            <button className=" rounded-xl p-1 hover:scale-105 duration-200 "> 
            <Link to="/contact">HIRE ME</Link>
            </button>
          </div>
        </div>

        <div>
          <img
            src={require('./assets/image/Hari002.png')}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full drop-shadow-xl hover:scale-105 duration-200 "
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;