import React from 'react';
import Project from './Project';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div key='projects' className='projects'>
        <Project title='Evolution' 
        url='/evolution' 
        github='https://github.com/iandeboisblanc/evolution'>
          <p>
            Watch the creation of life in a artistic life-simulator in which cellular automata randomly
            mutate and evolve over time in pursuit of optimization of a defined survival condition.
          </p>
          <p>
            Evolution is built on a custom physics engine rendered using d3. Evolution happens server-side,
            so check back frequently to see how things have changed!
          </p>
        </Project>
        <Project title='VR WikiMuseum' 
        url='http://vrwikimuseum.com/' 
        github='https://github.com/iandeboisblanc/VRwikiMuseum'>
          <p>
            Visit any Wikipedia page as 2D information or a 3D/VR museum room. Each room scales
            up to an appropriate size based on the amount of information. A selection of
            links from each page are rendered as doorways to enable seamless exploration.
          </p>
          <p>
            The VR WikiMuseum is a proof of concept for the possibilities of the VR web.
            It requires no specialized hardware or software to visit, and reveals that 
            the same information can be viewed in either 2D or 3D on the same site, simply
            by switching the state.
          </p>
          <p>
            The WikiMuseum is built with A-Frame VR and React, and leverages the MediaWiki API
            with a custom parser to map the information into 3D displays. 
            It runs on desktop, mobile, or your preferred VR HMD.
          </p>
        </Project>
        <Project title='BubbleTanks VR' 
        url='http://www.bubbletanks.biz'
        github='https://github.com/ourvrisrealerthanyours/tanks'>
          <p>
            Play with up to three other friends in this VR real-time multiplayer tanks game. 
            Designed to work on both desktop and phone—though mobile is recommended to take
            advantage of the VR experience.
          </p>
          <p>
            BubbleTanks is built with A-Frame VR and React on the front end, speaking to a
            Node/Express server using Socket.io.
          </p>
        </Project>
        <Project title='Thumbroll' 
        url='http://www.thumbroll.xyz'
        github='https://github.com/absurdSquid/thumbroll'>
          <p>
            Thumbroll is a teaching assisstant designed to provide real-time two directional 
            feedback between the lecturer and students via a user-friendly iPhone app. With the 
            press of a button, lecturers can send a variety of polls and feedback requests directly 
            to students. A separate desktop client provides class/lesson management and detailed 
            analytics of student performance over time.
          </p>
          <p>
            Thumbroll is built using React and d3 for the desktop client and React-Native for mobile.
            The Node/Express backend leverages Sockets.io to enable real-time communication and
            a PostgreSQL DB.
          </p>
        </Project>
        <Project title='Web Gobbler' 
        url='http://www.gobblerweb.com'
        github='https://github.com/UnfetteredCheddar/UnfetteredCheddar'>
          <p>
            Some text about Gobbler
          </p>
          <p>
            Potentially a bit more
          </p>
        </Project>
      </div>
    )
  }
}

module.exports = Projects;
