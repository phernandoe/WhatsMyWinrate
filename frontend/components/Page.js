import axios from 'axios';
import React, {Component} from 'react';
import { SummonerProvider } from './SummonerContext';

class Page extends Component {
  state = {
    summonerData: [
      {
        summonerName: '',
        totalGames: 0,
        winrate: -1
      }
    ]
  }
  handleSubmit = this.handleSubmit.bind(this);
  
  handleSubmit() {
    console.log('Request received');
    async () => {
      await axios.get('http://localhost:3333/winrate')
      .then( response => {
        console.log('Handling request');
        this.setState({ summonerData: response.data.summonerData});
      })
      .catch(err => {console.log(err)});

    }
  };

  render() {
    return(
      <div>
        <ul>
          <li>{this.state.summonerData.summonerName}</li>
          <li>{this.state.summonerData.totalGames}</li>
          <li>{this.state.summonerData.winrate}</li>
        </ul>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
      
    )
  }

}

export default Page;

// export default function Page({children}){

//   const data = axios.get('http://localhost:3333/winrate');

//   return(
//   <SummonerProvider value={{
//     dogs: 'One',
//     cats: 'None',
//     data: data
//   }}>
//     <div className="landing">
//       {children}
//     </div>
//   </SummonerProvider>
//   );
// }