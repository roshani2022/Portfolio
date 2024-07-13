
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";


const Skills: React.FC = () => {

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "React Js", icon: <FaReact /> },
    { name: "Next Js", icon: <SiNextdotjs /> },
    { name: "Context API", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Mongo Db", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center cursor-pointer mt-4 mb-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-green-950">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-green-400 text-white p-2 md:p-4 rounded-lg text-center font-extrabold text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.5, backgroundColor: "#e2e8f0" }}
            transition={{ delay: index * 0.1, duration: 1 }}
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
