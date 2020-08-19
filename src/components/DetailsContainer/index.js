// @flow

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

const API_ENDPOINT = 'https://auto1-mock-server.herokuapp.com/api/cars'

const content = {
    marginTop: '24px',
}

const header1 = {
    marginBottom: '12px',
}

const specs = {
    margin: '12px 0',
}

const description = {
    padding: '12px 12px 12px 0',
}

const saveBox = {
    padding: '24px',
    border: 'solid 1px #ededed',
    display: 'flex',
    flexDirection: 'column',
}

export default function DetailsContainer() {
    const [car, setCar] = useState(null)
    const { slug } = useParams()
    useEffect(() => {
        async function getDetails() {
            const response = await fetch(`${API_ENDPOINT}/${slug}`)
            const data = await response.json()
            setCar(data.car)
        }
        getDetails()
    }, [slug])

    if (!car) return ''

    function save() {
        // TODO : implemenet saving the car in the localstorage
    }
    const { modelName, stockNumber, mileage, pictureUrl, color, fuelType } = car

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col
                    className="justify-content-md-center"
                    style={{ flexGrow: 0 }}
                >
                    <img src={pictureUrl} alt="" />
                </Col>
            </Row>
            <Container style={content}>
                <Row>
                    <Col sm={{ span: 5, offset: 1 }}>
                        <h1 style={header1}>{modelName}</h1>
                        <div style={specs}>
                            <span>Stock #{stockNumber} - </span>
                            <span>
                                {mileage.number} {mileage.unit} -{' '}
                            </span>
                            <span>{fuelType} - </span>
                            <span>{color}</span>
                        </div>
                        <p style={description}>
                            This car is currently available and can be deliverd
                            as soon as tomorrow morning. Please be aware that
                            delivery times shown in the page are not deginitive
                            and may change due to bad weather conditions.
                        </p>
                    </Col>
                    <Col sm={{ span: 4 }}>
                        <div style={saveBox}>
                            <p>
                                If you like this car, click the button and save
                                it to your favourite items.
                            </p>
                            <Button
                                style={{ alignSelf: 'flex-end' }}
                                type="button"
                                onClick={save}
                            >
                                Save
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
