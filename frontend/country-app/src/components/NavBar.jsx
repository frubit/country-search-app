import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar(){

    return (
        <Navbar expand="lg" style={{ backgroundColor: 'rgb(84, 107, 89)' }} variant='dark'>
        <Container >
          <Navbar.Brand href="/" style={{color:'white'}}>Country Search</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar
