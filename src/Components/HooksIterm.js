import React, {useState} from 'react'

function HooksIterm() {
 const [Item, setItem] = useState([])
const addItem = () => {
    setItem([...Item, {
        id:Item.length, 
        value: Math.floor(Math.random()*10) +1
    }])
}
  return (
    <div>
        <h1>HooksIterm</h1>
        <button onClick={addItem}>add The Number</button>
        <ul>
            {Item.map(Item =>(<li key={Item.id}>{Item.value}</li>))}
        </ul>

    </div>
  )
}

export default HooksIterm