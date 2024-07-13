import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Map from "./components/Map";

const App: React.FC = () => {
  const address =
    "Plot No. 51, Vaishno Park, Beltarodi, Nagpur, Maharashtra, 440034, India";
  const lat = 21.1458;
  const lng = 79.0882;

  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[90px]  md:grid-cols-3 mt-[90px] min-h-screen">
        <div className="flex flex-col justify-around">
          <section id="home" className="flex-grow flex flex-col justify-center">
            <Introduction />
          </section>
          <section
            id="about"
            className="flex-grow flex flex-col justify-center"
          >
            <About />
          </section>
          <section
            id="skills"
            className="flex-grow flex flex-col justify-center"
          >
            <Skills />
          </section>
          <section
            id="projects"
            className="flex-grow flex flex-col justify-center"
          >
            <Project />
          </section>
          <section
            id="contact"
            className="flex-grow flex flex-col justify-center"
          >
            <Contact />
          </section>
          <section id="map" className="flex-grow flex flex-col justify-center">
            <Map lat={lat} lng={lng} address={address} />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
