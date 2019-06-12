 import { getSummonerID, getMatches, getParticipantID, getMatchOutcome } from '../lib/retrieveMatchInfo';

//get participantID ✅
//get stats for participantId

 async function go() {
  const name = 'ńdo';
  const id = await getSummonerID(name);
  const matches = await getMatches(id);
  matches.splice(10);

  let index = -1;

  Promise.all(matches.map(match => {
    return getParticipantID(match, id).catch(err => console.log(err));
  })).then(results => { 
    console.log(results);
    return Promise.all(results.map(result => {
      index++;
      return getMatchOutcome(matches[index], result).catch(err => console.log(err));
    })).then(outcomes => { 
      console.log('Outcomes...');
      console.log(outcomes);
  }).catch(err => { console.log(err)});;
    
  }).catch(err => { console.log(err)});

 }

 go();
