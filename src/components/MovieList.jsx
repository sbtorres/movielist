import Movie from "./Movie.js";

var MovieList = (props) => (
  <div>
    {props.movies.map((movie) => (
      (<Movie movie={movie} />)))}
  </div>
)

export default MovieList;

