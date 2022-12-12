import resume from "../utils/images/resume.pdf";
import React from "react";

export default function MyResume() {
  return (
    <React.Fragment>
      <a href={resume} download="bburtonresume">
        Click here to download my latest resume!
      </a>
      <div>
        <iframe
          style={{ height: "200vh", width: "100%" }}
          src={resume}
        ></iframe>
      </div>
    </React.Fragment>
  );
}
