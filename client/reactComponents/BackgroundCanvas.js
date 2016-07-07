import React from 'react';
// import d3 from 'd3';
import * as d3 from 'd3';

// const server = 'http://159.203.221.124:80'; // production
// const server = 'http://192.168.1.13:8080'; // development

class BackgroundCanvas extends React.Component {

  constructor(props) {
    super(props);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  componentDidMount () {
    d3.select(window)
      .on('resize', () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        d3.select('svg')
          .attr('width', this.width)
          .attr('height', this.height);
      });
  }

  render () {
    return (
      <div className='backgroundCanvas'>
        <svg width={window.innerWidth} height={window.innerHeight} />
      </div>
    );
  }

}

module.exports = BackgroundCanvas;
