// @flow

import React, { PureComponent } from 'react'

type Props = {}

const root = {
    borderTop: 'solid 1px #ededed',
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'content-box',
}

export default class Footer extends PureComponent<Props> {
    render() {
        return (
            <footer style={root}>
                <h5>&copy; AUTO1 Group 2018</h5>
            </footer>
        )
    }
}
