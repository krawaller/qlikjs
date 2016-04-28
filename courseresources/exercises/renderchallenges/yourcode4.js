
// Render challenges part 4

var Component = function(props){ // I need to be fixed :(
	return
		<p>The <strong>important</strong> todo list:</p>
		<ul>
			<li>Take out the trash
			<li>Do the dishes
		</ul>
};

ReactDOM.render(<Component/>, document.getElementById("target"));

