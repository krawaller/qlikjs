// Roster part 1 solution

var pt = React.PropTypes;

var UserForm = React.createClass({
  submit: function(){
    this.props.callback(this.refs.name.value);
  },
  render: function(){
    var d = this.props.defaultname;
    return <div>
      <label htmlFor="name">Enter name: </label>
      <input name="name" type="text" ref="name" defaultValue={d}/>
      <br/>
      <button onClick={this.submit}>Submit</button>
    </div>
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



