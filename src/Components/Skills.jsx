import {
  FaC,
  FaCss,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { BsFillPuzzleFill } from "react-icons/bs";

import { RiTailwindCssFill } from "react-icons/ri";

const Skills = ({ darkMode }) => {
  const skills = [
    {
      name: "React",
      level: 30,
      icon: <FaReact />,
      color: "from-[#38bdf8] to-[#0ea5e9]",
    },
    {
      name: "Tailwind CSS",
      level: 100,
      icon: <RiTailwindCssFill />,
      color: "from-[#38bdf8] to-[#0ea5e9]",
    },
    {
      name: "HTML",
      level: 100,
      icon: <FaHtml5 />,
      color: "from-[#38bdf8] to-[#0ea5e9]",
    },
    {
      name: "CSS",
      level: 100,
      icon: <FaCss />,
      color: "from-[#38bdf8] to-[#0ea5e9]",
    },
    {
      name: "Node.js",
      level: 25,
      icon: <FaNodeJs />,
      color: "from-[#38bdf8] to-[#0ea5e9]",
    },
    {
      name: "JavaScript",
      level: 25,
      icon: <FaNodeJs />,
      color: "from-[#38bdf8] to-[#0ea5e9]",
    },
    {
      name: "C++",
      level: 35,
      icon: <FaC />,
      color: "from-[#38bdf8] to-[#0ea5e9]",
    },
    {
      name: "C",
      level: 40,
      icon: <FaC />,
      color: "from-[#38bdf8] to-[#0ea5e9]",
    },
    {
      name: "Python",
      level: 10,
      icon: <FaPython />,
      color: "from-[#38bdf8] to-[#0ea5e9]",
    },
    {
      name: "Problem Solving",
      level: 65,
      icon: <BsFillPuzzleFill />,
      color: "from-[#38bdf8] to-[#0ea5e9]",
    },
  ];

  return (
    <section
      id="Skills"
      style={{ backgroundColor: darkMode ? "#020617" : "#f9fafb" }}
      className="py-14 overflow-hidden relative cursor-default caret-transparent"
    >
      <div className="py-14 relative overflow-hidden ">
        <div className="container px-5 py-14 mx-auto">
          <div className="text-center mb-20" data-aos="fade-up">
            <h1
              className="sm:text-4xl text-3xl font-bold title-font mb-4 font-orbitron text-white"
            >
              My <span className="text-[#38bdf8]">Skills</span>
            </h1>
            <p
              className="max-w-2xl mx-auto leading-relaxed text-lg "
              style={{
                color: darkMode ? "#94a3b8" : "#4b5563",
              }}
            >
              I have a strong foundation in these technologies and continue to
              expand my knowledge and skills.
            </p>
          </div>
          <div
            className="flex flex-wrap -m-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 md:w-1/2 lg:w-1/4 w-full"
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
              >
                <div
                  className={`h-full p-6 rounded-xl border transition-all duration-300
                    hover:translate-y-2 group
                    ${darkMode ? 'border-white/5 bg-white/5 hover:border-[#38bdf8]/30' : 'border-gray-200 bg-white hover:border-[#38bdf8]/30'}`}
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 text-4xl rounded-xl p-3 
                      flex items-center justify-center 
                      group-hover:scale-110 group-hover:text-[#38bdf8] transition-all duration-300
                      border border-white/5 group-hover:border-[#38bdf8]/30
                      ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                    >
                      <span className="object-contain">{skill.icon}</span>
                    </div>
                    <h3
                      className="text-lg font-bold ml-4 font-orbitron"
                      style={{ color: darkMode ? "white" : "#1f2937" }}
                    >
                      {skill.name}
                    </h3>
                  </div>
                  <div className="mb-2 flex justify-between items-center">
                    <span
                      className="font-medium"
                      style={{ color: darkMode ? "#94a3b8" : "6b7280" }}
                    >
                      Proficiency:{" "}
                    </span>
                    <span
                      className="font-bold font-orbitron text-[#38bdf8]"
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full rounded-full h-2 overflow-hidden"
                    style={{
                      backgroundColor: darkMode ? "#1e293b" : "#e5e7eb",
                    }}
                  >
                    <div
                      className={`h-full rounded-full bg-linear-to-r 
                      ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div
                    className={`mt-6 pt-6 border-t 
                      ${darkMode ? "border-white/5" : "border-gray-300"} `}
                  >
                    <div
                      className="h-1 rounded-full opacity-70 
                    group-hover:w-full transition-all duration-500 w-1/3 bg-[#38bdf8]"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
