// Exercise Roster, part 1

var pt = React.PropTypes;

// Complete the UserForm declaration so that it works as expected!
var UserForm = React.createClass({
  render: function(){
    return <p>Not yet implemented! Open up the file <code>yourcode1.js</code> and try to figure it out!</p>;
  },
  propTypes: {
    callback: pt.func.isRequired,
    defaultname: pt.string.isRequired
  }
});

var Tester = React.createClass({
  getInitialState: function(){
    return {msg: "Enter data and submit it!"}
  },
  submitted: function(data){
    this.setState({msg:"You submitted the name "+data});
  },
  render: function(){
    return <div>
      <p>{this.state.msg}</p>
      <UserForm callback={this.submitted} defaultname="John Doe" />
    </div>
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));


