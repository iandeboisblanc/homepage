import React from 'react';
import Clipboard from 'clipboard';
import ClipboardIcon from 'react-clipboard-icon';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    var clipboard = new Clipboard('.btn');
  }

  render() {
    return (
      <div key='contact' className='contact'>
        <div>
          <span className='email'> iandeboisblanc@gmail.com</span>
          <button className='btn' data-clipboard-text='iandeboisblanc@gmail.com'>
            <ClipboardIcon style={{fill:'rgb(70, 65, 65)'}} size={11} />
          </button>
        </div>
        <div> icons for...
          <a href='http://www.Github.com/iandeboisblanc' target='_blank'> Github </a>
          <a href='http://www.LinkedIn.com/in/iandeboisblanc' target='_blank'> LinkedIn </a>
        </div>
      </div>
    )
  }
}

module.exports = Contact;
