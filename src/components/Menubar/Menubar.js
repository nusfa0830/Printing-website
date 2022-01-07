import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import "./Menubar.css"
import logo from "../../images/begum art_.jpg"
const Menubar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" variant="light" fixed="top"  >
                <Container fluid>
                    <Navbar.Brand className="px-5 col-2" href="#home">

                        <img
                            alt=""
                            src={logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top
                        "
                        />
                        Begum Art
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav link" >
                        <Nav className="d-flex justify-content-end nav-item dropdown fw-bold  col-10">
                            <Nav.Link as={NavLink} to="/home" className="items ">
                                <li>Home</li>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/alltour" className="items">
                                <li>About</li>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/addBooking" className="items">
                                <li>Services</li>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/dashboard" className="items">
                                <li>Product</li>
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/login">
                                <Button variant="dark">

                                    +11234567890
                                </Button>

                            </Nav.Link>
                            {/* {user.displayName && (
                                <Link to="/">
                                    {user.displayName}
                                    <Button onClick={handleLogout} variant="danger">

                                        LogOut
                                    </Button>
                                </Link>
                            )} */}

                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;