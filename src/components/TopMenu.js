import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function TopMenu() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand><Link to="/">Rent App</Link></Navbar.Brand>
            <Nav className="mr-auto"> 
              <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/properties">Properties</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/new">New Property</NavLink></Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default TopMenu