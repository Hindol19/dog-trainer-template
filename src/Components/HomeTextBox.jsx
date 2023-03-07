import React from "react";
import "./HomeTextBox.css";
function HomeTextBox() {
  return (
    <div
      className="homeTextBox_container flexColCenter"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="home_text">
        Fun For Them ,<br /> Peace of mind for you
      </div>
      <div className="home_buttons">
        <button className="home_but1 home_but">Learn More</button>
        <button className="home_but2 home_but">Contact Us</button>
      </div>
    </div>
  );
}

export default HomeTextBox;
