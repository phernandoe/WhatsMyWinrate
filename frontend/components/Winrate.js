import { useContext } from 'react';
import { SummonerContext } from './SummonerContext';

export default function Winrate(props){
  const data = useContext(SummonerContext);
  return <div>
    <h2>Results!</h2>
    <ul>
      <li>Summoner Name: {props.inputName}</li>
      <li>Total Games: {data.summonerData.totalGames}</li>
      <li>Winrate: {data.summonerData.winrate}%</li>
    </ul>
    
  </div> 
}