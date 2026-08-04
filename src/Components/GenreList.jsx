function GenreList({
  genres,
  currentGenre,
  setCurrentGenre,
}) {
  return (
    <section>
      <h2>Genres</h2>

      <div className="genre-list">
        {genres.map((genre) => (
          <button
            key={genre}
            type="button"
            className={
              currentGenre === genre
                ? 'genre-button selected'
                : 'genre-button'
            }
            aria-pressed={currentGenre === genre}
            onClick={() => setCurrentGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </section>
  );
}

export default GenreList;