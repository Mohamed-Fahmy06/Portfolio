import ABout from "../assets/ABout.png";
import { GraduationCap, Briefcase, Layout, ArrowRight } from "lucide-react";

const About = ({ darkMode }) => {
  return (
    <section
      id="About"
      className={`min-h-screen overflow-hidden flex items-center justify-center
    px-4 sm:px-6 py-18 cursor-default caret-transparent`}
    >
      <div
        className={`max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center `}
      >
        <figure
          data-aos="fade-right"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className=" relative w-75 h-75 lg:w-96 lg:h-96 lg:mt-15">
            {/* image background decoration */}
            <div
              className="absolute -inset-5 lg:-inset-20 
                      bg-gradient-to-br from-[#00f3ff] via-[#ff00ff] to-[#bc13fe] rotate-12 opacity-20 blur-2xl z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>
            <div
              className="absolute -inset-2 lg:-inset-4 
                      bg-gradient-to-tr from-[#00f3ff]/20 to-transparent rounded-3xl rotate-6 z-0 border border-[#00f3ff]/30"
              data-aos="fade-up"
              data-aos-delay="700"
            ></div>
            <img
              src={ABout}
              alt="Mohamed's Portrait"
              className="absolute inset-0 object-cover z-10 
              transition-all duration-500 hover:scale-105 -top-18 lg:-top-35"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <header>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2" data-aos="fade-up" data-aos-delay="350">
              <span className="w-8 h-0.5 bg-[#00f3ff]"></span>
              <span className="text-[#00f3ff] font-medium uppercase tracking-wider text-sm font-orbitron">Get to know me</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent font-orbitron
            bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#bc13fe] bg-clip-text neon-glow-cyan"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>

          <div
            className={`text-sm sm:text-base lg:text-lg mb-8 leading-relaxed space-y-4
            border-l-4 border-[#ff00ff] p-4 sm:p-6 rounded-r-2xl
            backdrop-blur-sm shadow-xl shadow-[#ff00ff]/5
            ${darkMode ? "text-gray-300 bg-white/5 border-r border-t border-b border-white/10" : "text-gray-700 bg-[#00f3ff]/5"}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p>
              I’m a <span className="text-[#00f3ff] font-semibold text-lg italic">Full-Stack Web Developer</span> with a strong passion for building
              scalable, real-world web solutions. I started my journey in web
              development early during my first year of high school, which gave me
              a solid technical foundation and a long-term vision in the field.
            </p>
            <p>
              By my second year, I was already working as a <span className="text-[#ff00ff] font-semibold italic text-lg">Trainer</span>, helping others
              learn web development—an experience that sharpened both my technical
              depth and my ability to break down complex concepts clearly.
            </p>
            <p>
              Today, as a university student, I focus on turning ideas into functional,
              user-centered products. I’m currently open to freelance opportunities and collaborations where I
              can contribute, grow, and build meaningful digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
            {/* Years Education */}
            <div
              className={`p-4 rounded-2xl transition-all duration-300 hover:-translate-y-2 group
              ${darkMode ? "bg-white/5 border border-white/10 hover:border-[#00f3ff]/50 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]" : "bg-gray-50 border border-gray-200 shadow-md"}`}
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="flex justify-center lg:justify-start mb-2 text-[#00f3ff] group-hover:animate-pulse">
                <GraduationCap size={24} />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-[#00f3ff] font-orbitron">
                3+
              </div>
              <div
                className={`text-[10px] sm:text-xs font-medium uppercase tracking-tighter
                ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Years Education
              </div>
            </div>

            {/* Years of Experience */}
            <div
              className={`p-4 rounded-2xl transition-all duration-300 hover:-translate-y-2 group
              ${darkMode ? "bg-white/5 border border-white/10 hover:border-[#ff00ff]/50 hover:shadow-[0_0_15px_rgba(255,0,255,0.2)]" : "bg-gray-50 border border-gray-200 shadow-md"}`}
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="flex justify-center lg:justify-start mb-2 text-[#ff00ff] group-hover:animate-pulse">
                <Briefcase size={24} />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-[#ff00ff] font-orbitron">
                1+
              </div>
              <div
                className={`text-[10px] sm:text-xs font-medium uppercase tracking-tighter
                ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Experience
              </div>
            </div>

            {/* Projects completed */}
            <div
              className={`p-4 rounded-2xl transition-all duration-300 hover:-translate-y-2 group
                ${darkMode ? "bg-white/5 border border-white/10 hover:border-[#bc13fe]/50 hover:shadow-[0_0_15px_rgba(188,19,254,0.2)]" : "bg-gray-50 border border-gray-200 shadow-md"}`}
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <div className="flex justify-center lg:justify-start mb-2 text-[#bc13fe] group-hover:animate-pulse">
                <Layout size={24} />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-[#bc13fe] font-orbitron">
                5+
              </div>
              <div
                className={`text-[10px] sm:text-xs font-medium uppercase tracking-tighter
                ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Projects
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;

