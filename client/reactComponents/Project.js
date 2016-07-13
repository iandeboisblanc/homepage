import React from 'react';

const Project = (props) => {
  let url = props.url || '#';
  let github = props.github || '#'
  return (
    <div key={`project${props.title}`} className='projectContainer'>
      <div className='projectContent'>
        <h2> 
          <a className='projectTitle' href={url} target='_blank'> {props.title} </a> 
          <a className='iconLink' href={url} target='_blank'>
            <i className="fa fa-external-link" aria-hidden="true"></i>
          </a>
          <a className='iconLink' href={github} target='_blank'>
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </h2>
        <br/>
        {props.children}
 
      </div>
    </div>
  )
}

module.exports = Project;
