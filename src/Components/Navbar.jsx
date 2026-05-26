import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";


const Navbar = ({ darkMode, toggleDarkMode }) => {

  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', link: '#Home' },
    { name: 'About', link: '#About' },
    { name: 'Skills', link: '#Skills' },
    { name: 'Projects', link: '#Projects' },
    { name: 'Contact', link: '#Contact' }
  ];

  const lightColors = {
    navBg: 'bg-white/80',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    textHover: 'text-[#00f3ff]',
    textActive: 'text-[#00f3ff]',
    indicator: 'from-[#00f3ff] to-[#ff00ff]',
    button: 'from-[#00f3ff] to-[#bc13fe]'
  };

  const darkColors = {
    navBg: 'bg-[#020617]/80',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    textHover: 'text-[#00f3ff]',
    textActive: 'text-[#00f3ff]',
    indicator: 'from-[#00f3ff] to-[#ff00ff]',
    button: 'from-[#00f3ff] to-[#bc13fe]'
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavItemClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className=" flex justify-center w-full fixed z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg}
        backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg mt-2 
        border ${darkMode ? 'border-[#00f3ff]/30 shadow-[#00f3ff]/10' : 'border-gray-200'}`}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
          {/* logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className={`text-xl font-bold font-orbitron ${colors.textPrimary}`}>
              Portfolio
              <span className="text-[#00f3ff]">.</span>
            </span>
          </motion.a>

          {/* nav items */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`relative text-sm font-medium ${colors.textPrimary} hover:${colors.textHover} ${activeSection === item.name.toLowerCase() ? `${colors.textActive}` : ""}`}
                onClick={() => handleNavItemClick(item.name)}
              >
                <motion.span
                  className={`font-bold transition-colors duration-300
                    ${
                      activeSection === item.name.toLowerCase()
                        ? colors.textActive
                        : `${colors.textSecondary} hover:text-[#00f3ff]`
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator} shadow-[0_0_10px_#00f3ff]`}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* dark mode toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 text-[#00f3ff] border border-[#00f3ff]/30"
                  : "bg-gray-100 text-gray-700 border border-gray-200"
              } transition-colors`}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* button */}
            <motion.a
              href="#Contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ff00ff" }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold ${colors.button} rounded-full bg-linear-to-r text-white shadow-lg transition-shadow border border-[#ff00ff]/50`}
            >
              Hire me
            </motion.a>
          </div>

          {/* mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4 px-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={`w-5 h-5 ${darkMode
                  ? "text-white"
                  : "text-gray-900"}`} />
              ) : (
                  <Menu className={`w-5 h-5 ${darkMode
                    ? "text-white"
                    : "text-gray-900"}`} />
              )}
            </motion.button>

          </div>

        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: -20 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden absolute top-full left-0 right-0 mt-2 shadow-lg ${darkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-lg rounded-xl border ${darkMode ? "border-gray-600" : "border-gray-300"}`}
          >
            <div className="flex flex-col space-y-2 px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className={`block`}
                  onClick={() => {
                    handleNavItemClick(item.name);
                  }}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`py-3 px-4 text-center rounded-lg ${activeSection === item.name.toLowerCase()
                      ? darkMode
                        ? "bg-gray-800"
                        : "bg-orange-100"
                      : ""}`}
                  >
                    <span
                      className={`font-medium ${activeSection === item.name.toLowerCase()
                        ? colors.textActive
                        : colors.textSecondary
                    }`}
                    >{item.name}</span>
                  </motion.div>
                </a>
              ))}

              <motion.a
                href="#Contact"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className={`block px-4 py-3 font-semibold ${colors.button}
                rounded-lg bg-linear-to-r text-center text-white shadow-md
                `}
              >
                Hire me
              </motion.a>

            </div>
          </motion.div>
        )}

      </motion.nav>
    </div>
  );
}

export default Navbar
