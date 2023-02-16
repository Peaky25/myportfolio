import React from "react";
const About = () => {
  return (
    
    <div
      name="about"
      className="w-full h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 text-black "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 font-stick">
            ABOUT
          </p>
        </div>

        <p className="text-xl mt-5">
        Hi,there   <span className="underline underline-offset-1  text-2xl" >I'm Harihara sudhan </span> . I'm  from Sankarankovil , currently located in Chennai. I did my graduation with Kalasalingam academy of research and education in the year of 2019. Now I'm working in Crystal technologies as a front end developer from the year of  2020 to till date.For past years my role was front end developer and my technical skill sets are HTML5,CSS3,Bootstrap ,Tailwind,React , Django framework,PostgreSQL.

        </p>

        <br />

        <p className="text-xl">
        I am a qualified and professional web developer experience in database administration and website design.
Strong creative and analytical skills. Team player with an eye for detail.
A curious and perseverant front-end-focused developer who aspires to write performant, maintainable and scalable code.
        </p>
      </div>
    </div>
  );
};

export default About;