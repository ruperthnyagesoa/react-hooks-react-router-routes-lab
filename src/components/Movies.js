import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDetails = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Runtime: {movie.time} min.</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));
  return <React.Fragment>
    <div>
      <h1>Movies Page</h1>
      {movieDetails}
    </div>
  </React.Fragment>
}

export default Movies;
