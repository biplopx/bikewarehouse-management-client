import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  // Handle Logout
  const logOut = () => {
    signOut(auth);
  }
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">BikeWarehouse</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            </Nav>
            <Nav>
              {
                user ?
                  <>
                    <Nav.Link as={Link} to="/manage-inventories">Manage Inventories</Nav.Link>
                    <Nav.Link as={Link} to="/add-items">Add Items</Nav.Link>
                    <Nav.Link as={Link} to="/my-items">My Items</Nav.Link>
                    <Navbar.Text><span className='text-white'>({user?.displayName}) </span></Navbar.Text>
                    <button onClick={logOut} className='btn bike-btn text-white rounded-pill mx-1'>Logout</button>
                  </>
                  :
                  <>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">
                      Register
                    </Nav.Link>
                  </>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;