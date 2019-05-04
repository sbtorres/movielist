import MovieList from './MovieList.js';
import MoviesList from './MoviesList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';
import WatchFilter from './WatchFilter.js';
import MovieInformation from './MovieInformation.js';
import api_key from './../../env/movieList.config.js';
import getMovieByName from './../data/searchMovies.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [] 
    }
  }

  getMovieInfo(query, callback) {
    getMovieByName(query, (movieData) => {
      callback(movieData);
    })
  }

  componentDidMount() {
      $.ajax({ 
        url: "http://localhost:3000/",
        method: "GET",
        success: (data) => {
          var newState = [];
          data = JSON.parse(data);
          data.map((movie) => (
            newState.push({
              title: movie.title, 
              watched: (movie.watched === 0 ? false : true), 
              infoPanel: (movie.watched === 0 ? false : true), 
              movieInfo: {
                releaseDate: movie.year,
                overview: movie.summary
              }
            })
          ))
          this.setState({movies: newState});
        }
      })
  };

  //ADD MOVIE INPUT HANDLER
  addMovie(event) {
    event.preventDefault();
    var prevState = this.state;
    var inputVal = document.getElementById("movieAdder").value;
    this.getMovieInfo(inputVal, (data) => {
      var newMovie = {title: data.results[0].title,
              watched: false,
              infoPanel: false,
              movieInfo: {
                releaseDate: data.results[0].release_date,
                overview: data.results[0].overview  
              }
      };
      prevState.movies.push(newMovie)
      this.setState(prevState);
      $.ajax({
        url: 'http://localhost:3000/',
        method: 'POST',
        dataType: 'application/json',
        data: {
          title: newMovie.title,
          summary: newMovie.movieInfo.overview,
          year: newMovie.movieInfo.releaseDate,
        },
        success: (data) => {
          console.log(data);
        }
      })
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
        <MovieList onMovieTitleClick={this.onMovieTitleClick.bind(this)} onWatchedClick={this.onWatchedClick.bind(this)} movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;