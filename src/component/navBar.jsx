import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from 'react-router-dom'; 

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" h-100 navBarMain d-flex justify-content-between">
      <Container>
        <Navbar.Brand  as={NavLink} to="/" className='fw-bolder fs-2'><span className='rrrr'>R</span>oberto</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="fw-bold details">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/">Rooms</Nav.Link>
          <Nav.Link as={NavLink} to="/">About Us</Nav.Link>
          <Nav.Link as={NavLink} to="/">Pages</Nav.Link>
          <Nav.Link as={NavLink} to="/">News</Nav.Link>
          <Nav.Link as={NavLink} to="/">contact</Nav.Link>
          <Nav.Link as={NavLink} to="/"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
          
            <button className='border-0 rounded-3'>Book Now</button>
          
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
