import React from 'react'
import './brand.css'; // Import the brand css file from the same folder
import { google, slack, atlassian, dropbox, shopify } from './imports'; // Import all necessary images at once from import.js which holds the individual png files

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="image of google" />
      </div>
      <div>
        <img src={slack} alt="image of slack" />
      </div>
      <div>
        <img src={atlassian} alt="image of atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="image of dropbox" />
      </div>
      <div>
        <img src={shopify} alt="image of shopify" />
      </div>
    </div>
  )
}

export default Brand
