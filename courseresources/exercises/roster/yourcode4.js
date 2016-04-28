
// Exercise Roster, part 4


var pt = React.PropTypes;

var User; // copy me from before, but tweak me so that name and skill are passed in as props

var UserForm; // copy me from before, no changes needed

var Roster = React.createClass({
  render: function(){
    return <p>Not yet implemented! Open up the file <code>yourcode4.js</code> and try to figure it out!</p>;
  }
})

var Tester = React.createClass({
  render: function(){
    return <Roster user={{name:"John Doe",skill:3}} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));


