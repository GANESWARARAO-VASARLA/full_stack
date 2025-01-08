import React from 'react'

function HigherOrder(WrapperComponent) {
    console.log(WrapperComponent)
 
  return({name}) => (
    <WrapperComponent name={name}/>
  )
}

export default HigherOrder