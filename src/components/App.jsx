import MovieList from './MovieList.js';
import MoviesList from './MoviesList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';
import WatchFilter from './WatchFilter.js';
import MovieInformation from './MovieInformation.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [{title: 'Mean Girls', watched: false, infoPanel: false}, {title: 'The Lion King', watched: true, infoPanel: false}],
    }
  }

  //ADD MOVIE INPUT HANDLER
  addMovie(event) {
    event.preventDefault();
    var inputVal = document.getElementById("movieAdder").value;
    var currentList = this.state.movies;
    var newMovie = {title: inputVal};
    currentList.push(newMovie)
    this.setState({
      movies: currentList,
      watched: false,
      infoPanel: false
    });
  }

  //SEARCH BAR SUBMIT METHOD
  onSubmit(event) {
    event.preventDefault();
    var inputValue = document.getElementById("filter").value;
    var matches = [];
    this.state.movies.map((movie) => {
      if(movie.title.includes(inputValue)) {
        matches.push(movie);
      }
    })
    if(matches.length > 0) {
      this.setState({
        movies: matches,
      })
    } else {
      alert('Sorry, no movies by that name exist!');
    }
  }

  //WATCHED BUTTON CLICK HANDLER
  onWatchedClick(event) {
    event.preventDefault();
    let prevState = this.state; 
    prevState.movies.map((movie, index) => {
      var prevWatched = movie.watched;
      if(JSON.stringify(index) === event.target.id) {
        movie.watched = !prevWatched;
      }
    })
    this.setState(prevState);
  }

  //MOVIE TITLE CLICK HANDLER
  onMovieTitleClick(event) {
    event.preventDefault();
    var prevState = this.state;
    prevState.movies.map((movie, index) => {
      var prevInfoPanel = movie.infoPanel;
      if(JSON.stringify(index) === event.target.id) {
        movie.infoPanel = !prevInfoPanel;
      }
    })
    this.setState(prevState);
  }
  
  //WATCHED BUTTON TOGGLE
  filterWatched(event) {
    event.preventDefault();
    var prevState = this.state;
    var watchedMovies = [];
    prevState.movies.map((movie) => {
      if(movie.watched === true) {
        watchedMovies.push(movie);
      }
    })
    this.setState({
      movies: watchedMovies
    })
  }

  //NOT WATCHED BUTTON TOGGLE
  filterNotWatched(event) {
    event.preventDefault();
    var prevState = this.state;
    var notWatchedMovies = [];
    prevState.movies.map((movie) => {
      if(movie.watched === false) {
        notWatchedMovies.push(movie);
      }
    })
    this.setState({
      movies: notWatchedMovies
    })
  }


  render() {
    return(
      <div className="container">
        <AddMovie addMovie={this.addMovie.bind(this)} />
        <Search onSubmit={this.onSubmit.bind(this)}/>
        <WatchFilter filterNotWatched={this.filterNotWatched.bind(this)} filterWatched={this.filterWatched.bind(this)}/>
        <MovieList movieInfo={MovieInformation} onMovieTitleClick={this.onMovieTitleClick.bind(this)} onWatchedClick={this.onWatchedClick.bind(this)} movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;