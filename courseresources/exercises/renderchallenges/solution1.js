var Component = function(props){
	return (
		<div>
			<h3>Shopping list</h3>
			<ul>
				<li>Milk</li>
				<li>Eggs</li>
				<li>Patience</li>
			</ul>
		</div>
	);
};

ReactDOM.render(
	<Component/>,
	document.getElementById("target")
);

