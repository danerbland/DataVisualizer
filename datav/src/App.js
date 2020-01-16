import React from 'react';
import './App.css';
import GraphContainer from './components/GraphContainer'
import NavBar from './components/NavBar'

class App extends React.Component {
  constructor(){
    super()

    this.state ={
      array: [1,2,4],
      arrayLength: 50
  }
  this.onChangeListener = this.onChangeListener.bind(this)
  this.onMouseUpListener = this.onMouseUpListener.bind(this)
  }

  onChangeListener(event){
    console.log('trying to change')
    console.log(event.target.value)
    this.setState({
      arrayLength: event.target.value
    })
  }

  onMouseUpListener(event){
    //TODO make a new array of random numbers
    const arr = generateRandomArray(event.target.value)
    this.setState({
      array: arr
    })
  }

  render(){
  return (
    <div className="App">
      <NavBar onChange={this.onChangeListener} onMouseUp = {this.onMouseUpListener} arrayLength={this.state.arrayLength}/>
      <GraphContainer graphArr={this.state.array} />
    </div>
  );
}}

function generateRandomArray (n) {
  let arr = []
  for(let i = 0; i < n; i++){
    arr.push(makeRandomNumber())
  }
  return arr
}

function makeRandomNumber() {
  return Math.floor(Math.random() * Math.floor(99));

}

export default App;
