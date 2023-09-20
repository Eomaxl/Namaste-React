// const heading1  = React.createElement("h1",{},"Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading1);

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am an h1 tag"),
        React.createElement("h2",{},"I am an h2 tag")
    ])
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);