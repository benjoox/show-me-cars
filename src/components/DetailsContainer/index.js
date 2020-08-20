// @flow

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import SaveFavBox from './SaveFavBox'
import { FirstLetterUpperCase } from '../_utils'

const API_ENDPOINT = 'https://auto1-mock-server.herokuapp.com/api/cars'

const content = {
    marginTop: '24px',
    padding: '0 24px',
    maxWidth: '800px',
}

const specs = {
    marginTop: '24px',
    marginBottom: '12px',
}

const description = {
    padding: '12px  0',
}

const imageContainer = {
    height: '322px',
    backgroundColor: '#ededed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-24px',
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

    const { modelName, stockNumber, mileage, pictureUrl, color, fuelType } = car

    return (
        <Container fluid style={{ padding: 0 }}>
            <div style={imageContainer}>
                <img src={pictureUrl} alt="" />
            </div>
            <Container style={content}>
                <Row>
                    <Col sm={7}>
                        <h1>{modelName}</h1>
                        <div style={specs}>
                            <span>Stock # {stockNumber}</span>
                            <span> - </span>
                            <span>{mileage.number}</span>
                            <span>{mileage.unit.toUpperCase()}</span>
                            <span> - </span>
                            <span>{fuelType}</span>
                            <span> - </span>
                            <span>{FirstLetterUpperCase(color)}</span>
                        </div>
                        <p style={description}>
                            This car is currently available and can be deliverd
                            as soon as tomorrow morning. Please be aware that
                            delivery times shown in the page are not deginitive
                            and may change due to bad weather conditions.
                        </p>
                    </Col>
                    <SaveFavBox stockNumber={stockNumber} />
                </Row>
            </Container>
        </Container>
    )
}
