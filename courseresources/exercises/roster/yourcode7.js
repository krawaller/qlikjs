
// Exercise Roster, part 7

var pt = React.PropTypes;

var User; // copy me from before

var UserForm; // copy me from before

var Roster = React.createClass({ // copy but tweak to store users in an object
  render: function(){
    return <p>Not yet implemented! Open up the file <code>yourcode7.js</code> and try to figure it out!</p>;
  }
});

var userdata = [{name:"David",skill:10},{name:"Hannes",skill:8},{name:"Jacob",skill:6}];

var Tester = React.createClass({
  render: function(){
    return <Roster users={userdata} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));

