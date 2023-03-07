import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar2 from "./Components/Navbar2";
import Home from "./Components/Home";
import OurMission from "./Components/OurMission";
import OurServices from "./Components/OurServices";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Navbar2 />
      <Home />
      <OurMission />
      <OurServices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
