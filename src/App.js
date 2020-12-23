import React from 'react';
import PropTypes from "prop-types";


class App extends React.Component {
  state={
    count: 0
  };
  add=() =>{
    // this.setState({count:this.state.count+1});
    //좀 더 멋지고, 오류 없이 하려면 밑에 코드처럼 하기
    this.setState(current=>({count:current.count+1}));
  };
  minus=() =>{
    this.setState({count:this.state.count-1});
  };
  render(){
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
