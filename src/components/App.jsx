import MovieList from './MovieList.js';
import MoviesList from './MoviesList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  addMovie(event) {
    event.preventDefault();
    var inputVal = document.getElementById("movieAdder").value;
    var currentList = this.state.movies;
    var newMovie = {title: inputVal};
    currentList.push(newMovie)
    this.setState({
      movies: currentList
    });
  }

  onSubmit(event) {
    event.preventDefault();
    var inputValue = document.getElementById("filter").value;
    var matches = [];
    this.state.movies.map((movie) => {
      if(movie.title.includes(inputValue)) {
        matches.push(movie);
      }
    })
    debugger;
    if(matches.length > 0) {
      this.setState({
        movies: matches
      })
    } else {
      alert('Sorry, no movies by that name exist!');
    }
  }

  render() {
    return(
      <div className="container">
        <AddMovie addMovie={this.addMovie.bind(this)} />
        <Search onSubmit={this.onSubmit.bind(this)}/>
        <div className="MovieList">
          <MovieList movies = {this.state.movies} />
        </div>
      </div>
    )
  }
}

export default App;