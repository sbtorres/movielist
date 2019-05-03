import MovieList from './MovieList.js';
import MoviesList from './MoviesList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';
import WatchFilter from './WatchFilter.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [{title: 'Mean Girls', watched: false}, {title: 'The Lion King', watched: true}],
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
    debugger;
    if(matches.length > 0) {
      this.setState({
        movies: matches,
      })
    } else {
      alert('Sorry, no movies by that name exist!');
    }
  }

  //WATCHED BUTTON CLICK HANDLER
  onClick(event) {
    event.preventDefault();
    console.log('clicked', event.target.id);
    let prevState = this.state; 
    prevState.movies.map((movie, index) => {
      var prevWatched = movie.watched;
      if(JSON.stringify(index) === event.target.id) {
        movie.watched = !prevWatched;
      }
    })
    this.setState(prevState);
  }

  filterWatched(event) {
    event.preventDefault();
  }


  render() {
    return(
      <div className="container">
        <AddMovie addMovie={this.addMovie.bind(this)} />
        <Search onSubmit={this.onSubmit.bind(this)}/>
        <WatchFilter filterWatched={this.filterWatched.bind(this)}/>
        <div className="MovieList">
          <MovieList onClick={this.onClick.bind(this)} movies={this.state.movies}/>
        </div>
      </div>
    )
  }
}

export default App;