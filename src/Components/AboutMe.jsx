import React from "react";
import "../Styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-5">
          <div className="media">
            <img
              id="profilePic"
              src="ProfilePicture.JPG"
              className="img-fluid"
              alt="profile picture"
            />
            <br />
            <img
              id="bootCampCert"
              src="bootcampCert.jpg"
              className="img-fluid"
              alt="Full Stack Web Development Bootcamp Certification"
            />
          </div>
        </div>
        <div className="media-body">
          <div className="col-12">
            <h5 className="mt-0">A Sneak Peek</h5>
            <p>
              It is hard to describe ones self when one's complexities are too
              common and too close to understand in full. I am in many ways a
              hobbyist: anxious and restless by nature. I have lived many lives
              as a horse trainer, writer, nursing assistant, college student
              with B.S. in Biology while majoring in Literature, teacher,
              gardener, video game enthusiast, full-stack web development
              student, and traveler. Each has its own chapter both sequestered
              and fluid.
              <br />
              <hr />
              <p>
                I am currently knee deep in my first professional MVP. Even
                though I have only recently finished my full-stack web
                development bootcamp, I have already started a new and
                challenging project for a friend, who is now my client. The
                drive to continue creating and push my current limits is
                exciting, and I'm ready to join the vast world of web
                developers.
              </p>
              <p>
                I am also currently a part-time Teaching Assistant Full Stack
                Web Development Online Bootcamp. It's an amazing and fun
                challenge to answer the unanticipated questions from my
                students. I am also finding myself honing some basic skills I
                had not always been using. Teaching this course is a great
                opportunity to truly master those building blocks of
                programming.
              </p>
              <hr />
              <h6>What do I know?</h6>
              <p className="boldList">
                Javascript | Node | Express | Postman | Handlebars | React |
                MongoDB | MySQL | HTML | CSS | Bootstrap CSS | Foundation CSS |
                JQuery | React-Toastify | Tailwind CSS
              </p>
              <hr />
            </p>
            <div className="contactInfo">
              <h6>Where to find me:</h6>
              <a href="mailto:emilybrockett@gmail.com">Email Address</a>
              <a href="https://github.com/BrockBatBlue">Github Profile Page</a>
              <a href="https://www.linkedin.com/in/emily-brockett/">Linkedin</a>
              <a href="https://docs.google.com/document/d/1W2uFwRYLShoYjq3-P1IFF5mqm1UdMpzhKLOAiZPrlas/edit?usp=sharing">
                Resume
              </a>
            </div>
            <div className="media-bottom">
              <img
                src="soft_skills_badge.png"
                className="mr-3 img-fluid"
                id="badge"
                alt="Leadership Badge"
              />
              <img
                src="self-taught.png"
                className="mr-3 img-fluid"
                id="badge"
                alt="Selt Taught Badge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
