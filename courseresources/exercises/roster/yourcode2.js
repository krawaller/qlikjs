
// Exercise Roster, part 2


var pt = React.PropTypes;

// Complete the UserForm declaration so that it works as expected!
var UserForm = React.createClass({
  render: function(){
    return <p>Not yet implemented! Open up the file <code>yourcode2.js</code> and try to figure it out!</p>;
  },
  propTypes: {
    callback: pt.func.isRequired,
    values: pt.shape({
      name: pt.string.isRequired,
      skill: pt.number.isRequired
    })
  }
});

var Tester = React.createClass({
  getInitialState: function(){
    return {msg: "Enter data and submit it!"}
  },
  submitted: function(data){
    this.setState({msg:"You submitted "+data.name+" with skill "+data.skill+"."});
  },
  render: function(){
    return <div>
      <p>{this.state.msg}</p>
      <UserForm callback={this.submitted} values={{name:"John Doe",skill:3}} />
    </div>
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));


