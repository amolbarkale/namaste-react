import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS Object => HTMLElement(reander)

const header = React.createElement("h1", {id: "heading"}, "Hello React.js")
console.log('header:', header) 

//JSX is not HMTL in JS, it is HTML-like or XML-like syntax.
//JSX (Transpiled before it reaches to JS engine) - PARCEL - Babel

//JSX => transpiled into React.createElement => ReactElement - JS Object => HTMLElement(reander)
const JSXHeading = <h1>Hello Reactjs</h1>
// const JSXHeading = (<h1>Hello Reactjs</h1>)

const elem = <span>, Welcome!</span>
const Component1 = () =>(
  <h1>Hello Component1 {elem}</h1>
)

const number = 15
const str = "k"
//Component composition
const Component = () => {
  return <><h1>Helloo Component {number} <h1>{str}</h1></h1><Component1/></>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(header)
// root.render(<Component/>)