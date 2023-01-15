
// rfce

import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function MyNavbar() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect >
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>Olofi-Shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/cart'>
                        <Nav.Link> <i className='fas fa-shopping-cart'>Cart</i> </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/login'>
                        <Nav.Link > <i className='fas fa-user'>Login</i></Nav.Link>
                        </LinkContainer>

                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
