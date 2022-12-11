import React from "react";
import PortfolioCard from "./ProjectCards";

export default function Portfolio() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "inline-flex",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PortfolioCard />
      </div>
    </React.Fragment>
  );
}
