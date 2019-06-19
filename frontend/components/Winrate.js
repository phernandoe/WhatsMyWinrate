import { useContext } from 'react';
import { SummonerContext } from './SummonerContext';

export default function Winrate(){
  const data = useContext(SummonerContext);
  console.log(data);
  return <div>
    <h2>Winrate:</h2>
    <ul>
      <li>Summoner Name: {data.summonerData.summonerName}</li>
      <li>Total Games: {data.summonerData.totalGames}</li>
      <li>Winrate: {data.summonerData.winrate}%</li>
    </ul>
    
  </div> 
}