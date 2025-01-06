import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import "./style.css"

export default function Header() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">Saeid Gholami</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className={(link) => link.isActive ? "nav-link active" : "nav-link" } to="/courses">
                            Courses
                        </NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-link" to="/panel">Panel</NavLink>
                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
