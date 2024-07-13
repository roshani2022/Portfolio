import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects, Project } from "../data/projectDetail";

const ProjectComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center cursor-pointer p-5"
    >
      <h2 className="text-3xl font-bold mb-6 text-green-950">Projects</h2>
      <div className="w-full md:w-[500px] h-96 mx-auto">
        <Slider {...settings} className="w-full">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center h-60 bg-green-400 text-white p-4 rounded-lg shadow-lg"
            >
              <h3 className="font-bold text-xl text-center mb-2">
                {project.title}
              </h3>
              <p className="text-lg py-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white text-center hover:underline mb-2"
              >
                View Project
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectComponent;
