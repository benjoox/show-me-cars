// @flow

import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../logo.png'

const root = {
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
            <Navbar collapseOnSelect style={root}>
                <Navbar.Brand href="#home">
                    <img src={logo} style={image} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <section style={links}>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#purchase">Purchase</Nav.Link>
                            <Nav.Link href="#orders">My Orders</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Sell</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </section>
            </Navbar>
        </header>
    )
}
