import React, { useState, useEffect } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import PropertyCard from '../components/PropertyCard'

const cardColumnStyle = {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto'
}

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
  :<CardColumns style={cardColumnStyle}>
      {propertyList.map(property => {
          return (<PropertyCard
           key={property.id}
            property={property} />)
      })}
    </CardColumns>
}
</>

  )
}

export default Properties