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
          <a href='/evolution'> click here </a>
        </p>
      </div>
    </div>
  )
}

module.exports = Projects;
