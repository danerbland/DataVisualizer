import React from 'react'
import Bar from './Bar'
import './GraphContainer.css'


export default class GraphContainer extends React.Component {
constructor(){
    super( )
    this.state ={
        array: [1,2,4]
    }
}


render (){

    let graphArr = this.state.array
    return(



        <div className='GraphContainerDiv'>
            {graphArr.map((element)=>{
                return <Bar  height={element}/>
            }) }
        </div>

    )





}


}