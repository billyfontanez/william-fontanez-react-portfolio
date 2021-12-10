import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.png";

console.log(profilePicture);

export default function() {
  return (
    <div className="about-page-wrapper">
      <div className="left-column">
        <img src="../../../static/assets/images/bio/headshot.png" alt="William Fontanez Headshot" />
      </div>

      <div className="right-column">
      Hello Everyone! My name is William Fontanez, and here is a little about me; I have a Bachelor of Science in Health Sciences, 
      Bachelor of Arts in Psychology, Certification of Competency in Full-stack Web Development, and many different types of training. 
      Over the past 17 years, I have worked in many industries. Some of these were in Healthcare, Nonprofit, Construction, Computer, Food, 
      Hospitality, and Communications. Also, for the past 13 years, I have been in the Army Reserves. For most of my career, I was an Engineer 
      but recently made a career change to Civil Affairs. During those years, I have been a training supervisor, helped with the logistics of 
      our equipment, a human resources supervisor, and am currently the unit's operations manager. Currently, I am a freelancer where most of 
      my work is in Software Engineering. However, I do business consulting, create logos and business cards.
      </div>
    </div>
  );
}