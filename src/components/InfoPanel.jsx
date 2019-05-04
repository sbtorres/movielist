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

class InfoPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.infoPanel === true) {
      return(
      <div className="info-text">Year: {this.props.movieInfo.Year}{'\n'}Run Time: {this.props.movieInfo.RunTime}
      <Button watched={this.props.watched} id={this.props.id} onClick={this.props.onWatchedClick}>Watched</Button>
    </div>)
    } else {
      return(<div></div>)
    }
  }
}

export default InfoPanel;

