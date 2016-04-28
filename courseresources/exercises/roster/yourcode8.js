
// Exercise Roster, part 8

var pt = React.PropTypes;

var User; // copy me from before, but tweak to take delete callback and pass it to form

var UserForm; // copy me from before, but tweak to show delete button & use delete callback

var Roster = React.createClass({ // copy but tweak to execute deletions
  render: function(){
    return <p>Not yet implemented! Open up the file <code>yourcode8.js</code> and try to figure it out!</p>;
  }
});

var userdata = [{name:"David",skill:10},{name:"Hannes",skill:8},{name:"Jacob",skill:6}];

var Tester = React.createClass({
  render: function(){
    return <Roster users={userdata} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));

