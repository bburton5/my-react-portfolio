import React from "react";
import Card from "react-bootstrap/Card";

export default function PortfolioCard() {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "15px" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
          <Card.Text>Tech used and explanation of project</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
