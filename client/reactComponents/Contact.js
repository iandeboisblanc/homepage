import React from 'react';
import Clipboard from 'clipboard';

const Contact = (props) => {
  new Clipboard('.btn');
  return (
    <div key='contact' className='contact'>
      <div>
        <h4> iandeboisblanc@gmail.com</h4>
        <button className='btn' data-clipboard-text='iandeboisblanc@gmail.com'> Copy </button>
      </div>
      <div> icons for...
        <a href='http://www.Github.com/iandeboisblanc' target='_blank'> Github </a>
        <a href='http://www.LinkedIn.com/in/iandeboisblanc' target='_blank'> LinkedIn </a>
      </div>
    </div>
  )
}

module.exports = Contact;
