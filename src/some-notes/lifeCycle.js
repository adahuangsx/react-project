//* Life cycle
// Only cc has life cycle.

const { Component } = require("react");

// mounting -> updating -> 

/**
 * 1. mounting:
 * The order is "constructor -> rendering (recursively render all the sub components) -> mounting"
 * 2. updating:
 * This only changed the "virtual DOM" and that certain part, not the entire DOM.
 * The method "componentDidUpdate()" has parameters: (prevProps, prevState).
 * They can help to determine whether a AJAX call is needed.
 * 3. unmounting:
 * When a component is deleted from the DOM, all other components will render again before it is
 * unmounted (to avoid memory leaks...(what is that?..))
 */

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

//How to delete a component?
//Say,,

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 111},
            {id: 2, value: 222},
            {id: 3, value: 333},
            {id: 4, value: 444},
        ]
    };
    handleDelete = (counterId) => {
        /**
         * To change the state (delete), not changing it directly, we create a new state
         * "counters" array.
         */ 
        const newCounters = this.state.counters.filter(c => c.id != counterId);
        // This "filter" method is kinda like "map".
        //Then, set the state:
        this.setState({counters: newCounters});
        /**
         * * DO YOU KNOW?!~
         * If you named it "counters" instead of "newCounters",
         * you can simply use "this.setState({counters});"
         * * You thought newXxx is more clear huh?...
         */

    }
    render () {

        return (
            <div>
                {this.state.counters.map(counter => (
                    <Counter id={counter.id} value={counter.value} key={counter.id}
                            onDelete={this.handleDelete}/>
                ))}
            </div>
        );
    }
}


//Then, in another file:
class Counter extends Component {
    state = {value: this.props.value};

    handleIncrement = () => {
        this.setState({value: this.state.value + 1});
    }

    render () {
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={this.handleIncrement}>increment</button>
                {/* <button onClick={this.props.onDelete}>Delete</button> */}
                {/* to an arrow-function: */}
                <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
                {/* Pass up the parameter! */}
        {/* This is the delete button, but DELETE is only done in "Counters" class.
            So, the "counter" component raises the event and "counters" will handle it. */}
        {/* This is not exclusive to React. This concept "raise and handle" exists in many UX. */}
            </div>
        );
    }
}