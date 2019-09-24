import React, { Component } from 'react';

import './index.scss'; 

export default class Slider extends Component {
  constructor(props){
    super(props);

    this.state = { position: 0 };

    this.handlePosition = this.handlePosition.bind(this);
  }

  handlePosition(moves) {
    this.setState({ position: this.state.position + moves });
  }

  render(){
    const { position } = this.state;
    const pixels = position * 100;

    return (
      <>
        <div className="slider">
          <ul style={{transform: `translate(${pixels}px)`}}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>

        <div className="controls">
          <button onClick={f => { this.handlePosition(-2) } }> prev </button>
          <button onClick={f => { this.handlePosition(2) } }> next </button>
          <br />
          Position: { position } / Pixels: { pixels }
        </div>

      </>
    );
  }

}