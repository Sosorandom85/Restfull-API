import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
state = {
name : '',
lastname: '',
namev2 : undefined,
lastnamev2 : undefined

}
handleChange = (e) => {
  this.setState({
  [e.target.name]: e.target.value
})
}
newStudent = async (e)=> {
await axios.post('http://localhost:4242/api/modif', this.state)
await (data => this.setState({
  name: this.state.name,
  lastname: this.state.lastname
}) )}

getAled = async (e) => {
  const inf = await fetch('http://localhost:4242/api/info')
  const truc = await inf.json()
  console.log(truc)
  this.setState({
    namev2 : truc[0].name,
    lastnamev2 : truc[0].lastname
  })
}
componentDidMount(e){
this.getAled()
}

  render() {
    return (
      <div className="App">
        <ol>
          <li>{this.state.namev2}</li>
          <li>{this.state.lastnamev2}</li>
        </ol>
        <form onSubmit={this.newStudent}>
          <input type="text"  name="name" value={this.state.name} onChange={this.handleChange}/>
          <input type="text"  name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
          <button>ALEEEEEEEEEEEEEEEEEEEED</button>
        </form>
      </div>
    );
  }
}

export default App;
