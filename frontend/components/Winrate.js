import { useContext } from 'react';
import { SummonerContext } from './SummonerContext';

export default function Winrate(){
  const data = useContext(SummonerContext);
  console.log(data);
  return <div>
    <h2>Winrate:</h2>
  </div>
}