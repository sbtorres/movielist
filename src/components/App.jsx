import MovieList from './MovieList.js';
import MoviesList from './MoviesList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      watched: false
    }
  }

  addMovie(event) {
    event.preventDefault();
    var inputVal = document.getElementById("movieAdder").value;
    var currentList = this.state.movies;
    var newMovie = {title: inputVal};
    currentList.push(newMovie)
    this.setState({
      movies: currentList,
      watched: false
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
        movies: matches,
        watched: false
      })
    } else {
      alert('Sorry, no movies by that name exist!');
    }
  }

  onClick(event) {
    event.preventDefault();
    if (this.state.watched === false) {
      this.setState({
        watched: true
      })
      var element = document.getElementById(event.target.id);
      $(element).addClass('Watched');
    } else {
      this.setState({
        watched: false
      })
      var element = document.getElementById(event.target.id);
      $(element).removeClass('Watched');
    }
  }

  render() {
    return(
      <div className="container">
        <AddMovie addMovie={this.addMovie.bind(this)} />
        <Search onSubmit={this.onSubmit.bind(this)}/>
        <div className="MovieList">
          <MovieList movies = {this.state.movies} onClick = {this.onClick.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App;