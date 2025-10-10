import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';

function NavBar({ categories }) {
    return (
        <Navbar expand="lg" className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    AMAVI
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            {categories.map(category => (
                                <NavDropdown.Item
                                    as={NavLink}

                                    to={`/category/${category.id}`}
                                    key={category.id}
                                >
                                    {category.name}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;
