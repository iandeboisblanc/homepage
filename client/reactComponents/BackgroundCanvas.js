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
    this.bubbles = createRandomBubbles(100);
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
        //   this.bubbles = [...this.bubbles, ...createRandomBubbles((this.width - this.lastWidth) / 5, this.lastWidth, this.width)];
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
    setInterval(this.animateBubbles, 50);
  }

  animateBubbles() {
    this.bubbles.filter(bubble => bubble.y > -0.05);

    let bubbles = 
      d3.select('svg').selectAll('circle')
        .data(this.bubbles, d => d.id);


    bubbles.enter()
      .append('circle')
      .attr('class', 'bubble')
      .attr('r', d => d.radius)
      .attr('cx', d => d.x * this.width)
      .attr('cy', d => d.y * this.height)
      .on('click', (d) => {
        this.bubbles = this.bubbles.filter(bubble => bubble.id !== d.id);
        this.bubbles = [...this.bubbles, ...createTinyBubbles(d)]
      });

    bubbles.exit()
      .remove();

    bubbles
      .attr('cx', d => d.x * this.width)
      .attr('cy', d => {
        d.y -= d.rate;
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

function createRandomBubbles(n) {
  var bubbles = [];
  for(var i = 0; i < n; i++) {
    var radius = Math.random() * 7 + 3;
    var x = Math.random();
    var y = 1 + Math.random();
    var rate = (Math.random() * 15 + 8)  / 10000;
    bubbles.push(createBubble(radius, x, y, rate));
  }
  return bubbles;
}

function createTinyBubbles(d) {
  var bubbles = [];
  for(var i = 0; i < 3; i++) {
    var radius = Math.min(Math.random() * 1.3 + 1, d.radius);
    var x = (Math.random() - 0.5) / 80 + d.x;
    var y = (Math.random() - 0.5) / 80 + d.y;
    var rate = d.rate + Math.random() * 15 / 10000;
    bubbles.push(createBubble(radius, x, y, rate));
  }
  return bubbles;
}

function createBubble(radius, x, y, rate) {
  return {
    id: Math.floor(Math.random() * 1000000000),
    radius: radius || 5,
    x: x || Math.random(),
    y: y || Math.random(),
    rate: rate || 0
  }
}
