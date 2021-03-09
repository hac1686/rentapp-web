import React, { useState, useEffect } from 'react'
 //when importing as destructured inside the curly braces we can use it directly instead of having to type React.useState
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const cardStyle = {
    width: '18rem',
}

const imgStyle = {
    height: '300px',
    width: '18rem',
    backgroundColor: '#808080'
}

const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vogelhaus_Modell_Eduard_4.JPG/220px-Vogelhaus_Modell_Eduard_4.JPG'

function PropertyCard({ property }){
  return (
     
      <Link to ={`/properties/${property.id}`}>
         <Card style={cardStyle}>
         <Card.Img variant="top" style={imgStyle}
         src={property.photo || defaultImg} />
         <Card.Body>
             <Card.Title>{property.title}</Card.Title>
             <Card.Text>{property.address}</Card.Text>
             
             </Card.Body>

         </Card>
      </Link>
     
     
  )

}

export default PropertyCard