import React from 'react';
// import d3 from 'd3';
import * as d3 from 'd3';

// const server = 'http://159.203.221.124:80'; // production
// const server = 'http://192.168.1.13:8080'; // development

class BackgroundCanvas extends React.Component {

  constructor(props) {
    super(props);
    this.width = window.innerWidth;
    this.lastWidth = this.width;
    this.height = window.innerHeight;
    this.bubbles = createBubbles(this.width / 5);
  }

  componentDidMount () {
    d3.select(window)
      .on('resize', () => {
        this.lastWidth = this.width;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        d3.select('svg')
          .attr('width', this.width)
          .attr('height', this.height);
        // if(this.width > this.lastWidth) {
        //   this.bubbles = [...this.bubbles, ...createBubbles((this.width - this.lastWidth) / 5, this.lastWidth, this.width)];
        //   d3.selectAll('circle')
        //     .data(this.bubbles, d => d.id)
        //     .enter()
        //     .append('circle')
        //     .attr('r', d => d.radius)
        //     .attr('cx', d => d.x * this.width)
        //     .attr('cy', d => d.y * this.height);
        // }
      });
    
    this.animateBubbles = this.animateBubbles.bind(this);
    setInterval(this.animateBubbles, 10);
  }

  animateBubbles() {
    d3.select('svg').selectAll('circle')
      .data(this.bubbles, d => d.id)
      .enter()
      .append('circle')
      .attr('class', 'bubble')
      .attr('r', d => d.radius)
      .attr('cx', d => d.x * this.width)
      .attr('cy', d => d.y * this.height);

    d3.selectAll('circle')
      .data(this.bubbles, d => d.id)
      .attr('cx', d => d.x * this.width)
      .attr('cy', d => {
        if(d.y < 0.01) {
          d.y = 1.01;
        } else {
          d.y -= d.rate;
        }
        return d.y * this.height;
      });
  }

  render () {
    return (
      <div className='backgroundCanvas'>
        <svg width={this.width} height={this.height} />
      </div>
    );
  }

}

module.exports = BackgroundCanvas;

function createBubbles(n, xMin, xMax) {
  var bubbles = [];
  xMax = xMax / xMax || 1;
  xMin = xMin / xMax || 0;
  for(var i = 0; i < n; i++) {
    bubbles.push({
      id: Math.random() * 1000000000,
      radius: Math.random() * 7 + 3,
      x: Math.random() * (xMax - xMin) + xMin,
      y: 1 + Math.random(),
      rate: (Math.random() * 15 + 8)  / 50000
    });
  }
  return bubbles;
}
