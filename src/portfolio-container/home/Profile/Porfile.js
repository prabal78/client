import React from 'react'
// import './App.css';
import './Profile.css'
import Typical from 'react-typical'

export default function Porfile() {
  return (
    <div className='profile-container'>
      <div className="profile-parent">
        <div className="profile-detail">
            <div className="cloz">
              <div className="cloz-icon">
                <a href="#">
                    <i className="fa fa-facebook-square"></i>
                </a>
                <a href="#">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                    <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          <div className="profile-detail-name">
            <span className="primary-text">
                {""}
                Hello I'm <span className="highlighted-text">Prabal</span>
            </span>
         </div>
         <div className="profile-details-role">
            <span className="primary-text">
                {""}
                <h1>
                {/* Ethusiastic Dev */}
                    {/* {""}
                   <Typical
                   loop={Infinity}
                   steps={[
                    "Ethusiastic Dev",
                    1000,
                    "ReactJs Dev",
                    1000,
                    "JavaScript Dev",
                    1000,
                   ]}
                   /> */}
                </h1>
                <span className="profile-role-tagline">
                   knack of building a  application with front end  Operation
                </span>
            </span>
         </div>
         <div className="profile-options">
          <button className="btn primary-btn">
            {""}
            Hire Me{" "}
          </button>
          <a href='Resume.pdf' download="Resume.pdf"> <button className="btn highlighted-btn">Get Resume</button></a>
         </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  )
}
