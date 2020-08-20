// @flow

import React, { useContext } from 'react'
import { Row, Button } from 'react-bootstrap'
import { CollectionContext } from '../CollectionProvider'

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
}
const text = {
    padding: '0 8px',
    fontSize: '12px',
    lineHeight: '1.5',
}

export default function Pagination() {
    const { currentPage, totalPageCount, filter } = useContext(
        CollectionContext
    )

    return (
        <Row style={root}>
            <Button
                type="button"
                style={btn}
                onClick={() => filter(1)}
                variant="secondary"
            >
                First
            </Button>
            <Button
                type="button"
                style={btn}
                onClick={() => filter(currentPage - 1)}
                variant="secondary"
            >
                Previous
            </Button>
            <p style={text}>
                Page {currentPage} of {totalPageCount}
            </p>
            <Button
                type="button"
                style={btn}
                onClick={() => filter(currentPage + 1)}
                variant="secondary"
            >
                Next
            </Button>
            <Button
                type="button"
                style={btn}
                onClick={() => filter(totalPageCount)}
                variant="secondary"
            >
                Last
            </Button>
        </Row>
    )
}
