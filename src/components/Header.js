
// rfce

import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'

function MyNavbar() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect >
            <Container>
                <Navbar.Brand href="/">Olofi-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/cart"> <i className='fas fa-shopping-cart'>Cart</i> </Nav.Link>
                        <Nav.Link href="/login"> <i className='fas fa-user'>Login</i></Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;