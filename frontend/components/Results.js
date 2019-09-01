import axios from 'axios';
import React, { Component } from 'react';
import Percentage from './Percentage';

export default class Results extends Component {
  state = {
    summonerName: this.props.inputName,
    totalGames: 'Fetching information...',
    winrate: 'Fetching information...',
  }

  componentDidMount() {
    console.log('Component mounted...');
    axios.get('http://localhost:3333/winrate', { params: { summonerName: this.state.summonerName}})
    .then(res => {
      this.setState({
        summonerName: res.data.data.summonerName,
        totalGames: res.data.data.totalGames,
        winrate: res.data.data.summonerName === 'Not Found' ? 'N/A' : `${res.data.data.winrate}`
      });
    })
    .catch(err => console.log(err));
  };

  render(){return (
    <>
      <h2 className='results-summonerName'>{this.state.summonerName}</h2>

      <section className='results'>

        <Percentage winrate={this.state.winrate}/>        

      </section>

      <h5 className='results-games'>{this.state.totalGames}</h5>
    </>
  )};
}
