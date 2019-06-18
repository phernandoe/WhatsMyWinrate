 import { getSummonerID, getMatches, getParticipantID, getMatchOutcome } from './lib/retrieveMatchInfo';

 async function go() {
  const name = 'ńdo';
  const totalGames = 10;
  let wins = 0;
  let counter = 0;
  let id = 'N/A';

  await getSummonerID(name)
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
        console.log(`${name}'s winrate over the past ${totalGames} games is: ${(wins/totalGames)*100}%`);
      }
    })
    )

  })
  .catch(err => console.log('Summoner not found'));
  
 }

 go();
