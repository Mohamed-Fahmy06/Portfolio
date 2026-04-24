import ABout from "../assets/ABout.png";

const About = ({darkMode}) => {
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
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className=" relative w-75 h-75 lg:w-96 lg:h-96 lg:mt-15">
            {/* image */}
            <div
              className="absolute -inset-5 lg:-inset-20 
                      bg-linear-to-l from-[#f97316] via-[#fb923c] to-[#f59e0b] rotate-12 star-shape z-0"
              data-aos="fade-up"
              data-aos-delay="600"
            ></div>
            <img
              src={ABout}
              alt=""
              className="absolute inset-0 object-cover z-10 
              transition-all duration-300 -top-18 lg:-top-35"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:uorer-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent
            bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About me
            </h1>
          </header>

          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed 
            bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl
            backdrop-blur-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            maiores sequi minima quo inventore tempora voluptates molestiae.
            Laudantium iusto modi sint recusandae enim dignissimos nemo ipsam
            molestiae nesciunt? Consequuntur, consectetur?
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 ">
            {/* Years Education */}
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                3+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base 
                ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Years Education
              </div>
            </div>
            {/* Years of Experience */}
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                1+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base 
                ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Years of Experience
              </div>
            </div>
            {/* Projects completed */}
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                5+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base 
                ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Projects completed
              </div>
            </div>
          </div>

          <button
            className={`w-full sm:w-auto inline-flex items-center justify-center mb-7
                  border-2 border-orange-500 py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.6)]
                  rounded-full text-base sm:text-lg font-semibold transition-all duration-200 transform
                  ${darkMode ? "text-white bg-orange-500/10" : "text-gray-800 bg-white/90"}`}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
