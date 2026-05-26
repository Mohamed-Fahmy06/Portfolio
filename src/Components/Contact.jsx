import React, { useState } from "react";
import contac from "../assets/contac.png";

const Contact = ({ darkMode }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0760489b-11a8-49c6-ad9d-1bd21e15d93e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSubmitting(false);
  };

  return (
    <section
      id="Contact"
      style={{
        backgroundColor: darkMode ? "#020617" : "#f9fafb",
      }}
      className="py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden cursor-default caret-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-8 " data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 font-orbitron"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            Get In <span className="text-[#38bdf8]">Touch</span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl"
            style={{
              color: darkMode ? "#94a3b8" : "#6b7280",
            }}
          >
            I'm always open to discussing new opportunities or interesting
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
          {/* Image */}
          <div
            className="flex justify-center order-2 lg:order-1 relative group"
            data-aos="fade-right"
          >
            <div className="absolute -inset-4 bg-[#38bdf8] rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition duration-1000"></div>
            <img
              src={contac}
              alt=""
              className="relative w-full max-w-xs sm:max-w-sm lg:max-w-sm h-auto object-cover"
            />
          </div>
          <form
            onSubmit={onSubmit}
            className={`rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order1 lg:order-2 caret-white
              ${darkMode ? 'bg-white/5 border-white/5' : 'bg-white border-gray-200'}`}
            data-aos="fade-left"
          >
            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission"
            />
            <input type="hidden" name="from_name" value="Portfolio Website" />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* First Name */}
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                style={{
                  backgroundColor: darkMode ? "#1e293b" : "#f1f5f9",
                  borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base 
              focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/50 transition-all font-medium"
                required
              />
              {/* Last Name */}
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                style={{
                  backgroundColor: darkMode ? "#1e293b" : "#f1f5f9",
                  borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base 
              focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/50 transition-all font-medium"
                required
              />
            </div>
            {/* Email Address */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              style={{
                backgroundColor: darkMode ? "#1e293b" : "#f1f5f9",
                borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base 
              focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/50 transition-all mb-4 sm:mb-6 font-medium"
              required
            />
            {/* Phone Number */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              style={{
                backgroundColor: darkMode ? "#1e293b" : "#f1f5f9",
                borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base 
              focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/50 transition-all mb-4 sm:mb-6 font-medium"
              required
            />
            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              style={{
                backgroundColor: darkMode ? "#1e293b" : "#f1f5f9",
                borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base 
              focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]/50 transition-all mb-4 sm:mb-6 resize-none font-medium"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 sm:py-3 text-white font-bold rounded-lg text-sm sm:text-base font-orbitron
                bg-linear-to-r from-[#38bdf8] to-[#0284c7] hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {result && (
              <p className={`mt-4 text-center text-sm font-bold font-orbitron ${result === "Message Sent Successfully!" ? "text-[#38bdf8]" : "text-red-500"}`}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
