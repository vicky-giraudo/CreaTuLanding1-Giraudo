// src/components/NavBar.jsx
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget.jsx'
export default function NavBar() {
return (
    <Navbar bg='light' data-bs-theme="light">
    <Container>
        <Navbar.Brand href="#">AMAVI</Navbar.Brand>
        <Nav className="me-auto" variant="underline" defaultActiveKey="/home">
        <Nav.Link href="/home">Anillos</Nav.Link>
        <Nav.Link eventKey="link-1">Dijes</Nav.Link>
        <Nav.Link eventKey="link-2">Pulseras</Nav.Link>
        <Nav.Link eventKey="link-3">Aros</Nav.Link>
        </Nav>
        <CartWidget />
    </Container>  
    </Navbar>
)
}

