import React from "react";
import Typical from 'react-typical';
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
function Profile() {
    return (
        <div className='profile-container'>
            < div className='profile-parent'>
                <div className='profile-details'>
                  <div className='colz'>
                      <div className="colz-icon">
                     <a href="https://github.com/Fijula"><i className='fa fa-github-square'></i></a>
                      <a href="https://www.linkedin.com/in/fijula/"><i className='fa fa-linkedin-square'></i></a>
                    </div>
                    </div>
                    <div className="profile-detail-name">
                        <span className="primary-text">
                           
                            Hello, I'M <span className="highlighted-text">Fijula</span>
                        </span>
                    </div>
                    <div className="profile-details-roll">
                        <span className="primary-text">
                            {""}
                            <h1>
    
                                <Typical steps={
                                    ["SDET Engineer 🌐 ",1000,
                                    "Full Stack Mern Developer ✍️",1000,
                            "UI/UX Specialist 💻",1000,
                        ]
                                }/>

                            </h1>
                            <span className="portfolio-roll-tagline"> 
                            Experienced SDET with a background in Full Stack development...
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                    <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
                        <a href= "Fijula_Resume(SDET).pdf" download="Fijula__Resume(SDET).pdf">
                            <button className="btn highlighted-btn">My Resume</button>
                        </a>
                    </div>
            </div>

            <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
        </div>
        
    )}
    export default Profile;
