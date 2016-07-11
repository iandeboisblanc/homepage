import React from 'react';

const Project = (props) => {
  return (
    <div key={`project${props.title}`} className='projectContainer'>
      <img className='projectImage' 
      src='http://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg' />
      <div className='projectContent'>
        <h2> {props.title} </h2>
        
        {props.children}
      </div>
    </div>
  )
}

module.exports = Project;
