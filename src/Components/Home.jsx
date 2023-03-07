import React from "react";
import CaraouselComp from "./CaraouselComp";
import HomeTextBox from "./HomeTextBox";
import "./Home.css";
function Home() {
  return (
    <div id="Home" className="home_container">
      <CaraouselComp />
      <HomeTextBox />
    </div>
  );
}

export default Home;
