import React from 'react'

export default function Bar(props){
    // console.log(props, "THIS IS PROPS")
    return(
        <div className='Bar' style={{width: 50, height:props.height}}>
            Test
        </div>
    )
} 