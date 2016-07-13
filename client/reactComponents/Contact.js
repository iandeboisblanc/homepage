import React from 'react';
import Clipboard from 'clipboard';

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
        <div className='contactDetails'>
          <div>
            Feel free to reach out with any questions, comments, or new ideas!  
          </div>
          <br/>
          <div className='contactDetailsContent'>
            <span className='email'> 
              <a href="mailto:iandeboisblanc@gmail.com">
                <i className="fa fa-envelope iconLink firstIcon" aria-hidden="true"></i>
              </a>
              iandeboisblanc@gmail.com
            </span>
            <i className="fa fa-clipboard btn copy" aria-hidden="true" data-clipboard-text='iandeboisblanc@gmail.com'></i>
            <span className='clipboardFeedback'> {this.state.copied} </span>
            <div className='contactIcons'>
              <div>
                <a className='iconLink firstIcon' href='http://www.Github.com/iandeboisblanc' target='_blank'>
                  <i className="fa fa-github" aria-hidden="true"></i> Github
                </a>
              </div>
              <div>
                <a className='iconLink firstIcon' href='http://www.LinkedIn.com/in/iandeboisblanc' target='_blank'>
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Contact;
