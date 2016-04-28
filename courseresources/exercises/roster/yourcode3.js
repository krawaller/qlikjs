
// Exercise Roster, part 3

var pt = React.PropTypes;

var User = React.createClass({
  render: function(){
    return <p>Not yet implemented! Open up the file <code>yourcode3.js</code> and try to figure it out!</p>;
  }
});

var UserForm; // copy me from the previous exercise!

var Tester = React.createClass({
  render: function(){
    return <User name="John Doe" skill={3} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));


