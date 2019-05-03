import InfoPanel from './InfoPanel.js';

const infoPanel = styled.div`
display: flex;
flex-direction: column;
`


var Movie = (props) => (
    <div className="Movie">
      <div className="movie-title" id={props.id} onClick={props.onMovieTitleClick}>{props.movie.title}</div>
      <div infopanel={props.infoPanel} className="info-panel">
        {!props.infoPanel && <InfoPanel movieInfo={props.movieInfo} infoPanel={props.movie.infoPanel} watched={props.watched} id={props.id} onWatchedClick={props.onWatchedClick}/>}
      </div>
    </div>
)




export default Movie;