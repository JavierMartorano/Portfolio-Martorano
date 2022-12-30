import React from "react";
import "../assets/css/header.css";
import imgPerfil from "../assets/img/profile.png";
// import Rosa from "react-on-scroll-animation";
// import downArrow from "../assets/img/downArrow.png";
// import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <div className="text-center background">
        <div className="presentacion">
          <h1 className="titulo">Javier Martorano</h1>
          <img src={imgPerfil} className="img-fluid imgPerfil" alt="..." />
          <p className="typewriter">| Desarrollador Front-End |</p>
          <p className="typewriter">| Desarrollador Web FullStack |</p>
        </div>
      </div>
      <div class="arrow"></div>
      {/* <a href="#aboutMe">
          {" "}
          <img className="downArrow" src={downArrow} width="11%" alt="" />
        </a> */}
    </>
  );
};

export default Header;
