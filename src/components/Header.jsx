import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">Saeid Gholami</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/courses">Courses</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
