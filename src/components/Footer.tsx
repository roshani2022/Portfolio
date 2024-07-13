import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 z-40">
      <div className="container mx-auto flex justify-center items-center text-center h-full">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Roshani Gupta. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
