import React from 'react';
import * as d3 from 'd3';

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

    document.addEventListener('click', e => {
      this.handleClick(e, 'click');
    });

    document.addEventListener('touchstart', e => {
      this.handleClick(e, 'touch');
    });

    this.animateBubbles = this.animateBubbles.bind(this);
    this.addNewBubbles = this.addNewBubbles.bind(this);
    setInterval(this.animateBubbles, 50);
    setInterval(this.addNewBubbles, 1000);
    setTimeout(this.burstRandom.bind(this), Math.random() * 4000 + 4000);
  }

  handleClick (e, clickOrTouch = 'click') {
    let xProp = 'x'
    let yProp = 'y'
    if(clickOrTouch === 'touch') {
      xProp = 'pageX'
      yProp = 'pageY'
    }
    let popped = false;
    this.bubbles.forEach((d) => {
      let radius = this.scaleRadius(d.radius);
      if(!popped && e[xProp] > d.x * this.width - radius && e[xProp] < d.x * this.width + radius 
        && e[yProp] > d.y * this.height - radius && e[yProp] < d.y * this.height + radius) {
        this.burstBubble(d);
        popped = true;
      }
    });
  }

  burstBubble (d) {
    this.bubbles = this.bubbles.filter(bubble => bubble.id !== d.id);
    this.createBurst(d);
    this.bubbles = [...this.bubbles, ...createTinyBubbles(d)];
  }

  burstRandom () {
    this.burstBubble.call(this,this.bubbles[Math.floor(Math.random() * this.bubbles.length)]);
    setTimeout(this.burstRandom.bind(this), Math.random() * 6000 + 4000);
  }

  scaleRadius (radiusValue) {
    return radiusValue * Math.pow(Math.max(this.width / 150, 1), 0.15);
    // return radiusValue;
  }

  animateBubbles() {
    this.bubbles = this.bubbles.filter(bubble => bubble.y > -0.05);

    let bubbles = 
      d3.select('svg').selectAll('circle')
        .data(this.bubbles, d => d.id);

    bubbles.enter()
      .append('circle')
      .attr('class', 'bubble')
      .attr('r', d => this.scaleRadius(d.radius))
      .attr('cx', d => d.x * this.width)
      .attr('cy', d => d.y * this.height)

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
    var length = this.scaleRadius(d.radius) + 1;
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
        <svg className='backgroundSvg' width={this.width} height={this.height} />
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

