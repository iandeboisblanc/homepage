import React from 'react';

const Projects = (props) => {
  return (
    <div key='projects' className='projects'>
      <div className='project'>
        <h2> Evolution </h2>
        <p>
          Some text about Evolution
        </p>
        <p>
          Potentially a bit more
        </p>
        <p>
          <a href='/evolution' target='_blank'> Visit </a>
          <a href='https://github.com/iandeboisblanc/evolution' target='_blank'> GH (Icon) </a>
        </p>
      </div>
      <br/>
      <div className='project'>
        <h2> VR WikiMuseum </h2>
        <p>
          Some text about VR WikiMuseum
        </p>
        <p>
          Potentially a bit more
        </p>
        <p>
          <a href='http://www.vrwikimuseum.com' target='_blank'> Visit </a>
          <a href='https://github.com/iandeboisblanc/VRwikiMuseum' target='_blank'> GH (Icon) </a>
        </p>
      </div>
      <br/>
      <div className='project'>
        <h2> BubbleTanks 3D </h2>
        <p>
          Some text about BubbleTanks 3D
        </p>
        <p>
          Potentially a bit more
        </p>
        <p>
          <a href='http://www.bubbletanks.biz' target='_blank'> Play </a>
          <a href='https://github.com/ourvrisrealerthanyours/tanks' target='_blank'> GH (Icon) </a>
        </p>
      </div>
      <br/>
      <div className='project'>
        <h2> Thumbroll </h2>
        <p>
          Some text about Thumbroll
        </p>
        <p>
          Potentially a bit more
        </p>
        <p>
          <a href='http://www.thumbroll.xyz' target='_blank'> Link?? </a>
        </p>
      </div>
      <br/>
      <div className='project'>
        <h2> Web Gobbler </h2>
        <p>
          Some text about Gobbler
        </p>
        <p>
          Potentially a bit more
        </p>
        <p>
          <a href='http://www.gobblerweb.com' target='_blank'> Visit </a>
        </p>
      </div>
    </div>
  )
}

module.exports = Projects;

// could have project component that takes object with title, paragraphs, link, and image
