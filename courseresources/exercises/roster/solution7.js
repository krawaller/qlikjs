
// Roster part 7 solution


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
    this.refs.name.value = '';
    this.refs.skill.value = 5; // seems like a sensible default
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
      <button onClick={this.submit}>{this.props.button || 'Submit'}</button>
    </div>
  },
  propTypes: {
    callback: pt.func.isRequired,
    values: pt.shape({
      name: pt.string.isRequired,
      skill: pt.number.isRequired
    }).isRequired,
    button: pt.string
  }
});

var Roster = React.createClass({
  getInitialState: function(){
    // if you want to feel like a ninja, use `reduce` instead! :)
    var users = {};
    this.props.users.forEach(function(user,n){
      users["user"+n] = user;
    });
    return {
      users: users
    };
  },
  update: function(userid,newuserdata){
    var users = this.state.users;
    users[userid] = newuserdata;
    this.setState({users:users});
  },
  add: function(newuserdata){
    var newid = "user"+(Object.keys(this.state.users).length+1);
    this.update(newid,newuserdata);
  },
  render: function(){
    var renderedusers = [];
    for(var id in this.state.users){
      var u = this.state.users[id];
      renderedusers.push(
        <User key={id} name={u.name} skill={u.skill} update={this.update.bind(this,id)} />
      );
    }
    return <div>
      {renderedusers}
      <h4>Add new user:</h4>
      <UserForm values={{name:'',skill:5}} callback={this.add} button="Add"/>
    </div>;
  }
});

var userdata = [{name:"David",skill:10},{name:"Hannes",skill:8},{name:"Jacob",skill:6}];

var Tester = React.createClass({
  render: function(){
    return <Roster users={userdata} />;
  }
});

ReactDOM.render(<Tester/>,document.getElementById("target"));


