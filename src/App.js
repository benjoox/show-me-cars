// @flow

import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from './components/Header'

function App() {
    return (
        <div>
            <Row
                style={{ marginBottom: '24px', borderBottom: 'solid 1px grey' }}
            >
                <Container>
                    <Header />
                </Container>
            </Row>
        </div>
    )
}

export default App
