import React, {useState} from 'react'
import HookMouse from './Hookmouse'

function Hookswillmouse() {
const [display, setDisplay] = useState(true)
  return (
    <div>
        <h1>Hookswillmouse</h1>
        <button onClick={()=> setDisplay(!display)}>Toggle display</button>
        {display && <HookMouse />}
    </div>
  )
}

export default Hookswillmouse