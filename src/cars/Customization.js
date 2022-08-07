import React from "react";
import Roll from "react-reveal/Roll";

function Customization({ video, h3, img1, h1, SportsCar, img2, img3, img4 }) {
  return (
    <div className="huracan">
      <video autoPlay loop muted controls>
        <source src={video} type="video/mp4" />
      </video>

      <img src={img1} alt="" />

      <Roll top cascade>
        <h1>{h1}</h1>
      </Roll>

      <p className="huracan__des">
        Discover all the new models of this exclusive car family, created to
        shape to your deepest emotions. Combining the highest expression of
        Lamborghini’s power with the exclusive refinement of Italian handicraft,
        this series embodies authentic design and state-of-the-art mechanical
        technology. The Lamborghini Huracán is the perfect fusion of technology
        and design. With its crisp, streamlined lines.
      </p>

      <img src={img2} alt="" />

      <Roll top cascade>
        <h1>AD PERSONAM STUDIO</h1>
      </Roll>

      <p className="huracan__des">
        Sculptured and sensual, the Huracán’s design is based on the spiky
        hexagonal forms of the carbon atom, while the seamless roof profile is
        an unmistakable mark of the Lamborghini DNA. The Huracán is unique even
        in the dark, thanks to the alluringly .
      </p>
      <img className="huracan__inner" src={img3} alt="" />

      <Roll top cascade>
        <h1>{SportsCar}</h1>
      </Roll>
      <img src={img4} alt="" />
    </div>
  );
}

export default Customization;
