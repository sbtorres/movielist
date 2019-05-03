var WatchFilter = (props) => (
  <div className="WatchFilterButtonsContainer">
    <button className="WatchFilterButtons" type="button" onClick={props.filterWatched}>Watched</button>
    <button className="WatchFilterButtons" type="button" onClick={props.filterWatched}>UnWatched</button>
  </div>


)

export default WatchFilter;