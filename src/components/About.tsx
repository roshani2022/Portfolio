import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
const About: React.FC = () => {
  return (
    <div className=" flex flex-col text-center items-center">
      <h2 className="mt-7 px-36 text-[20px] font-bold  text-green-950">
        I'm a Front-end Developer based in Nagpur Maharastra
      </h2>
      <RiDoubleQuotesL className="bg-green-600 p-3 text-[44px] rounded-full text-white mt-6 mb-6" />
      <div className="bg-green-400  text-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="my-5">
          I'm an enthusiastic front-end developer who enjoys creating visually
          appealing websites and am always willing to pick up new skills and
          technologies.My focus is react.
        </h2>
      </div>
      <RiDoubleQuotesR className="bg-green-600 p-3 text-[44px] rounded-full text-white mt-6" />
    </div>
  );
};

export default About;
