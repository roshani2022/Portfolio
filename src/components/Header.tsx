import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

interface MenuItem {
  id: number;
  name: string;
  to: string;
}

const Header: React.FC = () => {
  const menu: MenuItem[] = [
    { id: 1, name: "HOME", to: "home" },
    { id: 2, name: "ABOUT", to: "about" },
    { id: 3, name: "SKILLS", to: "skills" },
    { id: 4, name: "PROJECTS", to: "projects" },
    { id: 5, name: "CONTACT", to: "contact" },
  ];

  return (
    <div className="flex items-center w-screen justify-between border-b-[1px] bg-white fixed top-0 left-0 h-[90px] z-10">
      <div className="w-[90px] h-[90px] bg-black">
        <img src={logo} alt="logo" className="p-4 filter brightness-125" />
      </div>
      <div className="hidden md:flex gap-14">
        {menu.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            smooth={true}
            duration={500}
            className="cursor-pointer font-serif"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="w-[90px] h-[90px] bg-green-400 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
