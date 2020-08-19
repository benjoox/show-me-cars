// @flow

import React from 'react'
import { Container, Navbar, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'

const root = {
    marginBottom: '24px',
    borderBottom: 'solid 1px #ededed',
}

const navbar = {
    width: '100%',
    justifyContent: 'space-between',
    height: '80px',
}

const image = {
    width: '200px',
}

const links = {
    alignSelf: 'left',
}

export default function Header() {
    return (
        <header>
            <Row style={root}>
                <Container>
                    <Navbar collapseOnSelect style={navbar}>
                        <Navbar.Brand>
                            <Link to="/home">
                                <img src={logo} style={image} alt="logo" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <section style={links}>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav>
                                    <Nav.Link href="#purchase">
                                        Purchase
                                    </Nav.Link>
                                    <Nav.Link href="#orders">
                                        My Orders
                                    </Nav.Link>
                                    <Nav.Link href="#deets">Sell</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </section>
                    </Navbar>
                </Container>
            </Row>
        </header>
    )
}
