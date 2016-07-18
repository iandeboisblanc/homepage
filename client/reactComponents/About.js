import React from 'react';

const About = (props) => {
  return (
    <div key='about' className='about'>
      <p>
        I am a full-stack software engineer specializing in designing and building unique, interactive
        apps which are simulataneously engaging and intuitive. I enjoy staying up to date on current technologies,
        leading me to develop application for web, mobile, and virtual reality.
      </p>
      <p>
        I have worked extensively across the stack, from crafting fluid frontend interfaces,
        to wiring web sockets for real-time communication, to designing and implementing SQL and No-SQL database schemas,
        to deploying sites hosted within Docker containers.
      </p>
      <p>
        I am well-versed in numerous web technologies including React, React Native, Angular, Backbone, AframeVR,
        JQuery, HTML5, CSS3, ES6, Node, PostreSQL, MongoDB, Docker, and Git.
      </p>
      <br/>
      <p className='pageAbout'>
        This webpage is built using React and D3, with React-Router browserHistory providing single-page routing.
        A Dockerized Node/Express server serves static files and provides a RESTful endpoint for requesting 
        the current state of 
        <a className='evoLink' href='/evolution' target='_blank'> Evolution</a>.
      </p>
    </div>
  )
}

module.exports = About;







