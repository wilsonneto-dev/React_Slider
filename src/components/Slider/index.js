import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss'; 

export default class Slider extends Component {
  constructor(props){
    super(props);

    this.state = { position: 0 };

    this.handlePosition = this.handlePosition.bind(this);
    this.processStyle = this.processStyle.bind(this);
  }

  static defaultProps = {
    number: 3,
    itemWidth: 100,
    moveItems: 1
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string
  }

  processStyle(){
    const { position } = this.state;
    const pixels = position * 100;
    return {transform: `translate(${pixels}px)`}
  }

  handlePosition(moves) {
    const { position } = this.state;
    let newPosition = position + moves;
    if(newPosition > 0) newPosition = 0;

    this.setState({ position: newPosition });
  }

  render(){
    const { items } = this.props; 

    return (
      <>
          <div className="slider">
            <ul style={this.processStyle()}>
              { items.map(( item, i) => {
                return (
                  <li>
                    <div>
                      {i}
                    </div>
                  </li>
                );
              }) }
            </ul>
            <div className="controls">
              <button onClick={f => { this.handlePosition(-2) } }> &lt;&lt; </button>
              <button onClick={f => { this.handlePosition(2) } }> &gt;&gt; </button>
            </div>
          </div>
      </>
    );
  }
}
