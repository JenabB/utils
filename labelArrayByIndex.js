listMovie.map((movie) => {
  return (
    <div className="trending-card">
      <img
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={`${movie.title} Poster`}
        style={{ height: "100px" }}
      />
      <p>{listMovie.indexOf(movie) + 1}</p>
      <div className="trending-info">
        <h1>{movie.title}</h1>
        <h2>{movie.release_date}</h2>
        <h3>popularity: {movie.popularity}</h3>
      </div>
    </div>
  );
});
