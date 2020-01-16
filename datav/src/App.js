import React from 'react';
import './App.css';
import GraphContainer from './components/GraphContainer'

class App extends React.Component {
  constructor(){
    super()

    this.state ={
      array: [1,2,4]
  }
  }



  render(){
  return (
    <div className="App">
      <GraphContainer graphArr={this.state.array} />
    </div>
  );
}}

export default App;
