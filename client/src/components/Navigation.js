import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes'

export default function Navigation() {

    const { logout } = useAuth();

  return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-2'>
                <Navbar.Brand as={NavLink} to={routes.home} >Gestor de Tareas</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to={routes.projects}>Projectos</Nav.Link>
                        <NavDropdown title="Administrador" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to={routes.login}>Iniciar Seccion</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.register}>Registrarse</Nav.Link>
                        <Nav.Link as={NavLink} to={routes.account}>Mi Cuenta</Nav.Link>
                        <Nav.Link to={routes.account} onClick={logout}>Cerrrar Seccion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
  )
}
