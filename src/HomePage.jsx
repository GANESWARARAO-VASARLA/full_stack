import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MyContext } from './Context'
import HigherOrder from './HigherOrder'
import ChildElement from './ChildElement'

const HigherOrderComponent = HigherOrder(ChildElement)
function HomePage() {
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
  const contextValue = useContext(MyContext)
  const [data,setData]=useState([])
  const fetchData = async()=>{
    try{const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(responce.data)}catch(error){
        console.log(error.message)
      }
  }
  useEffect(()=>{
   fetchData()
  },[])

  return (

    <div>
      <p>{count ? count : 0}</p>
      <button onClick={()=> dispatch({ type: "INCREMENT" })}>Increment</button>
      <table style={{ border: '1px solid black', padding: '8px' }}>
        <thead>
    <tr>
      <th style={{ border: '1px solid black', padding: '8px' }}>
        Name
      </th>
      <th style={{ border: '1px solid black', padding: '8px' }}>
       Website 
      </th >
      <th style={{ border: '1px solid black', padding: '8px' }}>
       Phone Number
      </th>
    </tr>
        </thead><tbody>
      {data?.map((item)=>(<tr key={item.id}>
        <td style={{ border: '1px solid black', padding: '8px' }}>
          {item.name}
        </td>
        <td style={{ border: '1px solid black', padding: '8px' }}>
          {item.website}
        </td>
        <td style={{ border: '1px solid black', padding: '8px' }}>
          {item.phone}
        </td>
      </tr>)

      )}
        </tbody>
      </table>
      <HigherOrderComponent name='ganesh'/>
    </div>
  )
}

export default HomePage