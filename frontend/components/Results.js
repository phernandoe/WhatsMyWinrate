import axios from 'axios';
import React, { Component } from 'react';

export default class Results extends Component {
  state = {
    summonerName: this.props.inputName,
    totalGames: 'Fetching information...',
    winrate: 'Fetching information...'
  }

  componentDidMount() {
    console.log('Component mounted...');
    axios.get('http://localhost:3333/winrate', { params: { summonerName: this.state.summonerName}})
    .then(res => {
      this.setState({
        summonerName: res.data.data.summonerName,
        totalGames: res.data.data.totalGames,
        winrate: res.data.data.summonerName === 'Not Found' ? 'N/A' : `${res.data.data.winrate}%`
      });
    })
    .catch(err => console.log(err));
  };

  render(){return (
    <section className='results'>
      <h2 className='results-summonerName'>{this.state.summonerName}</h2>
      <div className='results-winrate-container'>
        <h1 className='results-winrate'>{this.state.winrate}</h1>
        <p className='results-fineprint'>~ Winrate for the last 10 games ~</p>
      </div>
    </section>
  )};
}
