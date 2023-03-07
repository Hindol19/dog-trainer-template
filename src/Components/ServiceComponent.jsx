import React from "react";
import "./ServiceComponent.css";
function ServiceComponent({ image, title, description, anim, animDur }) {
  return (
    <div
      data-aos={anim}
      data-aos-duration={animDur}
      className="serviceComponent_container"
    >
      <div className="servImgContainer">
        <img className="servImg" src={image} alt="" />
      </div>
      <div className="serviceText">
        <h1 className="flexColCenter">{title}</h1>
        <div>{description}</div>
        <div className="rate">20$</div>
      </div>
    </div>
  );
}

export default ServiceComponent;
