import React from "react";
import "./OurServices.css";
import ServiceComponent from "./ServiceComponent";
import serviceList from "./serviceList";
function OurServices() {
  return (
    <div className="ourServices_container">
      <h1 className="servicesHead">OUR SERVICES</h1>
      <div className="serviceComponents flexRowCenter">
        <ServiceComponent
          anim={serviceList[0].data_aos}
          animDur={serviceList[0].data_aos_duration}
          image={serviceList[0].image}
          title={serviceList[0].title}
          description={serviceList[0].description}
        />
        <ServiceComponent
          anim={serviceList[1].data_aos}
          animDur={serviceList[1].data_aos_duration}
          image={serviceList[1].image}
          title={serviceList[1].title}
          description={serviceList[1].description}
        />
        <ServiceComponent
          anim={serviceList[2].data_aos}
          animDur={serviceList[2].data_aos_duration}
          image={serviceList[2].image}
          title={serviceList[2].title}
          description={serviceList[2].description}
        />
      </div>
    </div>
  );
}

export default OurServices;
