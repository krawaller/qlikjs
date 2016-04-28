
// Exercise Roster, part 6

var pt = React.PropTypes;

var User; // copy me from before, no changes needed

var UserForm; // copy me from before, but tweak for custom button text and field cleaning!

var Roster = React.createClass({ // copy from before, but add ability to add users!
  render: function(){
    return <p>Not yet implemented! Open up the file <code>yourcode6.js</code> and try to figure it out!</p>;
  }
});

var userdata = [{name:"David",skill:10},{name:"Hannes",skill:8},{name:"Jacob",skill:6}];

var Tester = React.createClass({
  render: function(){
    return <Roster users={userdata} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));


