import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/iconos/pokemonlogo.png"

const Navigation = () => {
  const setActiveClass = ({ isActive }) => {
    const aux = "text-decoration-none me-3";
    return isActive ? `text-white ${aux}` : `text-secondary ${aux}`;
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text-white text-decoration-none">
          <img
              src={Logo}
              alt="Logo"
              className="d-inline-block align-top"
              width="150"
              height="50"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={setActiveClass}>
              Home
            </NavLink>
            <NavLink to="/pokemones" className={setActiveClass}>
              Pokemones
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
