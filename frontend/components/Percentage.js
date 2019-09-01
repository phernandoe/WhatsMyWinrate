import React, { Component } from 'react';

export default class Perecentage extends Component {

  state = {
    percentageStyle: `0 10`
  };

  componentDidUpdate(prevProps) {
    if (this.props.winrate !== prevProps.winrate) {
      this.updatePercentage(this.props.winrate);
    }
  }

  updatePercentage = (value) => {
    const total = this.path.getTotalLength();
    const filled = total * (parseFloat(value.replace('%', ''))/100);
    const none = total - filled;

    this.setState({percentageStyle: `${filled} ${none}`});

  };


  render(){return (
      <svg className="percentage-container" width="600px" height="350px" viewBox="0 0 600 350">
        <path 
        style={
          { strokeDasharray: this.state.percentageStyle }
        } 
        ref={(ref) => this.path = ref} 
        d="M 10 10 L 10 340 L 590 340 L 590 10 Z" 
        className="percentage" 
        fill="none" 
        stroke="#00FFC2" 
        strokeWidth="2" />

        <text className="results-field-title" x="300" y="225" textAnchor="middle" alignmentBaseline="middle">{this.props.winrate}</text>
      </svg>
  )};
}

