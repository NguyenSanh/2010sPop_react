import React from 'react'
import './possibility.css'; // Import the possibility css file from the same folder

import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility image " />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early access to get started now with hit songs!</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination.
        </h1>
        <p>Pop songs that make you dance again.</p>
        <h4>Request early access to get started now with hit songs!</h4>
      </div>
    </div>
  )
}

export default Possibility
