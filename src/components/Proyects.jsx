import React from "react";
import "../assets/css/proyects.css";
import Carousel from "react-bootstrap/Carousel";

const Proyects = () => {
  return (
    <div className="containerProyects">
      <h2>Proyectos</h2>
      <Carousel fade variant="dark" className="carrousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://reboot.studio/blog/content/images/2021/02/react-folder-structure.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Matchmaker</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://reboot.studio/blog/content/images/2021/02/react-folder-structure.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Alguien dijo vino?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://reboot.studio/blog/content/images/2021/02/react-folder-structure.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>TMDb - The Movie Database API</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Proyects;
