import { useEffect } from 'react';
import {
  getFilmPiece,
  fetchFilmPiece,
  getPinBall,
  fetchPinball,
  getSlayerFilms,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    getFilmPiece();
    fetchFilmPiece();
    getPinBall();
    fetchPinball();
    getSlayerFilms();
  }, []);

  return <h1>Hello world</h1>;
}
