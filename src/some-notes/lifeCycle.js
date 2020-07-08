//* Life cycle

class Appp extends Component{
    constructor(props) {
        super(props);
        this.state = xxxx; // this is valid
        this.setState();    // this is invalid, because setState() only runs when mount.
        // if you want to access this.props, remember to put "props" in the two "()" above!!
        this.state = this.props.something;
    }

    componentDidMount() {
        // This method is called after the component is rendered into the DOM
        // Perfect place to make AJAX calls get data from the server
        // then
        this.setState({data});
    }

    render() {
        return(
            <div>
            <p>{this.props.aaa}</p>
            <p>{this.props.bbb}</p>
        </div>
        );
    }
}