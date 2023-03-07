import React from "react";
import MissionPicAnim from "./MissionPicAnim";
import "./OurMission.css";
function OurMission() {
  return (
    <div className="ourMission_container">
      {/* <div className="transparentMix"></div> */}
      <MissionPicAnim />
      <div className="ourMission_text flexColCenter">
        <h1>OUR MISSION</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          sollicitudin velit id pharetra tincidunt. Maecenas vitae tellus
          placerat, aliquam ex et, pellentesque sapien. Curabitur volutpat orci
          ac malesuada elementum. Ut at lectus euismod, consequat purus
          ultricies, commodo mi. <br />
          <br />
          Aliquam magna arcu, dictum sed eleifend in, ultricies vel elit. Duis
          tincidunt, metus id finibus consectetur, nunc lectus pellentesque
          erat, in egestas ex arcu sit amet nunc. Morbi ut lacus id massa porta
          eleifend. In ac urna est. Nunc dui erat, faucibus at erat vitae,
          rhoncus euismod ipsum. <br />
          <br />
          Sed id consectetur eros. Morbi tincidunt sed libero sed ornare. Donec
          luctus libero vel arcu sagittis, sit amet viverra ipsum rhoncus. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          porttitor.
        </div>
      </div>
    </div>
  );
}

export default OurMission;
