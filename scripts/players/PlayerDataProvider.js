const eventHub = document.querySelector('.container');

let players = [];

export const usePlayers = () => {
  return players.slice();
};

export const getPlayers = () => {
  return fetch('http://localhost:8088/players')
    .then((res) => res.json())
    .then((parsedPlayers) => {
      players = parsedPlayers;
    });
};

export const savePlayer = (playerObject) => {
  return fetch('http://localhost:8088/players', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playerObject),
  })
    .then(getPlayers)
    .then(dispatchStateChangedEvent);
};

const dispatchStateChangedEvent = () => {
  eventHub.dispatchEvent(new CustomEvent('playerStateChanged'));
};
