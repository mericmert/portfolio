import React from 'react';

export default function Resume() {
  return( 
  <div id='card' className='resume-container'>
      <div className='card'>
          <h2>Education:</h2>
          <ul>
              <li>Dereli Science School</li>
              <li>Sabanci University</li>
          </ul>
      </div>
      <div className='card'>
          <h2>Skills:</h2>
          <ul>
            <li>Python</li>
            <li>C++</li>
            <li>HTML5/CSS/JS</li>
            <li>React</li>
          </ul>
      </div>
      <div className='card'>
          <h2>Hobbies:</h2>
            <ul>
                <li>Table Tennis</li>
                <li>Drawing</li>
                <li>Basketball</li>
            </ul>
      </div>
  </div>
  );
}
