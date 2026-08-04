import { useState } from 'react';
import GenreList from './components/GenreList';
import MovieList from './components/MovieList';
import './App.css';

const initialMovies = [
  {
    id: 1,
    title: 'The Dark Knight',
    genre: 'Action',
  },
  {
    id: 2,
    title: 'Mad Max: Fury Road',
    genre: 'Action',
  },
  {
    id: 3,
    title: 'The Princess Bride',
    genre: 'Comedy',
  },
  {
    id: 4,
    title: 'Groundhog Day',
    genre: 'Comedy',
  },
  {
    id: 5,
    title: 'Interstellar',
    genre: 'Science Fiction',
  },
  {
    id: 6,
    title: 'The Fifth Element',
    genre: 'Science Fiction',
  },
  {
    id: 7,
    title: 'The Lord of the Rings',
    genre: 'Fantasy',
  },
  {
    id: 8,
    title: 'Leaving Las Vegas',
    genre: 'Drama',
  },
];

function App() {
  const [currentGenre, setCurrentGenre] = useState('');
  const [movies] = useState(initialMovies);

  // Create a list of unique genres from the movie data.
  const genres = [...new Set(movies.map((movie) => movie.genre))];

  // Only include movies matching the selected genre.
  const filteredMovies = movies.filter(
    (movie) => movie.genre === currentGenre
  );

  return (
    <main className="app">
      <h1>Movie Genre Selector</h1>

      <GenreList
        genres={genres}
        currentGenre={currentGenre}
        setCurrentGenre={setCurrentGenre}
      />

      {!currentGenre && (
        <p className="instructions">Select a genre to view its movies.</p>
      )}

      {currentGenre && filteredMovies.length > 0 && (
        <MovieList
          movies={filteredMovies}
          currentGenre={currentGenre}
        />
      )}

      {currentGenre && filteredMovies.length === 0 && (
        <p className="error-message" role="alert">
          No movies were found for the selected genre.
        </p>
      )}
    </main>
  );
}

export default App;