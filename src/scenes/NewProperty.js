import React, { useState } from 'react'

const formStyle = {
    padding: '2cm',
    backgroundColor: '#2262ff',
    color: 'white'
}


function NewProperty(){
    const [firstName,setFirstName] = useState('') //whatever's in useState is the default
    const [lastName,setLastName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hello, ${firstName} ${lastName}!`)
    }
    return (
      //putting in curly braces tells us its an object
       <form style={formStyle} onSubmit={handleSubmit}> 
          <label for="name">
              First Name:<br/>
              <input type="text"
               name="firstName"
               value = {firstName} 
               onChange ={(e) => setFirstName(e.target.value)}/>
          </label>
          <input type="submit" value="Submit" />
      </form>
  )

}

export default NewProperty