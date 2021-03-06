import express from 'express';
import cors from 'cors';
import { getSummonerID, getMatches, getParticipantID, getMatchOutcome } from './lib/retrieveMatchInfo';

const app = express();
app.use(cors());
const PORT = 3333;

app.get('/winrate', async (req, res, next) => {
  console.log('Fetching winrate...');
  await go(res, req.query.summonerName).catch(err => console.log(err));;
});

app.listen(PORT, () =>{
  console.log(`Running on port ${PORT}.`);
})

async function go(res, summonerName) {

  const name = summonerName;
  const totalGames = 10;
  let wins = 0;
  let counter = 0;
  let id = 'N/A';
  let winrate = -1;

  getSummonerID(name)
  .then( (summonerID) => {
    id = summonerID;
    return getMatches(id);
  })
  .then( (result) => {
    //Splicing the number of matches
    return result.reverse().splice(100-totalGames);
  })
  .then( (matches) => {
    matches.forEach( (match) => 
    getParticipantID(match, id)
    .then( pid => getMatchOutcome(match, pid))
    .then( outcome => {
      counter++;
      if (outcome) {
        wins++;
      }
    })
    .then( () => { 
      if (counter === totalGames) {
        winrate = (wins/totalGames)*100;
        show(name, totalGames, winrate, res);
      }
    })
    )

  })
  .catch(err => {
    console.log(`Summoner not found: ${err}`)
    show('Not found', '', '', res)
  });
  
 }

 async function show(name, totalGames, winrate, res) {
  
  let data = {
    summonerName: name,
    totalGames: totalGames,
    winrate: winrate
  };

  console.log('Information retrieved!');
  res.json({data});
   
 }
