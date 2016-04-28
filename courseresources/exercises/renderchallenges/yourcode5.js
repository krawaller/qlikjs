
// Render challenges part 5

var List = function(props){ // I need to be implemented!
	return <p>Not yet implemented! Open up the file <code>yourcode5.js</code> and try to figure it out!</p>;
};

var Item = function(props){ // me too!

};
Item.propTypes = { // and you have to obey this!
	text: React.PropTypes.string.isRequired
}

var Tester = function(props){ // Don't touch me, I'm just here to show that it works
	return <List items={["take out trash","do the dishes"]}/>;
};

ReactDOM.render(<Tester/>, document.getElementById("target"));

