import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import nox from "../assets/nox.png";
import shadow_stalkers from "../assets/shadow-stalkers.png";

const Projects = ({ darkMode }) => {
  const Projects = [
    {
      id: 1,
      title: "Noxe",
      des: "A modern, cinematic movie streaming interface built with React, Vite, and Tailwind CSS.",
      image: nox,
      alt: "Noxe",
      tags: ["React", "Vite", "Tailwind CSS", "React Router"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Noxe.git",
      demoLink: "https://noxe-cinematic.vercel.app/",
    },
    {
      id: 2,
      title: "Code Zone (About page)",
      des: "Description for Project 2",
      image: "image",
      alt: "Project 2",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Code-zone-about-page-.git",
      demoLink: "https://code-zone-about-page-bqyc.vercel.app/",
    },
    {
      id: 3,
      title: "Shadow Stalkers",
      des: "A comprehensive hall and lecture room management system for the Arab Academy, featuring role-based access control and automated reporting.",
      image: shadow_stalkers,
      alt: "Shadow Stalkers",
      tags: ["React", "Express", "Node.js", "SQL.js", "JWT"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Shadow-stalkers.git",
      demoLink: "https://shadow-stalkers.vercel.app/",
    },
    {
      id: 4,
      title: "Project 4",
      des: "Description for Project 4",
      image: "image",
      alt: "Project 4",
      tags: ["Tag 7", "Tag 8"],
    },
  ];

  return (
    <section
      id="Projects"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="relative py-24 cursor-default caret-transparent"
    >
      <div className={`container mx-auto px-4`}>
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
            className="sm-text-4xl font-bold mb-3 text-3xl"
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            A show case of my recent projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {Projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border hover:border-orange-500/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`h-36 overflow-hidden rounded-t-xl relative ${project.id === 1 ? "ring-2 ring-blue-500/50" : ""}`}>
                {project.id === 1 && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-2 left-2 z-20">
                      <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-lg">
                        Featured
                      </span>
                    </div>
                  </>
                )}
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-130 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2 flex items-center gap-2"
                  style={{
                    color: darkMode ? "white" : "#1f2937",
                  }}
                >
                  {project.title}
                  {project.id === 1 && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  {project.des}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-full border border-transparent transition-all"
                      style={{
                        backgroundColor: project.id === 1 ? (darkMode ? "rgba(37, 99, 235, 0.1)" : "#eff6ff") : (darkMode ? "#374151" : "#f3f4f6"),
                        color: project.id === 1 ? "#3b82f6" : (darkMode ? "#d1d5db" : "#4b5563"),
                        borderColor: project.id === 1 ? "rgba(59, 130, 246, 0.2)" : "transparent",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3.5 ">
                  {/* code */}
                  <a
                    href={project.codeLink}
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex flex-1 items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:scale-110 hover:opacity-90 transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-4xl" /> <span>Code</span>
                  </a>
                  {/* demo */}
                  <a
                    href={project.demoLink}
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                    }}
                    className="flex flex-1 items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg 
                    hover:shadow-orange-500/25 hover:scale-110 transition-all hover:shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-lg" /> <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 ">
          <a
            href="#"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
            className="inline-flex items-center gap-2 px-7 py-4 font-semibold text-white text-sm rounded-full 
                    hover:shadow-orange-500/25 transition-all hover:shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub className="text-3xl" /> <span>View all projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
// deployment trigger
