const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.watched ? "green" : "white"};
color: ${props => props.watched ? "white" : "green"};

font-size: 12px;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid green;
border-radius: 3px;
`;

var Movie = (props) => (
  <React.Fragment>
    <div className="Movie">
      <p>{props.movie.title}</p>
      <Button watched={props.watched} id={props.id} onClick={props.onClick}>Watched</Button>
    </div>
  </React.Fragment>
)




export default Movie;