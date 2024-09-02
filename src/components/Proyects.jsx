import React, { useState } from "react";
import MatchMaker from "../assets/img/MatchMaker.png";
import CarCalendar from "../assets/img/gower.mp4";
import SomosCorpora from "../assets/img/somoscorpora.mp4";
import Akuario from "../assets/img/akuario.mp4";
import Dosados from "../assets/img/dosados.mp4";
import ConstructoraColonial from "../assets/img/colonial.mp4";
import ReactPlayer from "react-player"; // Usando ReactPlayer para videos

const projects = [
  {
    name: "SomosCorpora",
    mediaType: "video",
    src: SomosCorpora,
    alt: "SomosCorpora Project Video",
    link: "https://somoscorpora.com/",
    description: "Migración del sitio web de SomosCorpora de PHP a un stack moderno utilizando React y Tailwind para el frontend y Python Flask para el backend. Se mejoró significativamente la experiencia del usuario mediante nuevas animaciones y estilos actualizados."
  },
  {
    name: "Akuario",
    mediaType: "video",
    src: Akuario,
    alt: "Akuario Project Video",
    description: "Desarrollo completo de un ecommerce innovador junto a otro desarrollador. El proyecto incluyó un diseño único y funcionalidades avanzadas, como la visualización de estadísticas de usuario y un scrapper para mostrar la variación de distintos tipos de moneda en tiempo real. Tecnologías utilizadas: React, Python Flask, MySQL."
  },
  {
    name: "Dosados",
    mediaType: "video",
    src: Dosados,
    alt: "Dosados Project Video",
    link: "https://dosados.com.ar/",
    description: "Realización de modificaciones y mantenimiento de la landing page de Dosados, una empresa de desarrollos inmobiliarios. Trabajé con una aplicación existente hecha en HTML, CSS y JavaScript, mejorando la interfaz de usuario y ofreciendo un servicio de mantenimiento continuo."
  },
  {
    name: "Matchmaker",
    mediaType: "image",
    src: MatchMaker,
    alt: "Matchmaker Project Image",
    description: "Aplicación de React Native para organizar reuniones o partidos de forma sencilla con amigos, con perfiles editables y la opción de crear torneos."
  },
  {
    name: "Gower",
    mediaType: "video",
    src: CarCalendar,
    alt: "Calendario Project Video",
    description: "Desarrollo de una plataforma web en React para la gestión de reservas de vehículos de alquiler. Incluye una interfaz de calendario intuitiva y un avanzado sistema de filtros, integrado con una API que utiliza una hoja de cálculo como base de datos."
  },
  {
    name: "Constructora Colonial",
    mediaType: "video",
    src: ConstructoraColonial,
    alt: "Constructora Colonial Project Video",
    description: "Desarrollo en conjunto con Corpora para la empresa Constructora Colonial, migrando su sistema de trabajo interno de PHP a un stack moderno con React, Material UI, Python Flask, y MySQL, mejorando la eficiencia operativa y la experiencia del usuario interno."
  },
];

const Proyects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="py-16 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-10 animate-fadeIn font-poppins">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {project.mediaType === "image" ? (
                <img
                  className="block w-full h-48 object-cover"
                  src={project.src}
                  alt={project.alt}
                />
              ) : (
                <video
                  className="block w-full h-48 object-cover"
                  src={project.src}
                  loop
                  autoPlay
                  muted
                  loading="lazy"
                />
              )}
              <div className="text-center p-4">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins text-lg font-semibold text-white underline"
                  >
                    {project.name}
                  </a>
                ) : (
                  <h3 className="font-poppins text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden max-w-2xl mx-auto transform transition-transform duration-300 ease-in-out scale-105">
              {/* Botón de cierre colocado aquí para que esté flotando sobre el fondo */}
              <button
                className="absolute top-4 right-4 text-white text-4xl cursor-pointer z-50 font-bold"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              {selectedProject.mediaType === "image" ? (
                <img
                  className="w-full h-auto"
                  src={selectedProject.src}
                  alt={selectedProject.alt}
                />
              ) : (
                <ReactPlayer
                  url={selectedProject.src}
                  controls
                  playing
                  width="100%"
                  height="100%"
                />
              )}
              <div className="p-4 text-center">
                {selectedProject.link ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins text-2xl font-semibold text-teal-400 mb-4 underline"
                  >
                    {selectedProject.name}
                  </a>
                ) : (
                  <h3 className="font-poppins text-2xl font-semibold text-white mb-4">
                    {selectedProject.name}
                  </h3>
                )}
                <p className="text-teal-400 mb-4">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Proyects;
