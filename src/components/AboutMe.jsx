import React from "react";
import "../assets/css/aboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="sobreMi">
        <h2>Un poco de mí</h2>
      </div>
      <div className="info">
        <p>
          Hola un gusto! Mi nombre es Javier Martorano y tengo 21 años. Soy
          Desarrollador Web Full Stack especializado en JavaScript y React. 
          <br />
          Me inicié en el mundo del desarrollo web estudiando mediante cursos, los
          cuales me dieron la capacidad de aplicar al Coding Bootcamp de
          Plataforma 5, este fue un curso intensivo para convertirse en un
          Developer Full Stack con más de 800 hs intensivas de programación en
          las cuales aprendí la importancia del trabajo en equipo y las últimas
          tecnologías con mayor demanda laboral.
          <br />
          Luego de conseguir mi primer empleo en el mundo IT como Software Developer, la experiencia conseguida me sigue impulsando a perfeccionar mis habilidades especialmente en el lado Front-End.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
