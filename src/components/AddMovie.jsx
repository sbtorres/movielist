var AddMovie = (props) => (
  <div className="AddMovie">
    <input id="movieAdder" type="text" placeholder="Add Movie..."></input>
    <button type="submit" onClick={props.addMovie}>Add</button>
  </div>
)

export default AddMovie;