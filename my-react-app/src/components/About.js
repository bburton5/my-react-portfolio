import React from "react";
import me from "../images/me.png";

export default function AboutMe() {
  return (
    <React.Fragment style={{ display: "flex" }}>
      <div style={{}}>
        <img src={`${me}`} height="250vw" width="200vw"></img>
      </div>
      <div>
        i am a recent graduate from the university of california, irvine. there
        i majored in biological sciences and minored in political sciences.
        after graduating, through my peers i discovered my interest in the field
        of software engineering. as a curious person, i began to teach myself
        the basics of coding and eventually enrolled in the university of
        washington fullstack coding bootcamp where i got to deep dive into the
        new and exciting world of software engineering. i became so passionate
        in the field of software engineering that i decided to put my career in
        biology behind me and pursue this new and exciting field instead! my
        projects i have completed so far and am working on plus my proven skill
        of being a quick learner as told by my degree from a prestigious
        university, i have no doubt that i will continue to prosper in this new
        field...explore the portfolio tab to see more!
      </div>
    </React.Fragment>
  );
}
