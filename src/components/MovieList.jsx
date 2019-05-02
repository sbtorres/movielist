import Movie from "./Movie.js";

var MovieList = (props) => (
  <div className="EachMovie">
      {props.movies.map((movie, index) => (
      (<Movie key={index} id={index} movie={movie} onClick = {props.onClick} />)))}
  </div>
)

export default MovieList;

