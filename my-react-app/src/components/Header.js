import React from "react";

export default function Header() {
  const styleOne = { border: "5px black", padding: "5px" };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: "flex",
          fontFamily: "arial black",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          background: "#95A686",
        }}
      >
        <div style={styleOne}>
          <a href="#">About Me</a>
        </div>
        <div style={styleOne}>
          <a href="#">Portfolio</a>
        </div>
        <div style={styleOne}>
          <a href="#">Contact</a>
        </div>
        <div style={styleOne}>
          <a href="#">Resume</a>
        </div>
      </section>
    </nav>
  );
}
