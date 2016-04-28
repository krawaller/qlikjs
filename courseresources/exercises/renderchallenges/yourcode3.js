
// Render challenges part 3

var Greeter = function(props){ // copy me from part 2, but add default name functionality!
  return <p>Not yet implemented! Open up the file <code>yourcode3.js</code> and try to figure it out!</p>;
};

var Tester = function(props){
	return <div>
		<Greeter greet={"student"}/>
		<Greeter />
	</div>;
}

ReactDOM.render(
  <Tester/>,
  document.getElementById("target")
);

