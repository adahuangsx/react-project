// * This is a note of the difference between SFC(stateless functional Component) and CC(class component)
// Their emmet abbr is sfc and cc.

const { Component } = require("react");

const SFComponent = (props) => {
    return (
        <div>
            <p>{props.aaa}</p>
            <p>{props.bbb}</p>
        </div>
    );
}
// OR:
const SFComponent2 = ({aaa, bbb}) => {
    return (
        <div>
            <p>{aaa}</p>
            <p>{bbb}</p>
        </div>
    );
}

// For a cc:
class CComponent {
    render() {
        return(
            <div>
            <p>{this.props.aaa}</p>
            <p>{this.props.bbb}</p>
        </div>
        );
    }
}

//OR:
class CComponent2 {
    render() {
        const {aaa, bbb} = this.props;
        return(
            <div>
            <p>{aaa}</p>
            <p>{bbb}</p>
        </div>
        );
    }
}

