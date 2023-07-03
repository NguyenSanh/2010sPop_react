import React from "react";
import "./features.css"; // Import the features css file from the same folder
import { Feature } from "../../components";

/* Create an array for our Feature components in this section */
const featuresData = [
  {
    title: "Taio Cruz - Dyamite",
    text: "I throw my hands up in the air sometimes!",
  },
  {
    title: "Cobra Starships - You Make Me Feel So",
    text: "Put your hands up, put your hands up",
  },
  {
    title: "Pitbull ft. Neyo - Give Me Everything",
    text: "For all we know, we might not get tomorrow",
  },
  {
    title: "Calvin Harris ft. Neyo - Let's Go",
    text: "There's no excuses now, I'm talking here and now",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The party era is back and only with your support can we fully revive
          the era of upbeat and dancefloor songs.
        </h1>
        <p>Let's throw our hands in the air like we once did before.</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
