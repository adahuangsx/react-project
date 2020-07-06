import React from 'react';

function Hello() {
    const sayHi = () => {
        // so something
        // arrow function can also be a const
        console.log("hi!");
    }
    return (
        <div>
            <button onClick={sayHi}>const function</button>
        </div>
    );
}
export default Hello;