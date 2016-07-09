import React from 'react';
import Clipboard from 'clipboard';
import ClipboardIcon from 'react-clipboard-icon';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: undefined
    };

    var clipboard = new Clipboard('.btn');
    clipboard.on('success', (e) => {
      let element = document.querySelector('.clipboardFeedback');
      element.classList.add('active');
      e.clearSelection();
      this.setState({
        copied: 'Copied'
      });
    });
    clipboard.on('error', (e) => {
      let element = document.querySelector('.clipboardFeedback');
      element.classList.add('active');
      this.setState({
        copied: 'Failed'
      });
    });
  }

  componentDidMount() {
    let element = document.querySelector('.clipboardFeedback');
    element.addEventListener('transitionend', () => {
      element.classList.remove('active');
    });
  }

  render() {
    return (
      <div key='contact' className='contact'>
        <div>
          <span className='email'> iandeboisblanc@gmail.com</span>
          <button className='btn' data-clipboard-text='iandeboisblanc@gmail.com'>
            <ClipboardIcon style={{fill:'rgb(70, 65, 65)'}} size={11} />
          </button>
          <span className='clipboardFeedback'> {this.state.copied} </span>
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
