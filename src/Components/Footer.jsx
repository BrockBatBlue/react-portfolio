import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer py-3">
        <div className="container footerContain">
          <span className="text-muted footerText">
            Made by{" "}
            <img id="footerLogo" src="portfolioLogoOne_200x200.png" alt="" />{" "}
            with 💚
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
