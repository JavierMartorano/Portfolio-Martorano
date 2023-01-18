import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import ContactMe from "./components/ContactMe";

// import ContactMe from "./components/ContactMe";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="home">
        <Navbar/>
        <Header id="header" />
      </div>
      <div id="aboutMe">
        <AboutMe/>
      </div>
      <div id="proyects">
        <Proyects/>
      </div>
      <div id="contactMe">
        <ContactMe/>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
