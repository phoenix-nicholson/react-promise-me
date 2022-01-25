/**
 * TODO:
 */
export async function getFilmPiece() {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?q=one piece&sfw`
  );
  const data = await response.json();
  console.log('film-data', data);
  return data;
}

export function fetchFilmPiece() {
  fetch(`https://api.jikan.moe/v4/anime?q=one piece&sfw`)
    .then((res) => res.json())
    .then((result) => {
      console.log('film-result', result);
    });
}

/**
 * TODO:
 */
export async function getPinBall() {
  const response = await fetch(`https://ponball.herokuapp.com/api/v1/machines`);
  const data = await response.json();
  console.log('pinball-data', data);
  return data;
}

export function fetchPinball() {
  fetch(`https://ponball.herokuapp.com/api/v1/machines`)
    .then((res) => res.json())
    .then((result) => console.log('pinball-result', result));
}

/**
 * return data;
 * TODO:
 */
export async function getSlayerFilms() {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?q=Kimetsu no yaiba&sfw`
  );
  const data = await response.json();
  console.log('slayer-data', data);
  return data;
}

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
