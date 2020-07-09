// * props and state

/**
 * state is inside the component and gives no access to the outside.
 * state is its internal data and invisible to others.
 * 
 * props is read-only. The component receives props as input, and is unable to change it.
 * ! this.props.xxx = 0;  // forbidden!
 * * this.setState({xxx: this.props.xxx + 1, }) // allowed.
 * 
 */