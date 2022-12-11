import React from "react";
import AboutMe from "./About";

export default function Header() {
  const styleOne = { border: "5px black" };

  return (
    <nav style={{ display: "flex" }} className="main-header-menu">
      <section
        style={{
          display: "inline-flex",
          fontFamily: "arial black",
          flexDirection: "row",
          background: "#95A686",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            styleOne,
            fontSize: "30px",
            margin: "10px",
          }}
        >
          Brooke Burton
        </div>
        <div
          style={{
            display: "inline-flex",
          }}
        >
          <div style={{ styleOne, margin: "10px" }}>
            <a href="#" onClick={AboutMe}>
              About Me
            </a>
          </div>
          <div style={{ styleOne, margin: "10px" }}>
            <a href="#">Portfolio</a>
          </div>
          <div style={{ styleOne, margin: "10px" }}>
            <a href="#">Contact</a>
          </div>
          <div style={{ styleOne, margin: "10px" }}>
            <a href="#">Resume</a>
          </div>
        </div>
      </section>
    </nav>
  );
}
