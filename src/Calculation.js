import React from 'react'
const intialState = {count:0}
function Calculation(state=intialState,action) {
      switch(action.type){
        case 'INCREMENT':
            return {...state,count:state.count+1}
        default:
            return state
      }
}

export default Calculation