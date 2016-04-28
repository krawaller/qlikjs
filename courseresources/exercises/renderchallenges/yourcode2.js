
// Render challenges part 2

var Greeter = function(props){
  return <p>Not yet implemented! Open up the file <code>yourcode2.js</code> and try to figure it out!</p>;
};

var Tester = function(props){
	return <Greeter greet={"world"}/>;
}

ReactDOM.render(
  <Tester/>,
  document.getElementById("target")
);

