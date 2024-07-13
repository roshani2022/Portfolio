import React from "react";
import avtar from "../assets/avtar.jpeg";

const Introduction: React.FC = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[120px] border-r-[1px] mt-[-2px]"></div>
      <div className="w-[5px] h-[5px] bg-green-900 rounded-full"></div>
      <h2 className="mt-5 text-black font-medium tracking-widest">
        HELLO MY NAME IS
      </h2>
      <h2 className="mt-5 text-black font-bold sm:text-[70px] text-[30px] sm:tracking-widest tracking-normal ">
        ROSHANI <br></br>GUPTA !
      </h2>
      <img
        src={avtar}
        className="rounded-full sm:w-[280px] sm:h-[280px] w-[240px] h-[240px] bg-gray-200 p-7 mt-7"
      />
    </div>
  );
};

export default Introduction;
