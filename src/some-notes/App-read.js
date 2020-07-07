import React, { useState } from 'react';
import {Hello, Comp} from './sayHello';

function App() {

  const sayHello = () => {
    // called "arrow function"
    console.log("haha");
  }

  const [users, setUsers] = useState([
    {name: "Ada", message: "111"},
    {name: "Ada2", message: "22"},
    {name: "Ada3", message: "333"},
    {name: "Ada4", message: "4444"},
  ]);
  const allComps = users.map(user => (
    <Comp name={user.name} msg={user.message}/>
  ));

  return (
    // "." is an emmet abbr! "<div className=""></div>"
    <div className='this-is-not-class'> {/*There must be a parent div wrapping all things in return(). */}
      {/* "className because the "class" is taken in JS. Remember, this is not HTML but JS! */}
      <div>
      {/* This is not really html code, but JS code, same as "React.createElement(div)" */}
      <h1>Hello My First Project</h1>
      <button onClick={sayHello()}>laugh</button>
      {/* this is saving the trouble of "document.selector(xxx); hello.addListener(...) " */}
      {/* the curly braces are for JS code (JSX). */}

      {/* The onClick() can also be a oneliner: "onClick={() => setCount(count + 1)}" */}
      {/* This saves the trouble of making a new function and use only once. */}
    </div>

    <div>
      <h1>This is functions in a component:</h1>
      <Hello />
      <Comp name="Smith" msg="This is a message."/>
      {allComps}
    </div>
    </div>
    
  );
}

export default App;
// If there is only one function or class, use this "default" command to export.
// If there is more than one, export {xxx, xxx};
