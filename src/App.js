import React from 'react';
import Hello from './sayHello';

function App() {

  const sayHello = () => {
    // called "arrow function"
    console.log("haha");
  }
  return (
    <div className='this-is-not-class'> {/*There must be a parent div wrpping all things in return(). */}
      {/* "className because the "class" is taken in JS. Remember, this is not HTML but JS! */}
      <div>
      {/* This is not really html code, but JS code, same as "React.createElement(div)" */}
      <h1>Hello My First Project</h1>
      <button onClick={sayHello()}>laugh</button>
      {/* this is saving the trouble of "document.selector(xxx); hello.addListener(...) " */}
      {/* the curly braces are for JS code (JSX). */}
    </div>

    <div>
      <h1>This is functions in a component:</h1>
      <Hello />
    </div>
    </div>
    
  );
}

export default App;
