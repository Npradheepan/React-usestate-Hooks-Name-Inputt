import React, {useState} from 'react'

export default function HooksCounterfunc() {
    const initialCount = 0
    const [Count, setCount] = useState(initialCount)

    const increamentfive = () => {
        for( let i = 0; i<5; i++) {
            setCount(prevCount =>prevCount +1)
        }
    }

  return (
    <div>
        <h1>
        HooksCounterfunc
        </h1>
        <h3>Counter : {Count}</h3>
        <button onClick={()=> {setCount(initialCount)}}>Reset</button>
        <button onClick={()=> {setCount(prevCount =>prevCount+1)}}>Increament</button>
        <button onClick={()=> {setCount(prevCount=>prevCount-1)}}>Decreament</button>
        <button onClick={increamentfive} >IncreamentFive</button>
    </div>
  )
}
