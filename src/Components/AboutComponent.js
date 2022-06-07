import React from 'react'
import '../css/aboutcomponent.css';

function AboutComponent() {
  return (
    <div className='container about' id='about'>
        <div className='section-header'>
            <h3>About Me</h3>
        </div>
        <div className='mt-5'>
          <p className='about-text'>
          <span className='hey-text'>Hey,</span><br/>Years of professional Parkour to developing creative interactive websites.<br/>
          When im not flipping off walls, I enjoy learning to develop with React and making things look visually appealing.
          </p>
        </div>
    </div>
  )
}

export default AboutComponent