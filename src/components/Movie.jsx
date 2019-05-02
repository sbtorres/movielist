var Movie = (props) => (
  <React.Fragment>
    <div className="Movie">
      <p>{props.movie.title}</p>
      <button id={props.id} className="WatchButton" type="button" onClick={props.onClick}>Watched</button>
    </div>
  </React.Fragment>
)

export default Movie;