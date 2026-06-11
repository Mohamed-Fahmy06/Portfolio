import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import noxeImg from "../assets/Noxe.png";
import shadow_stalkers from "../assets/shadow-stalkers.png";
import physicalTherapy from "../assets/physical-therapy.png";
import saasDashboard from "../assets/saas-dashboard.png";

const Projects = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const projectsList = useMemo(() => [
    {
      id: 1,
      title: "Noxe",
      client: "CineStream Inc.",
      year: "2024",
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
      client: "Creative Agency",
      year: "2023",
      des: "A professional landing page and about section designed with a focus on modern UI/UX principles.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      alt: "Code Zone",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Code-zone-about-page-.git",
      demoLink: "https://code-zone-about-page-bqyc.vercel.app/",
    },
    {
      id: 3,
      title: "Shadow Stalkers",
      client: "Arab Academy",
      year: "2024",
      des: "Comprehensive management system for the Arab Academy featuring role-based access and automated reporting.",
      image: shadow_stalkers,
      alt: "Shadow Stalkers",
      tags: ["React", "Express", "Node.js", "SQL.js", "JWT"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Shadow-stalkers.git",
      demoLink: "https://shadow-stalkers.vercel.app/",
    },
    {
      id: 4,
      title: "Website Redesign",
      client: "TechCorp",
      year: "2023",
      des: "A professional landing page for a physical therapy clinic, focusing on patient recovery and personalized care.",
      image: physicalTherapy,
      alt: "Physical Therapy Clinic",
      tags: ["HTML", "CSS", "JavaScript"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Decodelabs-Project1.git",
      demoLink: "https://decodelabs-project1.vercel.app/",
    },
    {
      id: 5,
      title: "Nexus SaaS",
      client: "Nexus Tech",
      year: "2023",
      des: "A modern SaaS dashboard prototype featuring a clean UI, analytics overview, and seamless auth flow.",
      image: saasDashboard,
      alt: "Nexus SaaS Dashboard",
      tags: ["HTML", "CSS", "UI/UX", "SaaS"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Decodelabs-Project2.git",
      demoLink: "https://decodelabs-project2.vercel.app/",
    },
    {
      id: 6,
      title: "V-ROOMS",
      client: "Virtual Collaborative Spaces",
      year: "2022",
      des: "An immersive platform for booking virtual collaborative spaces, featuring interactive environments.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
      alt: "V-ROOMS",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Decodelabs_Project3.git",
      demoLink: "https://decodelabs-project3.vercel.app/",
    },
    {
      id: 7,
      title: "Batch 2026",
      client: "Educational Dept",
      year: "2024",
      des: "A comprehensive multi-step application portal for developer training, featuring advanced form validation.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2340&auto=format&fit=crop",
      alt: "Code Zone - Batch 2026",
      tags: ["HTML", "CSS", "JavaScript", "Form Logic"],
      codeLink: "https://github.com/Mohamed-Fahmy06/Decodelabs_Project4.git",
      demoLink: "https://decodelabs-project4.vercel.app/",
    },
  ], []);

  const filteredProjects = projectsList.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (activeIndex >= filteredProjects.length && filteredProjects.length > 0) {
      setActiveIndex(filteredProjects.length - 1);
    } else if (filteredProjects.length === 0) {
      setActiveIndex(0);
    }
  }, [filteredProjects.length, activeIndex]);

  const handleNext = () => {
    if (filteredProjects.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    if (filteredProjects.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const currentProject = filteredProjects[activeIndex];

  return (
    <section
      id="Projects"
      className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center py-20 cursor-default"
    >
      {/* Cinematic Lighting - Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.15)_0%,transparent_70%)] pointer-events-none z-0" />
      
      {/* Background Labels */}
      <div className="absolute top-12 left-12 text-white/40 font-light tracking-[0.3em] uppercase text-xs sm:text-sm z-10">
        My Projects
      </div>
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-white font-bold text-lg sm:text-2xl tracking-[0.4em] uppercase whitespace-nowrap z-10">
        Project Spotlight
      </div>

      {/* Main Carousel Wrapper */}
      <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center perspective-[2000px] mt-10 z-10">
        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          <AnimatePresence initial={false}>
            {filteredProjects.map((project, index) => {
              const diff = index - activeIndex;
              const absDiff = Math.abs(diff);
              
              // Only show nearby cards for performance
              if (absDiff > 3) return null;

              return (
                <motion.div
                  key={project.id}
                  initial={false}
                  animate={{
                    x: diff * (window.innerWidth < 640 ? 120 : 320),
                    z: absDiff * -200,
                    rotateY: diff * -35,
                    opacity: 1 - absDiff * 0.3,
                    scale: 1 - absDiff * 0.1,
                    filter: absDiff === 0 ? "grayscale(0%) brightness(1.1)" : "grayscale(100%) brightness(0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute w-[260px] h-[360px] sm:w-[480px] sm:h-[320px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Glassmorphism Search Bar - Only on Central Card */}
                  {absDiff === 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-8 left-1/2 -translate-x-1/2 w-[85%] z-30"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-2xl">
                        <FaSearch className="text-white/40 text-sm" />
                        <input
                          type="text"
                          placeholder="Search and Filter..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-white/30"
                        />
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Reflection Floor - Stark Black Reflective Surface */}
      <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden pointer-events-none opacity-40 mt-[-60px] z-0">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/80 to-black z-10" />
        <div className="flex items-center justify-center perspective-[2000px] scale-y-[-1] origin-top">
          <div className="flex items-center justify-center preserve-3d">
            {filteredProjects.map((project, index) => {
              const diff = index - activeIndex;
              const absDiff = Math.abs(diff);
              if (absDiff > 2) return null;

              return (
                <motion.div
                  key={`reflect-${project.id}`}
                  animate={{
                    x: diff * (window.innerWidth < 640 ? 120 : 320),
                    z: absDiff * -200,
                    rotateY: diff * -35,
                    scale: 1 - absDiff * 0.1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="absolute w-[260px] h-[360px] sm:w-[480px] sm:h-[320px] rounded-3xl overflow-hidden grayscale brightness-[0.3]"
                >
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover blur-md"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Details - Arranged specifically below card and reflection */}
      <div className="relative z-20 mt-10 text-center px-4 min-h-[160px]">
        <AnimatePresence mode="wait">
          {currentProject ? (
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h3 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter mb-2">
                {currentProject.title}
              </h3>
              <p className="text-white/70 text-lg sm:text-2xl font-medium mb-1">
                Client: {currentProject.client}
              </p>
              <p className="text-white/30 text-sm sm:text-base tracking-[0.2em] uppercase font-light">
                Designed in {currentProject.year}
              </p>
              
              <div className="flex items-center justify-center gap-8 mt-10">
                <a
                  href={currentProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/40 hover:text-orange-500 transition-all duration-300"
                >
                  <FaGithub className="text-xl group-hover:scale-110 transition-transform" /> 
                  <span className="text-sm font-semibold tracking-wider uppercase">Repository</span>
                </a>
                <a
                  href={currentProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/40 hover:text-orange-500 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-base group-hover:scale-110 transition-transform" /> 
                  <span className="text-sm font-semibold tracking-wider uppercase">Live View</span>
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div className="text-white/20 text-xl font-light italic">
              No projects match your search...
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Controls & Central Button */}
      <div className="flex flex-col items-center gap-12 mt-16 relative z-30 w-full">
        {/* Navigation Arrows & Progress */}
        <div className="flex items-center justify-center gap-10">
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all bg-white/5 backdrop-blur-md active:scale-90"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          
          <div className="h-[3px] w-32 sm:w-48 bg-white/10 overflow-hidden rounded-full">
            <motion.div 
              animate={{ width: filteredProjects.length > 0 ? `${((activeIndex + 1) / filteredProjects.length) * 100}%` : "0%" }}
              className="h-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
            />
          </div>

          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all bg-white/5 backdrop-blur-md active:scale-90"
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>

        {/* Central Navigation Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://github.com/Mohamed-Fahmy06"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-white text-black font-black text-sm tracking-[0.3em] uppercase rounded-full hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.4)] block text-center"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
    </section>
  );
};

export default Projects;

