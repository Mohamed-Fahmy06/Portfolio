import { FaGithub, FaHeart, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";


const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #000000, #020617)"
          : "linear-gradient(to right, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "#d1d5db",
      }}
      className="border-t cursor-default caret-transparent"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-bold mb-2 font-orbitron"
              style={{
                background: "linear-gradient(to right, #00f3ff, #ff00ff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              My Portfolio
            </h3>
            <p
              className="text-sm font-medium"
              style={{
                color: darkMode ? "#94a3b8" : "#6b7280",
              }}
            >
              Full-Stack Developer
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Mohamed-Fahmy06"
              className="w-10 h-10 rounded-full flex items-center justify-center 
                          bg-gray-800 dark:bg-gray-800 text-white
              hover:scale-110 transition-all hover:bg-[#00f3ff] hover:text-black hover:shadow-[0_0_15px_#00f3ff] border border-white/5"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-fahmy-omar-297aa33a8/"
              className="w-10 h-10 rounded-full flex items-center justify-center 
                          bg-gray-800 dark:bg-gray-800 text-white
              hover:scale-110 transition-all hover:bg-[#00f3ff] hover:text-black hover:shadow-[0_0_15px_#00f3ff] border border-white/5"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/201103149905"
              className="w-10 h-10 rounded-full flex items-center justify-center 
                          bg-gray-800 dark:bg-gray-800 text-white
              hover:scale-110 transition-all hover:bg-[#00f3ff] hover:text-black hover:shadow-[0_0_15px_#00f3ff] border border-white/5"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/moo__fahmy?igsh=MXI2Z2xkdXV2d2Zpcg=="
              className="w-10 h-10 rounded-full flex items-center justify-center 
                          bg-gray-800 dark:bg-gray-800 text-white
              hover:scale-110 transition-all hover:bg-[#00f3ff] hover:text-black hover:shadow-[0_0_15px_#00f3ff] border border-white/5"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="text-center md:text-right font-medium">
            <p className="text-sm flex items-center justify-end gap-1 text-[#6b7280] dark:text-[#94a3b8]">
              @{currentYear} Made With <FaHeart className="text-[#ff00ff] animate-pulse" />
              By
              <span className="mt-1 text-[#00f3ff] font-orbitron">
                Mohamed Fahmy
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
