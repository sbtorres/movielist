var Search = (props) => (
  <div className="SearchBar">
    <input type="text" id="filter" placeholder="Filter Movies..." ></input>
    <button type="submit" onClick={props.onSubmit}>Filter</button>
  </div>
)

export default Search;