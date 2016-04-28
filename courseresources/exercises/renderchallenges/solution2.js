
// Render challenges part 2

var Greeter = function(props){
  return <p>Hello, <strong>{props.greet}</strong>!</p>;
};

var Tester = function(props){
	return <Greeter greet={"world"}/>;
}

ReactDOM.render(
  <Tester/>,
  document.getElementById("target")
);

