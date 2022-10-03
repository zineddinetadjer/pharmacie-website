import React from "react";
import "../styles/arrivage.css";
import img1 from "../images/barbara-charles-d2zrtUBT8GQ-unsplash.jpg";
import img2 from "../images/edz-norton-A-eV95evtV8-unsplash.jpg";
import img3 from "../images/kailey-sniffin-UPjXnyeGXuA-unsplash.jpg";

const Arrivage = () => {
  return (
    <div className="arrivage">
      <h1>Arrivages</h1>
      <section>
        <div className="card">
          <img src={img1} />
          <div className="buy">
            <h6>RED LIPSTICK</h6>
            <h4>7500.00 DA</h4>
          </div>
        </div>
        <div className="card">
          <img src={img2} />
          <div className="buy">
            <h6>SERUM</h6>
            <h4>5000.00 DA</h4>
          </div>
        </div>
        <div className="card">
          <img src={img3} />
          <div className="buy">
            <h6>PARFUM</h6>
            <h4>9000.00 DA</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arrivage;
