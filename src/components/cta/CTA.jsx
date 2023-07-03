import React from "react";
import "./cta.css"; // Import the cta css file from the same folder

const CTA = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p> Request early access! </p>
        <h3> Register Today & Start Exploring </h3>
      </div>
      <div className="gpt3__cta-button">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
