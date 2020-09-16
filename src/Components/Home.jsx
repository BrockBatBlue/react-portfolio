import React from "react";
import "../Styles/Home.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="media">
              <img
                src="ProfilePicture.JPG"
                className="mr-3 img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div className="media-body"></div>
          <div className="col-8">
            <h5 className="mt-0">A Sneak Peek</h5>
            <p>
              It is hard to describe ones self when ones complexities are too
              common and too close to understand in full. I am in many ways a
              hobbyist: anxious and restless by nature. I have lived many lives
              as a horse trainer, writer, nursing assistant, college student
              with B.S. in Biology while majoring in Literature, teacher,
              gardener, video game enthusiast, full-stack web development
              student, and traveler. Each has its own chapter both sequestered
              and fluid.
            </p>
            <p>Where to find me</p>
            <p>
              <a href="brockbatblue@gmail.com">Email Address</a>
            </p>
            <p>
              <a href="https://github.com/BrockBatBlue">Github Profile Page</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/emily-brockett/">Linkedin</a>
            </p>
            <p>
              <a href="https://docs.google.com/document/d/1W2uFwRYLShoYjq3-P1IFF5mqm1UdMpzhKLOAiZPrlas/edit?usp=sharing">
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
