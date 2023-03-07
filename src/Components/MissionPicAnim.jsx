import React from "react";
import "./MissionPicAnim.css";
function MissionPicAnim() {
  return (
    <div className="MissionPicAnim_container flexRowCenter">
      <div>
        <img
          className="mission_img1 mission_img"
          data-aos="fade-right"
          data-aos-duration="600"
          src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          className="mission_img2 mission_img"
          data-aos="fade-left"
          data-aos-duration="600"
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default MissionPicAnim;
