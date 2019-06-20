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
        winrate: res.data.data.winrate,
      });
    })
    .catch(err => console.log(err));
  };

  render(){return (
    <React.Fragment>
      <ul>
        <li>{this.state.summonerName}</li>
        <li>{this.state.totalGames}</li>
        <li>{this.state.winrate}</li>
        
      </ul>
    </React.Fragment>
  )};
}


//Hook for getting the data!
// function useWinrate() {
//   const [winrate, setWinrate] = useState({});
//   useEffect(function() {
//     (async () => {
//       // const res = await axios.get('http://localhost:3333/winrate').catch(err => console.log(err));;
//       // const sData = res.data.data;
//       const sData = {
//         summonerData: {
//           summonerName: 'test',
//           totalGames: 10,
//           winrate: 40
//         }
//       };
//       setWinrate(sData.summonerData);
//     })();
//   }, []);
//   return winrate;
// }

// export default function Results({ children }) {
//   const summonerData = useWinrate();

//   return (
//     <SummonerProvider value={{ summonerData }}>
//       <div className='landing'>{children}</div>
//     </SummonerProvider>
//   );
// }
