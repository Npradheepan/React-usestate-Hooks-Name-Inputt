import React, {useState }from 'react'

function HooksProps() {
    const [name, setName] = useState({FirstName: ' ', LastName: ' '} )
  return (
    <div>
        <h1>HooksProps</h1>
        <form>
        <input type= 'text' 
        value={name.FirstName} 
        onChange={e =>setName({...name, FirstName:e.target.value})}/>
        <br></br>
        <input type= 'text' 
        value={name.LastName} 
        onChange={e =>setName({...name, LastName:e.target.value})}/>

        <h2>Your FirstName is - {name.FirstName}</h2>
        <h2>Your VorName is - {name.LastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
  )
}

export default HooksProps