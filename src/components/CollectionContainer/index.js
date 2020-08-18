// @flow

import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CarItemList from '../CarItemList'
import Pagination from '../Pagination'

const header2 = {
    marginBottom: '12px',
}

const header3 = {
    marginBottom: '24px',
}

const API_ENDPOINT = 'https://auto1-mock-server.herokuapp.com/api/cars'
export default function CollectionContainer() {
    const [cars, setCars] = useState([])
    const [totalPageCount, setTotalPageCount] = useState([])
    const [totalCarsCount, setTotalCarsCount] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getAllCars() {
            setLoading(true)
            const response = await fetch(API_ENDPOINT)
            const data = await response.json()
            setCars(data.cars)
            setTotalPageCount(data.totalPageCount)
            setTotalCarsCount(data.totalCarsCount)
            setLoading(false)
        }
        getAllCars()
    }, [])

    function first() {}
    function previous() {}
    function next() {}
    function last() {}

    const currentPage = () => cars.length % 10
    const displayCount = () => cars.length

    if (loading) {
        return <div>....loading</div>
    }

    return (
        <Container>
            <Row>
                <Col sm={4}>Filter placeholder</Col>
                <Col sm={8}>
                    <h2 style={header2}>Available cars</h2>
                    <h3 style={header3}>
                        {`Showing ${displayCount()} out of ${totalCarsCount}`}
                    </h3>

                    {cars.length > 0 ? <CarItemList list={cars} /> : ''}

                    <Pagination
                        currentPage={currentPage()}
                        pagesCount={totalPageCount}
                        first={first}
                        previous={previous}
                        next={next}
                        last={last}
                    />
                </Col>
            </Row>
        </Container>
    )
}
