import axios from 'axios';
const ENV = require('dotenv');
ENV.config();

const key = process.env.RIOT_KEY;
const api = 'https://na1.api.riotgames.com';

async function getSummonerID(name) {
  const summonerApi = `${api}/lol/summoner/v4/summoners/by-name/${name}?api_key=${key}`;
  const res = await axios.get(encodeURI(summonerApi));
  return res.data.accountId;
}

async function getMatches(id) {
  const matchesApi = `${api}/lol/match/v4/matchlists/by-account/${id}?api_key=${key}`;
  const res = await axios.get(encodeURI(matchesApi));
  return res.data.matches;
}

async function getParticipantID(match, accountId) {
  const matchApi = `${api}/lol/match/v4/matches/${match.gameId}?api_key=${key}`;
  const res = await axios.get(encodeURI(matchApi));
  let id = 'N/A';
  res.data.participantIdentities.forEach(participant => {
    if (participant.player.accountId === accountId) {
      id = participant.participantId;
    }
  
  });
  return id; 
}

async function getMatchOutcome(match, id) {
  const matchApi = `${api}/lol/match/v4/matches/${match.gameId}?api_key=${key}`;
  const res = await axios.get(encodeURI(matchApi));
  let outcome = false;
  res.data.participants.forEach( stats => {
    if (stats.participantId === id) {
      outcome = stats.win;
    }
  });
  return outcome;
}


export { getSummonerID, getMatches, getParticipantID, getMatchOutcome };