import React, {useState} from 'react'

 function Hookscount() {
     const [Count, setCount] = useState(0)

  return (
    <div> 
        <h1>Hookscount</h1>
        <button onClick={() => setCount (Count +1)}>Count {Count}</button>

    </div>
  )
}
export default Hookscount