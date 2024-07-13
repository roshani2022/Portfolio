import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFilePdf, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-scroll";

const Sidebar: React.FC = () => {
  return (
    <div className="w-[90px] border-r sm:h-[calc(100vh-145px)] h-[calc(100vh-62px)] fixed flex flex-col justify-around items-center">
      <div className="flex flex-col gap-7 mt-72 text-[30px] text-green-400">
        <a
          href="https://github.com/roshani2022"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </a>
        <a
          href="https://www.linkedin.com/in/roshani-gupta1909"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinFill className="cursor-pointer hover:scale-140 transition-all ease-in-out" />
        </a>
        <a
          href="https://www.snapit.tech/rosh.gupta17/frontend-developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFilePdf className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </a>
        <Link
          to="map"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:scale-110 transition-all ease-in-out"
        >
          <FaMapMarkerAlt />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
