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
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Tailwind CSS",
      level: 100,
      icon: <RiTailwindCssFill />,
      color: "from-teal-500 to-amber-500",
    },
    {
      name: "HTML",
      level: 100,
      icon: <FaHtml5 />,
      color: "from-red-500 to-violet-500",
    },
    {
      name: "CSS",
      level: 100,
      icon: <FaCss />,
      color: "from-teal-500 to-blue-500/50",
    },
    {
      name: "Node.js",
      level: 25,
      icon: <FaNodeJs />,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "JavaScript",
      level: 20,
      icon: <FaNodeJs />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "C++",
      level: 35,
      icon: <FaC />,
      color: "from-[#022F40] to-[#38AECC]",
    },
    {
      name: "C",
      level: 40,
      icon: <FaC />,
      color: "from-red-500 to-violet-500",
    },
    {
      name: "Python",
      level: 10,
      icon: <FaPython />,
      color: "from-[#350068] to-[#FF6978]",
    },
    {
      name: "Problem Solving",
      level: 65,
      icon: <BsFillPuzzleFill />,
      color: "from-[#5CA9E9] to-[#E4F3E3]",
    },
  ];

  return (
    <section
      id="Skills"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="py-14 overflow-hidden relative cursor-default caret-transparent"
    >
      <div className="py-14 relative overflow-hidden ">
        <div className="container px-5 py-14 mx-auto">
          <div className="text-center mb-20" data-aos="fade-up">
            <h1
              className="sm:text-4xl text-3xl font-bold title-font mb-4 "
              style={{ color: darkMode ? "while" : "1f2937" }}
            >
              My{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #f97316, #f59e0b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Skills
              </span>
            </h1>
            <p
              className="max-w-2xl mx-auto leading-relaxed text-lg "
              style={{
                color: darkMode ? "#d1d5db" : "#4b5563",
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
                  className="h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300
                    hover:translate-y-2 group
                    hover:shadow-[0_0_30px_0_rgba(255,165,0,0,0.15)]"
                  style={{
                    background: darkMode
                      ? "linear-gradient(to bottom right, #1f2937,#111827)"
                      : "linear-gradient(to bottom right, #ffffff,#f3f4f6)",
                    border: darkMode ? "374151" : "e5e7eb",
                  }}
                >
                  <div className="flex items-center mb-6">
                    <div
                      style={{
                        background: darkMode
                          ? "linear-gradient(to bottom right, #374151,#1f2937)"
                          : "linear-gradient(to bottom right, #f3f4f6,#e5e7eb)",
                      }}
                      className="w-16 h-16 text-4xl rounded-xl p-3 
                      flex items-center justify-center 
                      group-hover:scale-110 transtion-transform duration-300"
                    >
                      <span className="object-contain">{skill.icon}</span>
                    </div>
                    <h3
                      className="text-lg font-bold ml-4"
                      style={{ color: darkMode ? "white" : "#1f2937" }}
                    >
                      {skill.name}
                    </h3>
                  </div>
                  <div className="mb-2 flex justify-between items-center">
                    <span
                      className="font-medium"
                      style={{ color: darkMode ? "d1d5db" : "6b7280" }}
                    >
                      Proficiency:{" "}
                    </span>
                    <span
                      style={{
                        background:
                          "linear-gradient(to right, #f97316, #f59e0b)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                      className="font-bold"
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full rounded-full h-3 overflow-hidden"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#e5e7eb",
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
                      ${darkMode ? "border-gray-700" : "border-gray-300"} `}
                  >
                    <div
                      className="h-1 rounded-fll opacity-70 
                    group-hover:w-full transition-all duration-500 w-1/3"
                      style={{
                        background:
                          "linear-gradient(to right, #f97316, #f59e0b)",
                      }}
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
