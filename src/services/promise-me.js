/**
 * TODO:
 */
export async function getOnepiece() {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?q=one piece&sfw`
  );
  const data = await response.json();
  console.log('data', data);
  return data;
}

export function fetchOnePiece() {
  fetch(`https://api.jikan.moe/v4/anime?q=one piece&sfw`)
    .then((res) => res.json())
    .then((result) => {
      console.log('result', result);
    });
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

/**
 * TODO:
 */

/**
 * TODO:
 */
