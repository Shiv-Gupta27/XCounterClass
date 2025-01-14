import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      counter : 0,
    }
  }

  render(){
    return(
      <div>
        <h1>
          Counter App
        </h1>
        <p>Count: {this.state.counter}</p>
        <button onClick={(e)=>{this.setState({counter:this.state.counter+1})}}>Increment</button>
        <button onClick={(e)=>{this.setState({counter:this.state.counter-1})}}>Decrement</button>
      </div>
    )
  }
}

export default App;
