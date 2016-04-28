
// Roster part 3 solution


var pt = React.PropTypes;

var User = React.createClass({
  getInitialState: function(){
    return {
      editing: false,
      name: this.props.name,
      skill: parseInt(this.props.skill)
    }
  },
  startEdit: function(){
    this.setState({
      editing: true
    });
  },
  update: function(vals){
    this.setState({
      editing: false,
      name: vals.name,
      skill: vals.skill
    })
  },
  render: function(){
    var s = this.state;
    return s.editing ? <UserForm values={{name:s.name,skill:s.skill}} callback={this.update}/> : <div>
      <p>Name: {s.name}, skill: {s.skill} <button onClick={this.startEdit}>Edit</button></p>
    </div>;
  },
  propTypes: {
    name: pt.string.isRequired,
    skill: pt.number.isRequired
  }
});

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
  render: function(){
    return <User name="John Doe" skill={3} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));


