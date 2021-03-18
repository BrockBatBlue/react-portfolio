import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="pt-4 pb-3 mt-0 d-flex bg-dark background-image">
      <div className="backgroundImage">
        <img
          className="imageScene"
          src="RiverPic.JPG"
          alt="river background image"
        />
      </div>
      <div className="mainContainer container p-md-4">
        <div className="row d-flex  h-100 ">
          <div className="position-relative  w-100 h-25  d-flex">
            <div className="container-fluid align-self-start mt-2 mb-2">
              <div className="landingPageText row">
                <div className=" col-12 col-md-12">
                  <h4 className="welcome mt-1 text-white display-3">
                    Welcome to Emily Brockett's Web Development Portfolio
                  </h4>
                </div>
                <div className="col-9 d-none d-md-block text-right">
                  <div className="row align-items-center"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="moveBtn position-relative  w-100 h-50  d-flex">
            <div className="container-fluid align-self-center   pt-5 pt-md-1 mb-2">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                  {/* <h1 id="teachLanguages" className="  mb-0 pt-sm-4 text-white">
                    L
                  </h1> */}
                  <a
                    id="learnMore"
                    href={Link}
                    className="btn btn-outline-light btn-danger mt-5"
                  >
                    Find out more!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative  w-100  h-25 d-flex">
            <div className="container-fluid align-self-end  mt-5 mb-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
