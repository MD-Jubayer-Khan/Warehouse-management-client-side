import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './img/warehouse-logo.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
                 <Container>
                 <Navbar.Brand href="#home"><img
                     src={logo}
                     width="150"
                     height="90"
                     className="d-inline-block align-top"
                     alt="React Bootstrap logo"
                  /></Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="me-auto">
                     <Nav.Link href="#features" className='text-white'>Home</Nav.Link>
                     <Nav.Link href="#pricing" className='text-white'>Pricing</Nav.Link>
                   </Nav>
                   <Nav>
                     <Nav.Link href="#deets" className='text-white'>More deets</Nav.Link>
                     <Nav.Link eventKey={2} href="#memes" className='text-white'>
                       Dank memes
                     </Nav.Link>
                   </Nav>
                 </Navbar.Collapse>
                 </Container>
            </Navbar>
        </div>
    );
};

export default Header;