import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Jumbotron } from 'react-bootstrap'
import logo from '../../logo.png'

const container = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '60vh',
}

const jumbotron = {
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginTop: '24px',
}

const image = {
    width: '150px',
}

const header1 = {
    marginTop: '24px',
    marginBottom: '24px',
}
const header3 = {
    marginBottom: '24px',
}

const link = {
    fontSize: '18px',
}

const NotFound = () => (
    <Container style={container}>
        <Row className="justify-content-md-center">
            <Jumbotron style={jumbotron}>
                <Link to="/">
                    <img src={logo} style={image} alt="logo" />
                </Link>
                <h1 style={header1}>404 - Not Found</h1>
                <h3 style={header3}>
                    Sorry the page you are looking for does not exist.
                </h3>
                <h3>
                    You can always go back to the&nbsp;
                    <Link to="/" style={link}>
                        homepage
                    </Link>
                    .
                </h3>
            </Jumbotron>
        </Row>
    </Container>
)

export default NotFound
