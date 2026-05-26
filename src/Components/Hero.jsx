import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { DownloadIcon, Mail } from "lucide-react";
import Mohamed_Fahmy_CV from "../assets/Mohamed_Fahmy_CV.pdf";
import Avatar from "../assets/Avatar.png";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    {
      icon: <FaInstagramSquare />,
      href: "https://www.instagram.com/moo__fahmy?igsh=MXI2Z2xkdXV2d2Zpcg==",
    },
    {
      icon: <FaFacebook />,
      href: "https://web.facebook.com/profile.php?id=100084434403811",
    },
    { icon: <FaWhatsapp />, href: "https://wa.me/201103149905" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/mohamed-fahmy-omar-297aa33a8",
    },
    { icon: <FaGithub />, href: "https://github.com/Mohamed-Fahmy06" },
  ];

  const darkTheme = {
    textPrimary: "text-white neon-glow-cyan",
    textSecondary: "text-gray-400",
    buttonSecondary:
      "text-white border border-[#ff00ff]/50 hover:bg-[#ff00ff]/10 shadow-[0_0_15px_rgba(255,0,255,0.2)]",
    decorativeCircle: "bg-[#00f3ff] opacity-5",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-800 border-2 border-[#00f3ff] hover:bg-[#00f3ff] hover:text-white",
    decorativeCircle: "bg-[#00f3ff] opacity-5",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col cursor-default caret-transparent">
      <section
        id="Home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div
          className="container flex mx-auto px-4 sm:px-8 lg:px-14 lg:py-14
              flex-col lg:flex-row items-center justify-between
              lg:mt-14 mt-23"
        >
          <div
            className="lg:w-1/2 w-full flex flex-col items-center lg:items-start 
                  text-center lg:text-left mb-12 lg:mb-0 "
          >
            <div
              className="flex justify-center lg:justify-start
                      gap-4 sm:gap-6 mb-6 sm:mb-7 w-full"
            >
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-130 transition-all duration-300
                    decoration-800 rounded-full text-4xl hover:shadow-[0_0_15px_#00f3ff]"
                >
                  <span
                    className={`${
                      darkMode
                        ? "text-gray-600 hover:text-[#00f3ff]"
                        : "text-gray-300 hover:text-[#00f3ff]"
                    }`}
                  >
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold font-orbitron ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#ff00ff]">Mohamed Fahmy</span>
            </h1>
            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg text-lg sm:text-xl font-medium ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              I'm a passionate developer creating <span className="text-[#00f3ff]">amazing</span> web experiences.
            </p>
            {/* buttons */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col sm:flex-row justify-center
                          lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a
                  href={Mohamed_Fahmy_CV}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center text-white
                                  bg-gradient-to-r from-[#00f3ff] to-[#bc13fe]
                                  border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(0,243,255,0.6)]
                                  rounded-full text-base sm:text-lg font-bold transition-all duration-200 transform
                                  border border-[#00f3ff]/50 animate-pulse-cyan"
                >
                  <DownloadIcon className="w-5 h-5 sm:h-6 sm:w-6 mr-2" />
                  Download CV
                </a>
                <a
                  href="https://wa.me/201103149905"
                  className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center
                                      py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,0,255,0.4)]
                                      rounded-full text-base sm:text-lg font-bold transition-all duration-200 transform
                                      ${
                                        darkMode
                                          ? "text-white"
                                          : "text-gray-900"
                                      }`}
                >
                  <Mail className="w-5 h-5 sm:h-6 sm:w-6 mr-2" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          {/* IMAGES */}
          <div
            className="lg:w-1/2 w-full h-fit max-w-md lg:max-w-md mt-2 lg:mt-0 flex items-center justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 sm:w3/4 lg:w-full">
              <div className="relative overflow-hidden group">
                {/* Image frame */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src={Avatar}
                  alt=""
                  className="relative w-full h-fit object-cover transform
                            hover:scale-105 transition-transform duration-400"
                />
              </div>
            </div>
          </div>
          <div
            className={`absolute -top-20 -left-20 w-45 h-45 rounded-full sm:w-54 sm:h-54 ${theme.decorativeCircle} mix-bliend-multiply 
                  filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
