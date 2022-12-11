import React from "react";
import ghlogo from "../images/ghlogo.png";
import lilogo from "../images/lilogo.png";
import sologo from "../images/sologo.png";

export default function Footer() {
  return (
    <nav
      className="main-footer-menu"
      style={{
        display: "flex",
        fontFamily: "arial black",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "#95A686",
        border: "5px black",
        padding: "5px",
        bottom: "0",
        position: "fixed",
        width: "100%",
      }}
    >
      <a
        style={{ margin: "10px" }}
        target="_blank"
        href="https://github.com/bburton5"
      >
        <img src={ghlogo} width="35px" />
      </a>
      <a
        style={{ margin: "10px" }}
        target="_blank"
        href="https://www.linkedin.com/in/brookeburton/"
      >
        <img src={lilogo} width="35px" />
      </a>
      <a
        style={{ margin: "10px" }}
        target="_blank"
        href="https://stackexchange.com/users/27185327/brooke-burton"
      >
        <img src={sologo} width="35px" />
      </a>
    </nav>
  );
}
