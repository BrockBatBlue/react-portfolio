import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

function Footer() {
  return (
    <section className="">
      <footer className="pt-5 pb-5 footer text-white">
        <div className="container">
          <div className="row align-items-top text-center text-md-left">
            <div className="col-12 col-sm-6 col-md-4">
              <h3 className="orangeHeader">
                <strong>United States</strong>
              </h3>
              <p>
                Morris, Illinois
                <br />
                Resident
                <br />
                Citizen
              </p>
              {/* <p>+44 800 400 0000</p>
              <p>
                <a href={Link}>infob@bootstraptor.com</a>
              </p> */}
            </div>
            <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0">
              <h3 className="orangeHeader">
                <strong>Mexico</strong>
              </h3>
              <p>
                Mexico City, Mexico
                <br />
                Resident
              </p>
              {/* <p>+13 800 312 0000</p>
              <p>
                <a href={Link}>infob@bootstraptor.com</a>
              </p> */}
            </div>
            <div className="col-12 col-md-4 mt-5 mt-md-0 text-md-left">
              <h3 className="orangeHeader">
                <strong>Find Out More About Me</strong>
              </h3>
              <p>I am your friendly neighborhood Full Stack Web Developer.</p>
              <br />
              <div className="footerInfo">
                <a href="mailto:emilybrockett@gmail.com">Email</a>
                <a href="https://github.com/BrockBatBlue">Github</a>
                <a href="https://www.linkedin.com/in/emily-brockett/">
                  Linkedin
                </a>
                <a href="https://docs.google.com/document/d/1W2uFwRYLShoYjq3-P1IFF5mqm1UdMpzhKLOAiZPrlas/edit?usp=sharing">
                  Resume
                </a>
              </div>
              {/* <p className="text-h3">
                <a href={Link}>
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
                &nbsp;&nbsp;
                <a href={Link}>
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
                &nbsp;&nbsp;
                <a href={Link}>
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
                &nbsp;&nbsp;
                <a href={Link}>
                  <i className="fab fa-pinterest" aria-hidden="true"></i>
                </a>
                &nbsp;&nbsp;
                <a href={Link}>
                  <i className="fab fa-google" aria-hidden="true"></i>
                </a>
              </p> */}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">Made by Emily with 💕</div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
{
  /* <footer classNameName="footer py-3">
        <div classNameName="container footerContain">
          <span classNameName="text-muted footerText">
            Made by{" "}
            <img id="footerLogo" src="portfolioLogoOne_200x200.png" alt="" />{" "}
            with 💚
          </span>
        </div>
      </footer> */
}
