// Code Smell, Refactoring, Naming Convention, Duplicate code, Comments, SOLID
import React from "react";
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
      "Experienced Full Stack Developer specializing in QA Automation with more than 2.5 years of expertise. Skilled in Cypress for both frontend and backend testing ,including end-to-end testing. Proven track record in performance and manual testing. Seeking opportunities to optimize software development and testing processe",
    highlights: {
      bullets: [
        "Open Source Contribution -Cypress",
        "Agile methodology",
        "SDLC",
        "Jira",
        "Git",
        "Bitbucket",
        "Atlassian Confluence",
        "Automation testing",
        "Frontend automation - Cypress",
        "API automation - Cypress, Playwright, Postman,Swagger ",
        "Performance testing - K6, JMeter",
        "Full Stack web development",
        "Interactive Front End as per the design",
        "Node js and MongoDb at the backEnd",
        "React, Html, Css, and Javascript As front End",
        "Redux for State Management",
        "Building REST API",
        "Managing database",
        "DevOps Knowledge: Jenkins, Docker",
      ],
      heading: "Here are a Few Highlights:",
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
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
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
              <a href="Fijula_Azhikoden_CV.pdf" download="Fijula_Azhikoden_CV.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}