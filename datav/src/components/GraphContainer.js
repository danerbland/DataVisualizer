import React from 'react'
import Bar from './Bar'
import './GraphContainer.css'


export default function GraphContainer(props) {
    return(
        <div className='GraphContainerDiv'>
            {props.graphArr.map((element)=>{
                return <Bar  height={element}/>
            }) }
        </div>

    )
}


