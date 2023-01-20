import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { FaArrowCircleUp } from "react-icons/fa";
import "./assets/css/App.css";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400 || document.body.scrollTop > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  window.addEventListener("touchmove", checkScrollTop);

  return (
    <>
      <div id="home">
        <Navbar />
        <Header id="header" />
      </div>
      <div id="aboutMe">
        <AboutMe />
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
    </>
  );
}

export default App;
