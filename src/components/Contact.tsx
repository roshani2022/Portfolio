import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className=" flex flex-col justify-center items-center p-5 mb-10 mt-16"
    >
      <h2 className="text-3xl font-bold mb-4 text-green-950">Contact</h2>
      <div className="bg-green-400 text-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Name:</h3>
          <p>Roshani Gupta</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Email:</h3>
          <p>
            <a
              href="mailto:rosh.gupta17@gmail.com"
              className=" hover:underline"
            >
              rosh.gupta17@gmail.com
            </a>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Phone:</h3>
          <p>
            <a
              href="tel:+917354300047"
              className=" hover:underline"
            >
              7354300047
            </a>
          </p>
        </div>
        <div className="mb-4">
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/roshani2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub className="text-2xl hover:text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/roshani-gupta1909"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinFill className="text-2xl hover:text-gray-700" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
