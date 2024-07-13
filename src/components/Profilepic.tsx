import React from "react";
import profileimage from "../assets/profileimage.jpeg";
const Profilepic: React.FC = () => {
  return (
    <div className="hidden lg:block fixed right-0">
      <img
        src={profileimage}
        className="h-[calc(100vh-145px)] object-cover "
        alt="Profile"
      />
    </div>
  );
};

export default Profilepic;
