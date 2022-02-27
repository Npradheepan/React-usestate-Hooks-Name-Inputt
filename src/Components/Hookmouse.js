import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

  const  logMousePosition = e => {
      console.log('Moves Event')
      setX(e.clientX)
      setY(e.clientY)
  } 

useEffect(()=> {
    console.log('useEffect Called')
    window.addEventListener('mousemove', logMousePosition)
    //Affter the toggle block  on the hookswill mounten page Acker Error
    //That Error to prevent , we  need to this function
    return () => {
      console.log('willMouse position unmouting')
      window.removeEventListener('mousemove', logMousePosition)
    }
}, [ ])

  return (
    <div>
        <h1>Hookmouse</h1>
        X-{x} Y- {y}
    </div>
  )
}

export default HookMouse