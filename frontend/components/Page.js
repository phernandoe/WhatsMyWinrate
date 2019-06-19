import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { SummonerProvider, SummonerContext } from './SummonerContext';

//Hook for getting the data!
function useWinrate() {
  const [winrate, setWinrate] = useState({

  });
  useEffect(function() {
      (async () => {
      console.log('Mounting or Updating');
      const res = await axios.get('http://localhost:3333/winrate').catch(err => console.log(err));;
      const sData = res.data.data;
      setWinrate(sData);
    })()
  }, []);
  return winrate;
}

export default function Page({children}){
  
  const summonerData = useWinrate()
  
  return(
    <SummonerProvider value={{summonerData}}>
      <div className="landing">
        {children}
      </div>
    </SummonerProvider>
  );
}
                  // class Page extends Component {
                  //   state = {
                  //     summonerData: [
                  //       {
                  //         summonerName: '',
                  //         totalGames: 0,
                  //         winrate: -1
                  //       }
                  //     ]
                  //   }
                  //   handleSubmit = this.handleSubmit.bind(this);
                    
                  //   handleSubmit(event) {
                  //     event.preventDefault();
                  //     console.log('Request received');
                  //     axios.get('http://localhost:3333/winrate')
                  //     .then( response => {
                  //       console.log('Handling request');
                  //       this.setState({ summonerData: response.data.summonerData});
                  //     })
                  //     .catch(err => {console.log(err)});
                  //   };
                  
                  //   render() {
                  //     return(
                  //       <div>
                  //         <ul>
                  //           <li>{this.state.summonerData.summonerName}</li>
                  //           <li>{this.state.summonerData.totalGames}</li>
                  //           <li>{this.state.summonerData.winrate}</li>
                  //         </ul>
                  //         <button onClick={this.handleSubmit}>Submit</button>
                  //       </div>
                        
                  //     )
                  //   }
                  
                  // }
                  
                  // export default Page;