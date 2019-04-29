import MovieList from './MovieList.js';
import MoviesList from './MoviesList.js';
import Search from './Search.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [MoviesList[0], MoviesList[1], MoviesList[2], MoviesList[3], MoviesList[4]]
    }
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
        <Search onSubmit={this.onSubmit.bind(this)}/>
        <div className="MovieList">
          <MovieList movies = {this.state.movies} />
        </div>
      </div>
    )
  }
}

export default App;