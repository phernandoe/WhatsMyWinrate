import express from 'express';
import { initDB } from './lib/db';
import cors from 'cors';
import { getSummonerID, getMatches, getParticipantID, getMatchOutcome } from './lib/retrieveMatchInfo';


const app = express();
app.use(cors());
const PORT = 3333;

initDB().then(console.log('Initializing database...'));

app.get('/winrate', async (req, res, next) => {
  console.log('Fetching winrate...');
  await go(res);
});

app.listen(PORT, () =>{
  console.log(`Running on port ${PORT}.`);
})

async function go(res) {

  const name = 'ńdo';
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
    console.log('Summoner not found')
    show('Not found', '', '', res)
  });
  
 }

 async function show(name, totalGames, winrate, res) {
  
  let data = {
    summonerName: name,
    totalGames: totalGames,
    winrate: winrate
  };

  await initDB().then( db => {
    db.set('summonerData', data)
    .write().then( () =>
    console.log('Written to the database!'));
  })
  .catch(err => console.log(err));;

  res.json({data});
   
 }
