function MovieList({ movies, currentGenre }) {
  return (
    <section className="movie-section">
      <h2>{currentGenre} Movies</h2>

      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-card">
            {movie.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MovieList;