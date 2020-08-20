// @flow

import React, { useContext, useEffect } from 'react'
import { Row, Container, Form, Col, Button } from 'react-bootstrap'
import Filter from './Filter'
import { CollectionContext } from '../CollectionProvider'

const container = {
    border: 'solid 1px #ededed',
    padding: '24px',
}

const btn = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '24px',
}

export default function FiltersContainer() {
    const {
        colors,
        manufacturers,
        selectColor,
        selectManufacturer,
        filter,
        getColors,
        getManufacturer,
        selectedColor,
        selectedManufacturer,
    } = useContext(CollectionContext)

    useEffect(() => {
        getColors()
        getManufacturer()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleClick(ev) {
        ev.preventDefault()
        // Reset to page 1 when the filters button is clicked
        filter(1)
    }

    return (
        <Container style={container}>
            <Row>
                <Col>
                    <Form style={{ width: '100%' }}>
                        <Filter
                            label="Color"
                            itemList={colors}
                            select={(k) => selectColor(k.target.value)}
                            selected={selectedColor}
                        />

                        <Filter
                            label="Manufacturer"
                            itemList={manufacturers}
                            select={(k) => selectManufacturer(k.target.value)}
                            selected={selectedManufacturer}
                        />
                        <div style={btn}>
                            <Button onClick={handleClick}>Filter</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
