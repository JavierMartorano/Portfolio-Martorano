import React, { useEffect, useRef, useState } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Deja de observar después de la primera intersección
        }
      },
      { threshold: 0.1 } // El umbral puede ajustarse según cuándo quieras activar la animación
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="py-10 px-5 bg-custom-bg text-white">
      <div className="text-center mb-8">
        <h2
          className={`text-4xl font-bold transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Un poco de mí
        </h2>
      </div>
      <div
        className={`max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg transition-transform duration-[2000ms] ${
          isVisible ? "transform-none opacity-100" : "transform scale-95 opacity-0"
        } hover:-translate-y-1 hover:scale-105`}
      >
        <p className="text-lg leading-relaxed">
          ¡Hola! Soy Javier Martorano, un apasionado desarrollador web con tres años de experiencia en la creación y mantenimiento de aplicaciones web y móviles.
          <br />
          <br />
          Mi interés por la tecnología me llevó a estudiar de manera autodidacta y a profundizar mis conocimientos en JavaScript y React. Posteriormente, participé en el Coding Bootcamp de Plataforma 5, donde adquirí habilidades avanzadas en desarrollo Full Stack a través de más de 800 horas intensivas de programación.
          <br />
          <br />
          He trabajado en entornos colaborativos aplicando metodologías ágiles como Scrum y pair programming, lo que me ha permitido desarrollar soluciones innovadoras y mejorar continuamente mis habilidades, especialmente en el front-end.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
