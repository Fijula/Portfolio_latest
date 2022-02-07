import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Achievements", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "GIT", ratingPercentage: 90 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo DB", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "BootStrap", ratingPercentage: 85 },
    { skill: "Material UI", ratingPercentage: 85 },
    { skill: "MYSQL", ratingPercentage: 85 },
    { skill: "Jenkins", ratingPercentage: 55 },
    { skill: "Docker", ratingPercentage: 55 },
    { skill: "Kubernetes", ratingPercentage: 55 },
    { skill: "AWS", ratingPercentage: 55 },
    { skill: "Postman", ratingPercentage: 85 },
    { skill: "Swagger", ratingPercentage: 75 },
    { skill: "Mocha and Chai", ratingPercentage: 55 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place: React, MongoDb, Nodejs,Redux,Express js ",
    },
    {
      title: "PHARMY E-commerce Product Website ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "An e-commerce application designed to sell products online:Mongo DB, Express Js, React Js, Node JS, Redux.",
    },
    {
      title: "MY LIBRARY : Library Management Website -CRUD ",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A Library Management  website including options to Create,Read,Update and Delete Records: Mongo DB, Express Js, React Js, Node JS",
    },
    {
      title: " MERNY - Blog Application ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        " A Blogging Application with MERN Stack Technology focusing on the roadmap to MERN Full stack:React, Mongo DB, Express Js, Node Js, Material UI",
    },
    {
      title: "Let's Chat ",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Real time chat app enabling members to chat: Socket io,Express Js, React Js, Node JS",
    },
  


  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
        <ResumeHeading
        heading={"Post Graduate in Education"}
        subHeading={"IITT- International Institute of Teachers Training"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"BE COMPUTER SCIENCE ENGINEERING"}
        subHeading={"Visveshwarya Technological University"}
        fromDate={"2007"}
        toDate={"2011"}
      />

      <ResumeHeading
        heading={"JUNIOR COLLEGE"}
        subHeading={"Peevees Public School, Kerala"}
        fromDate={"2005"}
        toDate={"2007"}
      />
      <ResumeHeading
        heading={"SCHOOLING "}
        subHeading={"International Indian School , Saudi Arabia"}
        fromDate={"1994"}
        toDate={"2005"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Full Stack Developer"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently doing Freelancing in MERN stack web development
          </span>
        </div>
        
          <br />
          <div className="experience-container">
          <ResumeHeading
          heading={"Teaching"}
          subHeading={"Computer Teacher"}
          fromDate={"2012"}
          toDate={"2020"}
        />
          <span className="resume-description-text">
            - Online Coding Educator at Bright Champs.
          </span>
          <br />
          <span className="resume-description-text">
           - Computer Science Teacher at RIS International School
          </span>
          <br />
          <span className="resume-description-text">
           - High School Teacher at  Oxford English School
          </span>
          <span className="resume-description-text">
           - Language Trainer For B.Ed Students
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Academics"
        description="University rank holder. IDPED rank holder. High School Gold Medalist. Distinction throughout schooling and College.   "
      />
      <ResumeHeading
        heading="Extra-curricular activities "
        description="School Compere ON and OFF dice.National Sports Comparer held in kerala.Bagged prizes on Essay writing,debates and speech.4 year Quiz champion in college."
      />
      <ResumeHeading
        heading="Sports"
        description=" Honour to present the school sports torch,Swimming Champion, Gold medal in athletics,throwball, batminton, table-tennis ,shortput,long-jump,chess and Participated in State Volleyball "
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
          {/* C:\Users\user\Desktop\Portfolio\client\src\assets\Resume */}
        <div 
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt=" 😟"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;