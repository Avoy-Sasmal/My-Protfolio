import React, { useEffect, useRef } from 'react';
import '../index.css';

const skills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Deep Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
];

// Function to create pre-sized icon images
const createPreSizedIcon = (url, size = 18) => {
    // Create a new Image object
    const img = new Image(size, size);
    img.src = url;
    img.style.maxWidth = `${size}px`;
    img.style.maxHeight = `${size}px`;
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.objectFit = 'contain';
    return img;
};

const About = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (window.TagCanvas) {
            try {
                window.TagCanvas.Start('skillsCanvas', '', {
                    textColour: '#0ea5e9',
                    outlineColour: '#0ea5e9',
                    reverse: true,
                    depth: 0.8,
                    maxSpeed: 0.05,
                    wheelZoom: false,
                    shuffleTags: true,
                    shape: "sphere",
                    zoom: 1,
                    noSelect: true,
                    pinchZoom: true,
                    freezeActive: true,
                    initial: [0.1, -0.1],
                    weight: true,
                    textHeight: 12,
                    imageScale: 0.5,
                    imageRadius: 5,
                    imageMode: "image",
                    imagePosition: "center",
                    dragControl: true,
                });
            } catch (e) {
                console.log('TagCanvas error:', e);
            }
        }
    }, []);

    return (
      <section
        id="about"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-16 overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#0ea5e9]/20 rounded-full blur-[60px] animate-pulse z-0" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0ea5e9]/15 rounded-full blur-[50px] animate-pulse z-0" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0ea5e9]/20 rounded-full blur-[60px] animate-pulse z-0" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#0ea5e9]/15 rounded-full blur-[50px] animate-pulse z-0" />

        {/* Left Section - Intro Box */}
        <div className="w-full md:w-1/2 flex justify-center items-center z-10 px-4 md:px-8">
          <div className="bg-[#16213e]/80 border border-[#0ea5e9]/30 shadow-lg shadow-[#0ea5e9]/20 rounded-xl backdrop-blur-md p-6 md:p-10 transition-all duration-300 hover:scale-[1.02] w-full max-w-xl text-white">
            <h1 className="text-3xl font-bold mb-4 text-[#0ea5e9]">
             About 
            </h1>
            <p className="text-base md:text-lg mb-3 leading-relaxed animate-fadeIn">
              Hey there! 👋 I'm{" "}
              <span className="text-[#0ea5e9] font-semibold">Avoy </span>, a
              passionate tech enthusiast who loves turning ideas into
              interactive, high-performing web applications.
            </p>
            <p className="text-base md:text-lg mb-3 animate-fadeIn delay-100">
              With a solid command of{" "}
              <span className="text-[#0ea5e9] font-semibold">React</span> and{" "}
              <span className="text-[#0ea5e9] font-semibold">Tailwind CSS</span>
              , I craft visually engaging, responsive user interfaces with
              clean, maintainable code..
            </p>
            <p className="text-base md:text-lg mb-3 animate-fadeIn delay-200">
              I'm constantly exploring the evolving web ecosystem, currently
              diving deeper into{" "}
              <span className="text-[#0ea5e9] font-semibold">
                Machine Learning
              </span>{" "}
              and{" "}
              <span className="text-[#0ea5e9] font-semibold">
                Deep Learning
              </span>
              .
            </p>
            <p className="text-base md:text-lg animate-fadeIn delay-300">
              Let's connect and create something amazing together! 🚀
            </p>
          </div>
        </div>

        {/* Right Section - Skill Sphere */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 z-10">
          <div className="relative about-sphere-container w-[420px] h-[420px] rounded-full bg-[#16213e]/70 shadow-inner shadow-[#0ea5e9]/30 backdrop-blur-md hover:shadow-[#0ea5e9]/50 transition-all duration-500">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0ea5e9]/30 via-[#0ea5e9]/20 to-transparent blur-[40px] animate-pulse z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[380px] h-[380px] overflow-hidden">
                <canvas
                  ref={canvasRef}
                  width="380"
                  height="380"
                  id="skillsCanvas"
                  className="relative z-10"
                >
                  <ul>
                    {skills.map((skill, idx) => (
                      <li key={idx}>
                        <a
                          className="group relative about-skill-glow flex items-center justify-center hover:bg-yellow-300/10 p-2 rounded-full transition-all duration-200"
                          href="#"
                          style={{ display: "inline-block" }}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-4 h-4"
                            style={{
                              maxWidth: "24px",
                              maxHeight: "24px",
                              width: "24px",
                              height: "24px",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                          <span className="absolute bottom-full mb-2 px-2 py-1 text-sm text-white bg-black bg-opacity-75 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                            {skill.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </canvas>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;
