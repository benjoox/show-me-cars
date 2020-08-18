// @flow

import React from 'react'
import { Row } from 'react-bootstrap'

const root = {
    display: 'flex',
    justifyContent: 'center',
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
                <button
                    type="button"
                    style={btn}
                    onClick={first}
                    className="btn-link"
                >
                    {' '}
                    First{' '}
                </button>
                <button
                    type="button"
                    style={btn}
                    onClick={previous}
                    className="btn-link"
                >
                    {' '}
                    Previous{' '}
                </button>
                <p style={text}>
                    {' '}
                    {currentPage} out of {pagesCount}{' '}
                </p>
                <button
                    type="button"
                    style={btn}
                    onClick={next}
                    className="btn-link"
                >
                    {' '}
                    Next{' '}
                </button>
                <button
                    type="button"
                    style={btn}
                    onClick={last}
                    className="btn-link"
                >
                    {' '}
                    Last{' '}
                </button>
            </Row>
        )
    }
}
