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
    <>
      <h2 className='results-summonerName'>{this.state.summonerName}</h2>
      <section className='results'>

        <div className='results-container'>
          <h3 className='results-field-title'>Win rate</h3>
          <h1>{this.state.winrate}</h1>
        </div>

        <div className='results-container'>
          <h3 className='results-field-title'>Total Games</h3>
          <h1>{this.state.totalGames}</h1>
        </div>

        <div className='results-container'>
          <h3 className='results-field-title'>Empty field</h3>
          <h1>Placeholder</h1>
        </div>

        <div className='results-container'>
          <h3 className='results-field-title'>Empty field</h3>
          <h1>Placeholder</h1>
        </div>

        <div className='results-container'>
          <h3 className='results-field-title'>Empty field</h3>
          <h1>Placeholder</h1>
        </div>

        <div className='results-container'>
          <h3 className='results-field-title'>Empty field</h3>
          <h1>Placeholder</h1>
        </div>

      </section>
    </>
  )};
}
