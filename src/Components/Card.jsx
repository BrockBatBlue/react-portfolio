import React from "react";
import "../Styles/Card.css";

function Card(props) {
  return (
    <div className="card" key={props.id}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body mainBody">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">
          <small className="text-muted"></small>
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.point1}</li>
        <li className="list-group-item">{props.point2}</li>
        <li className="list-group-item">{props.point3}</li>
      </ul>
      <div className="card-body">
        <a href={props.deployedUrl} className="card-link">
          {props.deployedTitle}
        </a>
        <a href={props.repoUrl} className="card-link">
          Github Page
        </a>
      </div>
    </div>
  );
}

export default Card;
