// @flow

import React, { PureComponent } from 'react'
import { Row } from 'react-bootstrap'

type Props = {}

const root = {
    borderTop: 'solid 1px #ededed',
    height: '80px',
}
const trademark = {
    padding: '24px',
}

export default class Footer extends PureComponent<Props> {
    render() {
        return (
            <footer style={root}>
                <Row className="justify-content-md-center">
                    <p style={trademark}>&copy; AUTO1 Group 2018</p>
                </Row>
            </footer>
        )
    }
}
