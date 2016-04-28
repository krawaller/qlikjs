
// Roster part 4 solution


var pt = React.PropTypes;

var User = React.createClass({
  getInitialState: function(){
    return { editing: false };
  },
  startEdit: function(){
    this.setState({ editing: true });
  },
  submit: function(data){
    this.props.update(data);
    this.setState({ editing: false });
  },
  render: function(){
    var p = this.props;
    return this.state.editing ? <UserForm values={{name:p.name,skill:p.skill}} callback={this.submit}/> : <div>
      <p>Name: {p.name}, skill: {p.skill} <button onClick={this.startEdit}>Edit</button></p>
    </div>;
  },
  propTypes: {
    name: pt.string.isRequired,
    skill: pt.number.isRequired,
    update: pt.func.isRequired
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

var Roster = React.createClass({
  getInitialState: function(){
    return {
      name: this.props.user.name,
      skill: this.props.user.skill
    };
  },
  update: function(newuserdata){
    this.setState(newuserdata);
    console.log("UPDATING",newuserdata);
  },
  render: function(){
    console.log("Rendering roster...")
    return <User name={this.state.name} skill={this.state.skill} update={this.update} />;
  }
});

var Tester = React.createClass({
  render: function(){
    return <Roster user={{name:"John Doe",skill:3}} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));


