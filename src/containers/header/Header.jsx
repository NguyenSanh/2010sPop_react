import React from "react";
import "./header.css"; // Import the footer css file from the same folder

/* Import couple of images from the Assets folder */
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

/* Functional React component for our Website Header  */
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Early 2010's Pop Music</h1>
        <p>
          The early 2010s was an upbeat and flashy era for music. The electronic
          club sound was all over the place, and I think it is time we return to
          that era.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Here" />
          <button type="button">Start Listening</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="photo of people" />
          <p>Look how songs we can recommend to you!</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
