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
    this.bubbleCount = 100;
    this.bubbles = createRandomBubbles(this.bubbleCount);
    let transitionTime = 15;
    this.burstTransition = d3.transition().duration(transitionTime / 2).ease(d3.easeLinear);
    this.delayedBurstTransition = d3.transition().duration(transitionTime).ease(d3.easeLinear).delay(transitionTime * 0.75);
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

    window.addEventListener('click', e => {
      let popped = false;
      this.bubbles.forEach((d) => {
        if(!popped && e.x > d.x * this.width - d.radius && e.x < d.x * this.width + d.radius 
          && e.y > d.y * this.height - d.radius && e.y < d.y * this.height + d.radius) {
          this.bubbles = this.bubbles.filter(bubble => bubble.id !== d.id);
          this.createBurst(d);
          this.bubbles = [...this.bubbles, ...createTinyBubbles(d)]
          popped = true;
        }
      });
    });
    
    this.animateBubbles = this.animateBubbles.bind(this);
    this.addNewBubbles = this.addNewBubbles.bind(this);
    setInterval(this.animateBubbles, 50);
    setInterval(this.addNewBubbles, 1000);
  }

  animateBubbles() {
    this.bubbles = this.bubbles.filter(bubble => bubble.y > -0.05);

    let bubbles = 
      d3.select('svg').selectAll('circle')
        .data(this.bubbles, d => d.id);


    bubbles.enter()
      .append('circle')
      .attr('class', 'bubble')
      .attr('r', d => d.radius)
      .attr('cx', d => d.x * this.width)
      .attr('cy', d => d.y * this.height)
      // .on('click', (d) => {
      //   this.bubbles = this.bubbles.filter(bubble => bubble.id !== d.id);
      //   this.createBurst(d);
      //   this.bubbles = [...this.bubbles, ...createTinyBubbles(d)]
      // });

    bubbles.exit()
      .remove();

    bubbles
      .attr('cx', d => d.x * this.width)
      .attr('cy', d => {
        d.y -= d.rate;
        return d.y * this.height;
      });
  }

  addNewBubbles() {
    this.bubbles = [...this.bubbles, ...createRandomBubbles(this.bubbleCount - this.bubbles.length)];
  }

  createBurst(d) {
    var lines = [];
    var length = d.radius + 1;
    for(var i = 0; i < 6; i++) {
      lines.push({
        x1: d.x * this.width,
        x2: d.x * this.width + length * Math.cos(i * Math.PI / 3),
        y1: d.y * this.height,
        y2: d.y * this.height + length * Math.sin(i * Math.PI / 3),
      })
    }
    d3.select('svg').selectAll('.explosions' + d.id)
      .data(lines)
      .enter()
      .append('line')
      .attr('class', 'explosions' + d.id)
      .attr('x1', d => d.x1)
      .attr('y1', d => d.y1)
      // .attr('x2', d => d.x1)
      // .attr('y2', d => d.y1)
      // .transition(this.burstTransition)
      .attr('x2', d => d.x2)
      .attr('y2', d => d.y2)
      .transition(this.delayedBurstTransition)
      .attr('x1', d => d.x2)
      .attr('y1', d => d.y2);
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
