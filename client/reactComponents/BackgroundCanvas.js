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
    this.bubbles = [];
    for(var i = 0; i < 100; i++) {
      this.bubbles.push({
        id: i,
        radius: Math.random() * 7 + 3,
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        rate: Math.random() * 10 + 10
      });
    }
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
    d3.select('svg').selectAll('circle')
      .data(this.bubbles, d => d.id)
      .enter()
      .append('circle')
      .attr('r', d => d.radius)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);
    // animateBubbles = animateBubbles.bind(this);
    // setInterval(animateBubbles, 10);
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

// function animateBubbles() {
//   this.bubbles.forEach((bubble) => {

//   })
// }
