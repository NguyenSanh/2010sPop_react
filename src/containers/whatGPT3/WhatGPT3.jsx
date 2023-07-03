import React from 'react'
import './whatGPT3.css'; // Import the whatGPT3 css file from the same folder
import { Feature } from '../../components';


const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title = "Early 2010s Pop Music" text="The early 2010s pop scene followed the influence of electronic upbeat sounds that started in the late decade of the 2000's and sponsored an era that would proceed to make the entire world energetic and happy. "/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          Relive the party era of music and revive the dancefloor.
        </h1>
        <p>
          Explore the upbeat collections of songs we have.
        </p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Flo Rida" text="Wild Ones ft. Sia, hey I heard you were a wild one. Oooohhhh, if I took you home, it would be a home run. Show me how you do."/>
        <Feature title="Taio Cruz" text="Hangover ft. Flo Rida"/>
        <Feature title="Usher" text="DJ Got Us Falling in Love"/>
      </div>
    </div>
  )
}

export default WhatGPT3
