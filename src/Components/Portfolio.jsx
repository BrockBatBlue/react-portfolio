import React from "react";
import "../Styles/Portfolio.css";
import Card from "./Card";
import cards from "../portfolio.json";

function Portfolio() {
  return (
    <>
      <div>
        <h5 className="portTitle">Portfolio</h5>
        <div className="container portfolioContainer">
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                point1={card.point1}
                point2={card.point2}
                point3={card.point3}
                deployedUrl={card.deployedUrl}
                deployedTitle={card.deployedTitle}
                repoUrl={card.repoUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
