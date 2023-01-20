import React from "react";
import "../assets/css/proyects.css";
import Carousel from "react-bootstrap/Carousel";
import MatchMaker from "../assets/img/MatchMaker.png";
import StoreVinos from "../assets/img/AlguienDijoVino.mp4";
import Tmdb from "../assets/img/Tmdb.png";

const Proyects = () => {
  return (
    <div className="containerProyects">
      <h2>Proyectos</h2>
      <Carousel fade variant="white" className="carrousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={MatchMaker}
            alt="First slide"
          />
          <Carousel.Caption className="placeholderCarrousel">
            <h3>Matchmaker</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <video
            className="d-block w-100"
            src={StoreVinos}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          <Carousel.Caption className="placeholderCarrousel">
            <h3>Alguien dijo vino?</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Tmdb}
            alt="Third slide"
          />
          <Carousel.Caption className="placeholderCarrousel">
            <h3>TMDb - The Movie Database API</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Proyects;
