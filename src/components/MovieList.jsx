import Movie from "./Movie.js";

// var MovieList = (props) => (
//   <div className="EachMovie">
//       {props.movies.map((movie, index) => (
//       (<Movie key={index} id={index} movie={movie} onClick = {props.onClick} />)))}
//   </div>
// )

class MovieList extends React.Component {
  constructor (props) {
    super (props);
    //this.state = {watched: false}
  }

  render () {
    return (
      <div className="EachMovie MovieList">
          {this.props.movies.map((movie, index) => (
          (<Movie key={index} id={index} movie={movie} watched={movie.watched} onMovieTitleClick={this.props.onMovieTitleClick} onWatchedClick={this.props.onWatchedClick} />)))}
      </div>
    )
  }

}

export default MovieList;

