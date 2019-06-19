import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SummonerProvider, SummonerContext } from './SummonerContext';

//Hook for getting the data!
function useWinrate() {
  const [winrate, setWinrate] = useState({});
  useEffect(function() {
    (async () => {
      // const res = await axios.get('http://localhost:3333/winrate').catch(err => console.log(err));;
      // const sData = res.data.data;
      const sData = {
        summonerData: {
          summonerName: 'test',
          totalGames: 10,
          winrate: 40
        }
      };
      setWinrate(sData.summonerData);
    })();
  }, []);
  return winrate;
}

export default function Results({ children }) {
  const summonerData = useWinrate();

  return (
    <SummonerProvider value={{ summonerData }}>
      <div className='landing'>{children}</div>
    </SummonerProvider>
  );
}
