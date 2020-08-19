import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Jumbotron } from 'react-bootstrap'
import logo from '../../logo.png'

const image = {
    width: '200px',
}

const NotFound = () => (
    <Container
        style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            height: '60vh',
        }}
    >
        <Row className="justify-content-md-center">
            <Jumbotron
                style={{ textAlign: 'center', backgroundColor: 'transparent' }}
            >
                <Link to="/">
                    <img src={logo} style={image} alt="logo" />
                </Link>
                <h2>404 - Not Found</h2>
                <h3>Sorry the page you are looking for does not exist.</h3>
                <h3>
                    You can always go back to the
                    <Link to="/">homepage.</Link>
                </h3>
            </Jumbotron>
        </Row>
    </Container>
)

export default NotFound
