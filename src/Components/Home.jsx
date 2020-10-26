import React from "react";
import "../Styles/Home.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="media">
              <img
                id="profilePic"
                src="ProfilePicture.JPG"
                className="mr-3 img-fluid"
                alt="..."
              />
              <br />
              <img
                id="bootCampCert"
                src="bootcampCert.jpg"
                className="mr-3 img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div className="media-body">
            <div className="col-12">
              <h5 className="mt-0">A Sneak Peek</h5>
              <p>
                It is hard to describe ones self when ones complexities are too
                common and too close to understand in full. I am in many ways a
                hobbyist: anxious and restless by nature. I have lived many
                lives as a horse trainer, writer, nursing assistant, college
                student with B.S. in Biology while majoring in Literature,
                teacher, gardener, video game enthusiast, full-stack web
                development student, and traveler. Each has its own chapter both
                sequestered and fluid.
                <br />
                <hr />
                <p>
                  I am currently knee deep in web development. Even though I
                  have only recently finished my full-stack web development
                  bootcamp, I have already started a new and challenging project
                  for a friend, who is now my client. The drive to continue
                  creating and push my current limits is exciting, and I'm ready
                  to join the vast world of web developers.
                </p>
                <hr />
                <h6>What do I know?</h6>
                <p className="boldList">
                  Javascript | Node | Express | Postman | Handlebars | React |
                  MongoDB | MySQL | HTML | CSS | Bootstrap CSS | Foundation CSS
                  | JQuery | React-Toastify | Tailwind CSS
                </p>
                <hr />
              </p>
              <div className="contactInfo">
                <h6>Where to find me:</h6>
                <a href="mailto:emilybrockett@gmail.com">Email Address</a>
                <a href="https://github.com/BrockBatBlue">
                  Github Profile Page
                </a>
                <a href="https://www.linkedin.com/in/emily-brockett/">
                  Linkedin
                </a>
                <a href="https://docs.google.com/document/d/1W2uFwRYLShoYjq3-P1IFF5mqm1UdMpzhKLOAiZPrlas/edit?usp=sharing">
                  Resume
                </a>
              </div>
              <div className="media-bottom">
                <img
                  src="soft_skills_badge.png"
                  className="mr-3 img-fluid"
                  id="badge"
                  alt="..."
                />
                <img
                  src="self-taught.png"
                  className="mr-3 img-fluid"
                  id="badge"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
