const eventHub = document.querySelector('.container');

let games = [];

export const useGames = () => {
  return games.slice();
};

export const getGames = () => {
  return fetch('http://localhost:8088/games')
    .then((res) => res.json())
    .then((parsedGames) => {
      games = parsedGames;
    });
};

export const saveGame = (gameObject) => {
  return fetch('http://localhost:8088/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gameObject),
  })
    .then(getGames)
    .then(dispatchStateChangedEvent);
};

const dispatchStateChangedEvent = () => {
  eventHub.dispatchEvent(new CustomEvent('gamesStateChanged'));
};
