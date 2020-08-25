import React from "react";
import "../Styles/Portfolio.css";

function Portfolio() {
  return (
    <>
      <div>
        <h5 className="Port-Title">Portfolio</h5>
        <br />
        <div className="container">
          <div className="row">
            <div className="card-deck">
              <div className="card">
                <img
                  src="Images\musicManKaraokeMode.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Music Man</h5>
                  <p className="card-text">
                    As my first group project, we all assigned ourselves to our
                    strengths. I chose to manage, play with new css tools such
                    as Flex Box, and fix bugs that came along the way.
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">First Bootcamp Project</li>
                  <li className="list-group-item">
                    Working Lyrics and Music Videos
                  </li>
                  <li className="list-group-item">Karaoke Mode</li>
                </ul>
                <div className="card-body">
                  <a
                    href="https://brockbatblue.github.io/Project_One/"
                    className="card-link"
                  >
                    Music Man
                  </a>
                  <a
                    href="https://github.com/BrockBatBlue/Project_One"
                    className="card-link"
                  >
                    Github Page
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  src="Images\quizResultsPage.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Horticulure Quiz</h5>
                  <p className="card-text">
                    This was my first truly challenging homework assignment. I
                    was afraid I would not get it done in time, and I spent many
                    more hours than usual figuring out how to get it working. I
                    persevered, stayed up late, and drank too much coffee, and
                    created something I am absolutely proud to put on display
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Plant cuttings Quiz</li>
                  <li className="list-group-item">Timer that stops at zero</li>
                  <li className="list-group-item">locally saved high scores</li>
                </ul>
                <div className="card-body">
                  <a
                    href="https://brockbatblue.github.io/Horticulture-Quiz/"
                    className="card-link"
                  >
                    Horticulture Quiz
                  </a>
                  <a
                    href="https://github.com/BrockBatBlue/Horticulture-Quiz"
                    className="card-link"
                  >
                    Github Page
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  src="Images\weatherDashboard.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Weather Dashboard</h5>
                  <p className="card-text">
                    The Weather Dashboard assignment, though one of my
                    exceptionally difficult homework assignments, was the first
                    assignment where I really allowed myself to make the page my
                    own. I used Flex Box for the first time to create stylish
                    responsive page with its own unique flares.
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Weather by City</li>
                  <li className="list-group-item">Current Weather</li>
                  <li className="list-group-item">Forecast</li>
                </ul>
                <div className="card-body">
                  <a
                    href="https://brockbatblue.github.io/Weather_Dashboard/"
                    className="card-link"
                  >
                    Weather Dashboard
                  </a>
                  <a
                    href="https://github.com/BrockBatBlue/Weather_Dashboard"
                    className="card-link"
                  >
                    Github Page
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="card-deck">
              <div className="card">
                <img
                  src="Images\eat-da-burger.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Burger Eating App</h5>
                  <p className="card-text">
                    This application will allow the user to devour submitted
                    burgers they so desire, devour that burger, and then spit it
                    right back up to be devoured any time they'd like. It has
                    limited entertainment value, but a quick kick 😝
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Submit Burger</li>
                  <li className="list-group-item">Devour Burger</li>
                  <li className="list-group-item">Hosted on Heroku</li>
                </ul>
                <div className="card-body">
                  <a
                    href="https://burger-eat-burger-up.herokuapp.com/"
                    className="card-link"
                  >
                    HerokuApp
                  </a>
                  <a
                    href="https://github.com/BrockBatBlue/burger_eater_hw_wk_13"
                    className="card-link"
                  >
                    Github Page
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  src="Images/handshakeHome.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Handshake</h5>
                  <p className="card-text">
                    This is an application focused on local businesses that
                    might not have the ability to get their services noticed the
                    way big companies can. This app allows small service
                    businesses to add their information, get reviews, and
                    connect with their community. This also gives clients the
                    opportunity to find more affordable and local services right
                    in their neighborhood.
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">A Service Provider App</li>
                  <li className="list-group-item">
                    It is localized by zipcode
                  </li>
                  <li className="list-group-item">Clients can give reviews</li>
                </ul>
                <div className="card-body">
                  <a
                    href="https://handshake-service-app.herokuapp.com/"
                    className="card-link"
                  >
                    HerokuApp
                  </a>
                  <a
                    href="https://github.com/BrockBatBlue/Project_2"
                    className="card-link"
                  >
                    Github Page
                  </a>
                </div>
              </div>
              <div className="card">
                <img
                  src="Images/workdayScheduler.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Work Day Scheduler</h5>
                  <p className="card-text">
                    This app allows the user to keep track of their scheduling
                    needs and gives the user indicators when time has passed for
                    a certain deadline. Each task or appointment can be saved
                    for the user.
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Daily To Do and Scheduler</li>
                  <li className="list-group-item">
                    Locally Stored Information
                  </li>
                  <li className="list-group-item">Dynamic Color Indicators</li>
                </ul>
                <div className="card-body">
                  <a
                    href="https://brockbatblue.github.io/Work_Day_Scheduler/"
                    className="card-link"
                  >
                    Work Day Planner
                  </a>
                  <a
                    href="https://github.com/BrockBatBlue/Work_Day_Scheduler#work-day-scheduler"
                    className="card-link"
                  >
                    Github Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
