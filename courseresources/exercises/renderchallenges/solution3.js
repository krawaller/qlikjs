
// Render challenges part 3

var Greeter = function(props){
  return <p>Hello, <strong>{props.greet||"whoever you are"}</strong>!</p>;
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

