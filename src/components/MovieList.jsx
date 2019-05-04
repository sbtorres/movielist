import Movie from "./Movie.js";

class MovieList extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className="EachMovie MovieList">
          {this.props.movies.map((movie, index) => (
          (<Movie key={index} id={index} movie={movie} movieInfo={this.props.movieInfo[index]} watched={movie.watched} onMovieTitleClick={this.props.onMovieTitleClick} onWatchedClick={this.props.onWatchedClick} />)))}
      </div>
    )
  }
}

export default MovieList;

