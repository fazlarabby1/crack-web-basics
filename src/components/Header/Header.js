import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='shadow-lg'>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                            <Nav className="navbar">
                                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/topics">Topics</NavLink>
                                <NavLink to="/statistics">Statistics</NavLink>
                                <NavLink to="/blog">Blog</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </div>
    );
};

export default Header;