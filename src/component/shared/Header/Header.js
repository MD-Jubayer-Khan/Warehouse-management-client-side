import React from 'react';
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from './img/warehouse-logo.png';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLoggedOut = () =>{
      signOut(auth)};
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
                    {
                      user && <>
                       <Nav.Link as={Link} to='manageItems' className='text-white'>Manage Items</Nav.Link>
                       <Nav.Link as={Link} to='myItems' className='text-white'>My Items</Nav.Link>
                       <Nav.Link as={Link} to='addItems' className='text-white'>Add Item</Nav.Link>
                        
                      </>
                    }

                     {
                       user ?  

                         <button className='btn btn-link text-warning text-decoration-none' onClick={handleLoggedOut}>sign out</button>
                                :
                                <Nav.Link className='text-white' as={Link} to="signIn">
                               sign in
                            </Nav.Link>}
                   </Nav>
                 </Navbar.Collapse>
                 </Container>
            </Navbar>
        </div>
    );
};

export default Header;