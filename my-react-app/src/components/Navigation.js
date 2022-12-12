export default function NavigationTabs({ currentTab, handleTabChange }) {
  const styleOne = { border: "5px black" };

  return (
    <div
      style={{
        display: "inline-flex",
        fontFamily: "arial black",
        flexDirection: "row",
        background: "#95A686",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="main-header-menu"
    >
      <div className="hova" style={{ styleOne, margin: "10px" }}>
        <a
          href="#AboutMe"
          onClick={() => handleTabChange("About Me")}
          className={currentTab === "About Me"}
        >
          About Me
        </a>
      </div>
      <div className="hova" style={{ styleOne, margin: "10px" }}>
        <a
          href="#Portfolio"
          onClick={() => handleTabChange("Portfolio")}
          className={currentTab === "Portfolio"}
        >
          Portfolio
        </a>
      </div>
      <div className="hova" style={{ styleOne, margin: "10px" }}>
        <a
          href="#Contact"
          onClick={() => handleTabChange("Contact")}
          className={currentTab === "Contact"}
        >
          Contact
        </a>
      </div>
      <div className="hova" style={{ styleOne, margin: "10px" }}>
        <a
          href="#Resume"
          onClick={() => handleTabChange("Resume")}
          className={currentTab === "Resume"}
        >
          Resume
        </a>
      </div>
    </div>
  );
}
