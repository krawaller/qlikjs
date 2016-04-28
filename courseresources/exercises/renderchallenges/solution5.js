
// Render challenges part 5

var List = function(props){
	var items = props.items.map(function(i,n){
		return <Item key={n} text={i}/>;
	});
	return <div>
		<p>My chores:</p>
		<ul>{items}</ul>
	</div>;
};

var Item = function(props){
	return <li>{props.text}</li>;
};
Item.propTypes = {
	text: React.PropTypes.string.isRequired
}

var Tester = function(props){ // Don't touch me, I'm just here to show that it works
	return <List items={["take out trash","do the dishes"]}/>;
};

ReactDOM.render(<Tester/>, document.getElementById("target"));

