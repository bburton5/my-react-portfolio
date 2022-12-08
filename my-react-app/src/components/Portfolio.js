import React from "react";
import PortfolioCard from "./PortofolioCards";

export default function Portfolio() {
  return (
    <React.Fragment>
      <div style={{ display: "inline-flex" }}>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </React.Fragment>
  );
}
