import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar(){

    return (
        <Navbar expand="lg" style={{ backgroundColor: 'rgb(84, 107, 89)' }} variant='dark'>
        <Container >
          <Navbar.Brand href="/" style={{color:'white'}}>Country Search</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    )
}

export default NavBar
