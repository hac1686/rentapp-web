import React, { useState, useEffect } from 'react'
 //when importing as destructured inside the curly braces we can use it directly instead of having to type React.useState
import { Link } from 'react-router-dom'
 import ListGroup from 'react-bootstrap/ListGroup'



function Properties() {
    const [propertyList, setPropertyList] = useState([])
    useEffect(() => {
        fetch('https://rentbunny-api.web.app/properties')
         .then(response => response.json())
         .then(data => setPropertyList(data))
         .catch(err => console.log(err))
    }, [])
  return (
      //<> is React Fragment
  <> 
  <h1>Properties List</h1>
  {!propertyList
  ?<p>Loading...</p>
  :<ListGroup>
      {propertyList.map(prop => {
          return (
          <ListGroup.Item key={prop.id}>
              <Link to={`/properties/${prop.id}`}>
                  {prop.address}
                  </Link>
                  </ListGroup.Item>
          )
      })}
  </ListGroup>
}
</>

  )
}

export default Properties