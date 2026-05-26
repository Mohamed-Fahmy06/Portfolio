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
      color: "from-[#00f3ff] to-[#bc13fe]",
    },
    {
      name: "Tailwind CSS",
      level: 100,
      icon: <RiTailwindCssFill />,
      color: "from-[#00f3ff] to-[#ff00ff]",
    },
    {
      name: "HTML",
      level: 100,
      icon: <FaHtml5 />,
      color: "from-[#ff00ff] to-[#bc13fe]",
    },
    {
      name: "CSS",
      level: 100,
      icon: <FaCss />,
      color: "from-[#00f3ff] to-blue-500",
    },
    {
      name: "Node.js",
      level: 25,
      icon: <FaNodeJs />,
      color: "from-green-400 to-[#00f3ff]",
    },
    {
      name: "JavaScript",
      level: 25,
      icon: <FaNodeJs />,
      color: "from-[#00f3ff] to-[#ff00ff]",
    },
    {
      name: "C++",
      level: 35,
      icon: <FaC />,
      color: "from-[#38AECC] to-[#00f3ff]",
    },
    {
      name: "C",
      level: 40,
      icon: <FaC />,
      color: "from-red-400 to-[#ff00ff]",
    },
    {
      name: "Python",
      level: 10,
      icon: <FaPython />,
      color: "from-[#bc13fe] to-[#ff00ff]",
    },
    {
      name: "Problem Solving",
      level: 65,
      icon: <BsFillPuzzleFill />,
      color: "from-[#00f3ff] to-[#bc13fe]",
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
              className="sm:text-4xl text-3xl font-bold title-font mb-4 font-orbitron"
              style={{ color: darkMode ? "white" : "#1f2937" }}
            >
              My{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #00f3ff, #ff00ff)",
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
                  className={`h-full p-6 rounded-2xl border transition-all duration-300
                    hover:translate-y-2 group
                    ${darkMode ? 'border-white/10 hover:border-[#00f3ff]/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]' : 'border-gray-200 hover:border-[#00f3ff]/50'}`}
                  style={{
                    background: darkMode
                      ? "linear-gradient(to bottom right, #0f172a, #020617)"
                      : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                  }}
                >
                  <div className="flex items-center mb-6">
                    <div
                      style={{
                        background: darkMode
                          ? "linear-gradient(to bottom right, #1e293b, #0f172a)"
                          : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                      }}
                      className="w-16 h-16 text-4xl rounded-xl p-3 
                      flex items-center justify-center 
                      group-hover:scale-110 group-hover:text-[#00f3ff] transition-all duration-300
                      border border-white/5 group-hover:border-[#00f3ff]/30"
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
                      style={{
                        background:
                          "linear-gradient(to right, #00f3ff, #ff00ff)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                      className="font-bold font-orbitron"
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
                      ${skill.color} transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,243,255,0.5)]`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div
                    className={`mt-6 pt-6 border-t 
                      ${darkMode ? "border-white/5" : "border-gray-300"} `}
                  >
                    <div
                      className="h-1 rounded-full opacity-70 
                    group-hover:w-full transition-all duration-500 w-1/3"
                      style={{
                        background:
                          "linear-gradient(to right, #00f3ff, #ff00ff)",
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
