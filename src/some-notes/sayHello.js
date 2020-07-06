import React, {useState} from 'react';
import './index.css';

function Hello() {
    const sayHi = () => {
        // so something
        // arrow function can also be a const
        // Know how to write an arrow!! "const xxx = () => {...;  ...;}"
        // It's not really a function.
        console.log("hi!");
    }
    return (
        <div>
            <button onClick={sayHi}>const function</button>
        </div>
    );
}

function Comp( {name, msg}) {
// function Comp (props) {      the same, and use it as "{props.name}"

    const [count, setCount] = useState(0);
    const [isRed, setRed] = useState(false);
    // In the [], the first is a value (can be anything, a string, a number, even a json object etc)
    // Same as "{count: 0, isRed: false, user: {name: 'Ada', age: 18, xxx: xxx}}"
    // The other is a function to "do something to this state"
    const increment = () => {
        setCount(count + 1);
        setRed(true); // to toggle it, use "setRed(!isRed)".
    }


    return (
        <div>
            <h3>{name}</h3>
            <h4>{msg}</h4>
    <button onClick={increment}>{count}</button>
    <div className={isRed ? "red" : ""}>Is this red?</div>
        </div>
    );

}
export  {Hello, Comp};
// If there is only one function or class, use "export default" command to export.
// If there is more than one, export {xxx, xxx};