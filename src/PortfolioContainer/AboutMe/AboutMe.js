import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "An MSc student in Computer Science & IT and a client-focused systems full stack software developer, with over 3 years of experience in web and mobile application design and development. Adept at managing all stages of the software development life cycle, from requirements gathering and feasibility studies to deployment and maintenance. Recognized for developing bespoke communication applications that optimize business performance and generate revenue for companies.Proficient with object-oriented programming languages, as well as algorithms, data structures and machine learning. Enjoys collaborating with colleagues and building of cross-functional applications working to provide greater platform for success of projects.",
    highlights: {
      bullets: [
        "Full Stack Web and Mobile development",
        "Interactive Front End as per design",
        "Software Tool development",
        "Building REST API",
        "Graphic Designing",
        "WordPress Development",
      ],
      heading: "Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <b>
                  <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                </b>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a
                href="Dumisani_B_Kaunda_Resume.pdf"
                download="Dumie Brown Kaunda Dumisani_B_Kaunda_Resume.pdf"
              >
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
