import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget.jsx'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar({ cartCount = 0 }) {
return (
    <Navbar bg='light' data-bs-theme="light">
    <Container>
        <Navbar.Brand as={Link} to="/">AMAVI</Navbar.Brand>
        <Nav className="me-auto" variant="underline">
        <Nav.Link as={NavLink} to="/category/anillos">Anillos</Nav.Link>
        <Nav.Link as={NavLink} to="/category/dijes">Dijes</Nav.Link>
        <Nav.Link as={NavLink} to="/category/pulseras">Pulseras</Nav.Link>
        <Nav.Link as={NavLink} to="/category/aros">Aros</Nav.Link>
        </Nav>
        <CartWidget count={cartCount} />
    </Container>
    </Navbar>
)
}