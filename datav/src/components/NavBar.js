import React from 'react'

export default function NavBar (props) {


  return(
    <div>
       <input type="range" min="5" max="100" className="slider" id="myRange" onChange={props.onChange} onMouseUp={props.onMouseUp} value={props.arrayLength}/>
    </div>
  )
}
