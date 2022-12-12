import React from "react";

export default function Header() {
  const styleOne = { border: "5px black" };

  return (
    <nav style={{ display: "flex" }} className="main-header-menu">
      <section
        style={{
          display: "flex",
          fontFamily: "arial black",
          flexDirection: "row",
          background: "#1877f2",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
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
      </section>
    </nav>
  );
}
