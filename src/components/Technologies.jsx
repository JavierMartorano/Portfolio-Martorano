import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaDatabase, FaTools } from "react-icons/fa";
import { SiRedux, SiFlask, SiHtml5, SiCss3, SiDotnet, SiExpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Technologies = () => {
  const techList = [
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", icon: <FaReact className="text-blue-500" />, link: "https://reactjs.org/" },
    { name: "React Native", icon: <TbBrandReactNative className="text-blue-400" />, link: "https://reactnative.dev/" },
    { name: "Redux", icon: <SiRedux className="text-purple-600" />, link: "https://redux.js.org/" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, link: "https://nodejs.org/" },
    { name: "Python Flask", icon: <SiFlask className="text-white" />, link: "https://flask.palletsprojects.com/" },
    { name: "SQL", icon: <FaDatabase className="text-blue-700" />, link: "https://www.w3schools.com/sql/" },
    { name: "API REST", icon: <FaTools className="text-gray-300" />, link: "https://restfulapi.net/" },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "C#", icon: <SiDotnet className="text-blue-700" />, link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    { name: "Express", icon: <SiExpress className="text-white" />, link: "https://expressjs.com/" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(containerRef.current); // Detener la observación después de la primera intersección
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="py-20 bg-gray-900 text-white px-4 sm:px-8 md:px-12 lg:px-20">
      <h2 className="text-center text-4xl font-bold mb-10 animate-fadeIn">Tecnologías</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {techList.map((tech, index) => (
          <a
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white no-underline flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-105 hover:-translate-y-2`} // Efecto hover añadido
          >
            <div className="text-5xl mb-4">{tech.icon}</div>
            <h3 className="text-xl font-semibold">{tech.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
