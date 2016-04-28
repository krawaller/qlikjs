
// Render challenges part 4

var Component = function(props){
	return <div>
		<p>The <strong>important</strong> todo list:</p>
		<ul>
			<li>Take out the trash</li>
			<li>Do the dishes</li>
		</ul>
	</div>;
};

ReactDOM.render(<Component/>, document.getElementById("target"));

