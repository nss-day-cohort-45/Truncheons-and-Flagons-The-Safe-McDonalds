const eventHub = document.querySelector('.container');

let teams = [];

export const useTeams = () => {
  return teams.slice();
};

export const getTeams = () => {
  return fetch('http://localhost:8088/teams')
    .then((res) => res.json())
    .then((parsedTeams) => {
      teams = parsedTeams;
    });
};

export const saveTeam = (teamObject) => {
  return fetch('http://localhost:8088/teams', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(teamObject),
  })
    .then(getTeams)
    .then(dispatchStateChangedEvent);
};

const dispatchStateChangedEvent = () => {
  eventHub.dispatchEvent(new CustomEvent('teamStateChanged'));
};
