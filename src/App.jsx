import "./assets/css/App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

// import ContactMe from "./components/ContactMe";
// import Footer from "./components/Footer";
// import ContenedorProyectos from "./components/ContenedorProyectos";

function App() {
  return (
    <>
      <div id="home">
        <Navbar />
        <Header id="header" />
      </div>
      <div id="aboutMe">
        <AboutMe />
      </div>
              {/* <div id="proyects">
        <ContenedorProyectos />
      </div>
      <ContactMe />
      <Footer /> */}
    </>
  );
}

export default App;
