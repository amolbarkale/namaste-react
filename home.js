
  /* 
<div id="parent">
  <div id="child">
    <div id="h1"></div>
    <div id="h2"></div>
  </div>
</div> 
*/

const heading = React.createElement(
  "div",
  { id: "parent", abc: "xyz" },
[  React.createElement(
  "div",
  { id: "child" },
  [React.createElement("h1", { id: "heading1" }, "Hey this is heading frist"), React.createElement("h1", { id: "heading2" }, "Hello world!")]
),  React.createElement(
  "div",
  { id: "child" },
  [React.createElement("h1", { id: "heading1" }, "Hey this is heading frist"), React.createElement("h1", { id: "heading2" }, "Hello world!")]
)]
);
print("heading:", heading); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
