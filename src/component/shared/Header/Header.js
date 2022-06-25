import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './img/warehouse-logo.png'

const Header = () => {
    return (
        <div style={{backgroundColor:'#54576d'}}>
            <Navbar collapseOnSelect expand="lg" sticky="top" >
                 <Container>
                 <Navbar.Brand as={Link} to="home"><img
                     src={logo}
                     width="150"
                     height="90"
                     className="d-inline-block align-top"
                     alt="React Bootstrap logo"
                  /></Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="me-auto">
                     <Nav.Link as={Link} to="home" className='text-white'>Home</Nav.Link>
                     <Nav.Link as={Link} to="blogs" className='text-white'>Blogs</Nav.Link>
                     <Nav.Link as={Link} to="about" className='text-white'>About</Nav.Link>
                   </Nav>
                   <Nav>
                     <Nav.Link as={Link} to='manageItem' className='text-white'>Manage Items</Nav.Link>
                     <Nav.Link as={Link} to='myItems' className='text-white'>My Items</Nav.Link>
                     <Nav.Link as={Link} to='login' className='text-white'> Log in</Nav.Link> 
                   </Nav>
                 </Navbar.Collapse>
                 </Container>
            </Navbar>
        </div>
    );
};

export default Header;