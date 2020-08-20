// @flow

import React from 'react'
import { Container, Navbar, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'

const root = {
    marginBottom: '24px',
    padding: '0 12px',
    borderBottom: 'solid 1px #ededed',
}

const navbar = {
    width: '100%',
    justifyContent: 'space-between',
    height: '80px',
}

const image = {
    width: '150px',
}

const links = {
    alignSelf: 'left',
}
const navLink = {
    fontSize: '14px',
    color: '#4a4a4a',
}

export default function Header() {
    return (
        <header>
            <Row style={root}>
                <Container fluid>
                    <Navbar collapseOnSelect style={navbar}>
                        <Navbar.Brand>
                            <Link to="/">
                                <img src={logo} style={image} alt="logo" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <section style={links}>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav>
                                    <Nav.Link href="/purchase" style={navLink}>
                                        Purchase
                                    </Nav.Link>
                                    <Nav.Link href="/orders" style={navLink}>
                                        My Orders
                                    </Nav.Link>
                                    <Nav.Link href="/sell" style={navLink}>
                                        Sell
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </section>
                    </Navbar>
                </Container>
            </Row>
        </header>
    )
}
