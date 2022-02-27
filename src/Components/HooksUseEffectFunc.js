import React,{useState,useEffect} from 'react'

function HooksUseEffectFunc() {
    const  [Count, setCount] = useState(0)
    const [name, serName] =useState(' ') 

    useEffect(() =>{
      console.log('useEffect-Updateting title')
       document.title = `You clicked ${Count}`},[Count]
     )
  return (
    <div>
        <h1>HooksUseEffectFunc</h1>
        <button onClick={()=> {setCount(Count +1)}}>Clicked {Count}</button>
    </div>
  )
}

export default HooksUseEffectFunc