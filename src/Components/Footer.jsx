import { FaGithub, FaHeart, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";


const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #000000, #111827)"
          : "linear-gradient(to right, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}
      className="border-t cursor-default caret-transparent"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-bold mb-2"
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              My Portfolio
            </h3>
            <p
              className="text-sm"
              style={{
                color: darkMode ? "#9ca3af" : "#6b7280",
              }}
            >
              Full-Stack Developer
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Mohamed-Fahmy06"
              className="w-10 h-10 rounded-full flex items-center justify-center 
                          bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]
              hover:scale-110 transition-all hover:bg-linear-to-r 
              hover:from-orange-500 hover:to-amber-500 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-fahmy-omar-297aa33a8/"
              className="w-10 h-10 rounded-full flex items-center justify-center 
                          bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]
              hover:scale-110 transition-all hover:bg-linear-to-r 
              hover:from-orange-500 hover:to-amber-500 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/201103149905"
              className="w-10 h-10 rounded-full flex items-center justify-center 
                          bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]
              hover:scale-110 transition-all hover:bg-linear-to-r 
              hover:from-orange-500 hover:to-amber-500 hover:text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/moo__fahmy?igsh=MXI2Z2xkdXV2d2Zpcg=="
              className="w-10 h-10 rounded-full flex items-center justify-center 
                          bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]
              hover:scale-110 transition-all hover:bg-linear-to-r 
              hover:from-orange-500 hover:to-amber-500 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm flex items-center justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
              @{currentYear} Made With <FaHeart className="text-red-500" />
              By
              <span className="mt-1 text-[#f97316] dark:text-[#f59e0b]">
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
