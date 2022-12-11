import React from "react";
import Card from "react-bootstrap/Card";
import projects from "../projects";

export default function PortfolioCard() {
  return projects.map((project) => {
    return (
      <Card key={project.uuid} style={{ width: "15 vw", margin: "15px" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{`${project.title}`}</Card.Title>
          <Card.Text>{`${project.uuid}`}</Card.Text>
          <Card.Text>{`${project.description}`}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
}
