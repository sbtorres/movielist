import InfoPanel from './InfoPanel.js';



var Movie = (props) => (
    <div className="Movie">
      <div className="movie-title" onClick={props.onMovieTitleClick}>{props.movie.title}</div>
      <div className="info-panel">
        <InfoPanel watched={props.watched} id={props.id} onWatchedClick={props.onWatchedClick}/>
      </div>
    </div>
)




export default Movie;