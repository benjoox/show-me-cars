// @flow

import React from 'react'
import { Row, Button } from 'react-bootstrap'

const root = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
    marginTop: '24px',
}
const btn = {
    padding: '0 8px',
    border: 'none',
    background: 'none',
    height: '14px',
    color: '#ea7f28',
}
const text = {
    padding: '0 8px',
    fontSize: '12px',
    lineHeight: '1.5',
}

export type PaginationType = {
    currentPage: number,
    pagesCount: number,
    first: (event: SyntheticEvent<HTMLButtonElement>) => void,
    previous: (event: SyntheticEvent<HTMLButtonElement>) => void,
    next: (event: SyntheticEvent<HTMLButtonElement>) => void,
    last: (event: SyntheticEvent<HTMLButtonElement>) => void,
}

export default class Pagination extends React.PureComponent<PaginationType> {
    render() {
        const {
            currentPage,
            pagesCount,
            first,
            previous,
            next,
            last,
        } = this.props
        return (
            <Row style={root}>
                <Button
                    type="button"
                    style={btn}
                    onClick={first}
                    variant="secondary"
                >
                    First
                </Button>
                <Button
                    type="button"
                    style={btn}
                    onClick={previous}
                    variant="secondary"
                >
                    Previous
                </Button>
                <p style={text}>
                    Page {currentPage} of {pagesCount}
                </p>
                <Button
                    type="button"
                    style={btn}
                    onClick={next}
                    variant="secondary"
                >
                    Next
                </Button>
                <Button
                    type="button"
                    style={btn}
                    onClick={last}
                    variant="secondary"
                >
                    Last
                </Button>
            </Row>
        )
    }
}
