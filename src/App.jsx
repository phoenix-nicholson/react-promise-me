import { useEffect } from 'react';
import { getOnepiece, fetchOnePiece } from './services/promise-me';

export default function App() {
  useEffect(() => {
    getOnepiece();
    fetchOnePiece();
  }, []);

  return <h1>Hello world</h1>;
}
