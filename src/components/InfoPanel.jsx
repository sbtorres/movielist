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

const Panel = styled.div`

`;


var InfoPanel = (props) => (
  <div>Information Panel
    <div>
      <Button watched={props.watched} id={props.id} onClick={props.onWatchedClick}>Watched</Button>
    </div>
  </div>

)

export default InfoPanel;

