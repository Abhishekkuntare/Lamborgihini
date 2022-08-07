import React from "react";
import LightSpeed from "react-reveal/LightSpeed";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__titles">
        <p>COMPANY</p>
        <p>CAREERS</p>
        <p>CONTACT US</p>
        <p>MEDIA CENTER</p>
        <p>PRIVACY & LEGAL</p>
        <p>SITEMAP</p>
        <p>NEWSLETTER</p>
      </div>
      <div className="footer_des">
        <h5>
          Copyright © 2021 Automobili Lamborghini S.p.A. a sole shareholder
          company part of Audi Group. <br />
          <br />
          All rights reserved. VAT no. IT 00591801204
        </h5>

        <LightSpeed right>
          <img
            src="https://www.lamborghini.com/sites/it-en/files/themes/custom/lambo_facelift_2019/images/logo.png"
            alt=""
          />
        </LightSpeed>
        <a href="#" className="bottomToUp">
        <i class="far fa-caret-square-up"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
