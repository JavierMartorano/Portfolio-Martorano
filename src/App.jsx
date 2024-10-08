import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies"; // Importa el nuevo componente
import Proyects from "./components/Proyects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { FaArrowCircleUp } from "react-icons/fa";
import "./assets/css/App.css";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (
      (!showScroll && window.scrollY > 400) ||
      document.body.scrollTop > 400
    ) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", checkScrollTop);
  window.addEventListener("touchmove", checkScrollTop);

  return (
    <div className="containerApp">
      <div id="home">
        <Navbar />
        <Header id="header" />
      </div>
      <div id="aboutMe">
        <AboutMe />
      </div>
      <div id="technologies">
        <Technologies /> {/* Añade la nueva sección aquí */}
      </div>
      <div id="proyects">
        <Proyects />
      </div>
      <div id="contactMe">
        <ContactMe />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <FaArrowCircleUp
        className="scrollTop"
        onClick={scrollTop}
        size="2.5em"
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      />
    </div>
  );
}

export default App;
