import Nav from "react-bootstrap/Nav";

export default function NavigationTabs({ currentTab, handleTabChange }) {
  const styleOne = { border: "5px black" };

  return (
    <Nav
      variant="pills"
      style={{
        display: "inline-flex",
        fontFamily: "arial black",
        flexDirection: "row",
        background: "white",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      className="main-header-menu"
    >
      <Nav.Item className="hova" style={{ styleOne, margin: "10px" }}>
        <Nav.Link
          href="#AboutMe"
          onClick={() => handleTabChange("AboutMe")}
          className={currentTab === "AboutMe"}
        >
          About Me
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="hova" style={{ styleOne, margin: "10px" }}>
        <Nav.Link
          href="#Portfolio"
          onClick={() => handleTabChange("Portfolio")}
          className={currentTab === "Portfolio"}
        >
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="hova" style={{ styleOne, margin: "10px" }}>
        <Nav.Link
          href="#Contact"
          onClick={() => handleTabChange("Contact")}
          className={currentTab === "Contact"}
        >
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="hova" style={{ styleOne, margin: "10px" }}>
        <Nav.Link
          href="#Resume"
          onClick={() => handleTabChange("Resume")}
          className={currentTab === "Resume"}
        >
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
