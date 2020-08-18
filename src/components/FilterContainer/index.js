// @flow

import React, { useState, useEffect } from 'react'
import { Row, Container, Form, Col, Button } from 'react-bootstrap'
import Filter from './Filter'
import FirstLetterUpperCase from './_utils'

const API_ENDPOINT = 'https://auto1-mock-server.herokuapp.com/api'

const DEFAULT_COLOR = 'All car colors'
const DEFAULT_MANUFACTURER = 'All car manufacturers'

type filterType = {
    manufacturer: string,
    color: string,
}

type Props = {
    filter: (params: filterType) => void,
}

export default function FiltersContainer(props: Props) {
    const [colors, setColor] = useState([])
    const [manufacturers, setManufacturer] = useState([])
    const [selectedColor, selectColor] = useState(DEFAULT_COLOR)
    const [selectedManufacturer, selectManufacturer] = useState(
        DEFAULT_MANUFACTURER
    )

    async function getColors() {
        const response = await fetch(`${API_ENDPOINT}/colors`)
        const data = await response.json()
        const colorNames = data.colors.map((el) => FirstLetterUpperCase(el))
        setColor([DEFAULT_COLOR, ...colorNames])
    }

    async function getManufacturer() {
        const response = await fetch(`${API_ENDPOINT}/manufacturers`)
        const data = await response.json()
        const manufacturersName = data.manufacturers.map((man) =>
            FirstLetterUpperCase(man.name)
        )
        setManufacturer([DEFAULT_MANUFACTURER, ...manufacturersName])
    }

    useEffect(() => {
        getColors()
        getManufacturer()
    }, [props])

    function handleFilter(ev) {
        ev.preventDefault()
        props.filter({
            manufacturer:
                selectedManufacturer === DEFAULT_MANUFACTURER
                    ? null
                    : selectedManufacturer,
            color: selectedColor === DEFAULT_COLOR ? null : selectedColor,
        })
    }

    return (
        <Container style={{ border: 'solid 1px grey', padding: '24px' }}>
            <Row>
                <Col>
                    <Form style={{ width: '100%' }}>
                        <Filter
                            label="Color"
                            itemList={colors}
                            // eslint-disable-next-line no-console
                            select={(k) => selectColor(k.target.value)}
                            selected={selectedColor}
                        />

                        <Filter
                            label="Manufacturer"
                            itemList={manufacturers}
                            select={(k) => selectManufacturer(k.target.value)}
                            selected={selectedManufacturer}
                        />
                        <Row>
                            <Col sm={{ span: 6, offset: 6 }}>
                                <Button
                                    style={{ width: '100%' }}
                                    primary
                                    // eslint-disable-next-line no-console
                                    onClick={handleFilter}
                                >
                                    Filter
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
