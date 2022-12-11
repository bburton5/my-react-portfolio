import React from "react";
import PortfolioCard from "./PortofolioCards";

export default function Portfolio() {
  return (
    <React.Fragment>
      <div style={{ display: "inline-flex", width: "100vw" }}>
        <PortfolioCard />
      </div>
    </React.Fragment>
  );
}
