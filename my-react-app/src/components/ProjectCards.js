import React from "react";
import Card from "react-bootstrap/Card";
import projects from "../projects";

export default function PortfolioCard() {
  return projects.map((project) => {
    return (
      <Card
        key={project.uuid}
        style={{ width: "15 vw", height: "20vw", margin: "15px" }}
      >
        <Card.Img
          variant="top"
          src={`${project.uuid}`}
          width="100vw"
          height="100vw"
        />
        <Card.Body>
          <Card.Title>{`${project.title}`}</Card.Title>
          <Card.Text>
            <a target="_blank" href={`${project.repository}`}>
              Github Repo
            </a>
          </Card.Text>
          <Card.Text>
            <a target="_blank" href={`${project.app}`}>
              Deployed App
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });
}
