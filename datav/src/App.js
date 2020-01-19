import React from 'react';
import './App.css';
import GraphContainer from './components/GraphContainer'
import NavBar from './components/NavBar'

import finalMS from './algorithms/mergesort'

class App extends React.Component {
  constructor(){
    super()

    this.state ={
      array: [1,2,4],
      arrayLength: 50
  }
  this.onChangeListener = this.onChangeListener.bind(this)
  this.onMouseUpListener = this.onMouseUpListener.bind(this)
  this.updateArray = this.updateArray.bind(this)
  //this.onSortHandler = this.onSortHandler.bind(this)
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
    let arrayLength = this.state.array.length
    let newarr = []
    if(arrayLength < event.target.value){

    const randomArr = generateRandomArray(event.target.value - arrayLength)
    newarr = this.state.array.concat(randomArr)
    } else {
    newarr = this.state.array.slice(0, event.target.value)
    }
    this.setState({
      array: newarr
    })
  }

  onSortHandler(){
    console.log('in onSortHandler')
    finalMS(this.state.array, this.updateArray)
    // this.setState({
    //   array: arr
    // })
  }

  updateArray(arr){
    let newArr = []
    arr.forEach((element) => {
      newArr.push(...element)
    })
    this.setState({
      array: newArr
    })
    console.log(this.state)
  }

  render(){
  return (
    <div className="App">
      <NavBar onChange={this.onChangeListener} onMouseUp = {this.onMouseUpListener} arrayLength={this.state.arrayLength}/>
      <GraphContainer graphArr={this.state.array} />
      <button onClick={()=>this.onSortHandler()}>Sort</button>
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
