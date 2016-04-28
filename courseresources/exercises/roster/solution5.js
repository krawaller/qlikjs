
// Roster part 5 solution


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
      users: this.props.users
    };
  },
  update: function(usernumber,newuserdata){
    var updatedusers = [].concat(this.state.users); // making a copy to be nice
    updatedusers.splice(usernumber,1,newuserdata);
    this.setState({users:updatedusers});
    console.log("UPDATING",newuserdata,"NOW WE HAVE",updatedusers);
  },
  render: function(){
    var users = this.state.users.map(function(u,n){
      return <User key={n} name={u.name} skill={u.skill} update={this.update.bind(this,n)} />;
    }.bind(this));
    return <div>{users}</div>;
  }
});

var userdata = [{name:"David",skill:10},{name:"Hannes",skill:8},{name:"Jacob",skill:6}];

var Tester = React.createClass({
  render: function(){
    return <Roster users={userdata} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));



