import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import noxeImg from "../assets/Noxe.png";
import shadow_stalkers from "../assets/shadow-stalkers.png";
import physicalTherapy from "../assets/physical-therapy.png";
import saasDashboard from "../assets/saas-dashboard.png";

const Projects = ({ darkMode }) => {
  const projectsList = [
    {
      id: 1,
      title: "Noxe",
      des: "A modern, cinematic movie streaming interface built with React, Vite, and Tailwind CSS.",
      image: noxeImg,
      alt: "Noxe",
      tags: ["React", "Vite", "Tailwind CSS", "React Router"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Noxe.git",
      demoLink: "https://noxe-dun.vercel.app/",
    },
    {
      id: 2,
      title: "Code Zone",
      des: "A professional landing page and about section designed with a focus on modern UI/UX principles.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      alt: "Code Zone",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Code-zone-about-page-.git",
      demoLink: "https://code-zone-about-page-bqyc.vercel.app/",
    },
    {
      id: 3,
      title: "Shadow Stalkers",
      des: "Comprehensive management system for the Arab Academy featuring role-based access and automated reporting.",
      image: shadow_stalkers,
      alt: "Shadow Stalkers",
      tags: ["React", "Express", "Node.js", "SQL.js", "JWT"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Shadow-stalkers.git",
      demoLink: "https://shadow-stalkers.vercel.app/",
    },
    {
      id: 4,
      title: "Because Life is Precious",
      des: "A professional landing page for a physical therapy clinic, focusing on patient recovery, personalized care, and mobile-friendly design.",
      image: physicalTherapy,
      alt: "Physical Therapy Clinic",
      tags: ["HTML", "CSS", "JavaScript"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Decodelabs-Project1.git",
      demoLink: "https://decodelabs-project1.vercel.app/",
    },
    {
      id: 5,
      title: "Nexus SaaS",
      des: "A modern SaaS dashboard prototype featuring a clean UI, analytics overview, and seamless user authentication flow.",
      image: saasDashboard,
      alt: "Nexus SaaS Dashboard",
      tags: ["HTML", "CSS", "UI/UX", "SaaS"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Decodelabs-Project2.git",
      demoLink: "https://decodelabs-project2.vercel.app/",
    },
  ];

  return (
    <section
      id="Projects"
      style={{ backgroundColor: darkMode ? "#020617" : "#f9fafb" }}
      className="relative py-24 cursor-default caret-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            style={{ color: darkMode ? "white" : "#1f2937" }}
            className="sm:text-4xl font-bold mb-4 text-3xl font-orbitron"
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #00f3ff, #ff00ff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: darkMode ? "#94a3b8" : "#6b7280" }}
          >
            A showcase of my recent work and technical contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsList.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to bottom right, #0f172a, #020617)"
                  : "linear-gradient(to bottom right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "#e5e7eb",
              }}
              className="group rounded-2xl border hover:border-[#00f3ff]/50 transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative group/img">
                <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent z-10 opacity-80" />
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3
                  className="text-xl font-bold mb-3 font-orbitron group-hover:text-[#00f3ff] transition-colors"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-6 line-clamp-3"
                  style={{ color: darkMode ? "#94a3b8" : "#6b7280" }}
                >
                  {project.des}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full border transition-all font-medium font-orbitron"
                      style={{
                        backgroundColor: darkMode ? "rgba(0, 243, 255, 0.05)" : "#f0f9ff",
                        color: "#00f3ff",
                        borderColor: darkMode ? "rgba(0, 243, 255, 0.2)" : "#bae6fd",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.codeLink}
                    style={{
                      backgroundColor: darkMode ? "#1e293b" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl hover:scale-105 transition-transform border border-white/5"
                  >
                    <FaGithub className="text-xl" /> Code
                  </a>
                  <a
                    href={project.demoLink}
                    style={{
                      background: "linear-gradient(to right, #00f3ff, #bc13fe)",
                    }}
                    className="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-white text-sm font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-[#00f3ff]/20 font-orbitron"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/Mohamed-Fahmy06"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(to right, #00f3ff, #ff00ff)",
            }}
            className="inline-flex items-center gap-3 px-8 py-4 font-bold text-white text-base rounded-full font-orbitron
                      transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <FaGithub className="text-2xl" /> View all projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
