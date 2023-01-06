import React from 'react'
import './skill.css'
import skill from './img/WhatsApp Image 2022-12-21 at 11.32.56 PM.jpeg'
import skill2 from './img/WhatsApp Image 2022-12-21 at 11.33.25 PM.jpeg'
import skill3 from './img/WhatsApp Image 2022-12-21 at 11.33.53 PM.jpeg'
import skill4 from './img/WhatsApp Image 2022-12-21 at 11.34.16 PM.jpeg'




export default function Skills() {
  
  return (
    <>
    <div className="skill-main-container">
        <div className="heading">
          My Skill
         
        </div>
        <div className="skills">
            <div className="skill-deatails">
                <img src={skill} alt="hello" />
                
            </div>
            <div className="skill-deatails">
                <img src={skill2} alt="" />
            </div>
            <div className="skill-deatails">
                <img src={skill3} alt="" />
            </div>
            <div className="skill-deatails">
                <img src={skill4} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}
