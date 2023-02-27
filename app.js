const heading = React.createElement("h1",{key:1,style : {color:"red"}},"Namaste Everyone!!!")
const heading2 = React.createElement("h2",{},"Hello World");

const container = React.createElement("div",{},[heading,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);