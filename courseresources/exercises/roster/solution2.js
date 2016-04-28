
// Roster part 2 solution


var pt = React.PropTypes;

var UserForm = React.createClass({
  submit: function(){
    this.props.callback({
      name: this.refs.name.value,
      skill: parseInt(this.refs.skill.value)
    });
  },
  render: function(){
    var v = this.props.values;
    return <div>
      <label htmlFor="name">Enter name: </label>
      <input name="name" type="text" ref="name" defaultValue={v.name}/>
      <br/>
      <label htmlFor="skill">Assess skill:</label>
      <input name="skill" type="range" min="1" max="10" ref="skill" defaultValue={v.name}/>
      <br/>
      <button onClick={this.submit}>Submit</button>
    </div>
  },
  propTypes: {
    callback: pt.func.isRequired,
    values: pt.shape({
      name: pt.string.isRequired,
      skill: pt.number.isRequired
    }).isRequired
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


