// @flow

import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CarItemList from '../CarItemList'
import LoadingItem from '../CarItemList/LoadingList'
import Pagination from '../Pagination'
import FiltersContainer from '../FilterContainer'

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

    async function getAllCars(params = '') {
        setLoading(true)
        const response = await fetch(`${API_ENDPOINT}${params}`)
        const data = await response.json()
        setCars(data.cars)
        setTotalPageCount(data.totalPageCount)
        setTotalCarsCount(data.totalCarsCount)
        setLoading(false)
    }

    useEffect(() => {
        getAllCars()
    }, [])

    function constructURL({ manufacturer, color, page }) {
        let urlParams = '?'
        if (manufacturer) {
            urlParams += `manufacturer=${manufacturer}&`
        }
        if (color) {
            urlParams += `color=${color}&`
        }
        if (page) {
            urlParams += `page=${page}`
        } else {
            urlParams += `page=${1}`
        }
        return urlParams === '?' ? '' : urlParams
    }

    const currentPage = () => cars.length % 10
    const displayCount = () => cars.length

    return (
        <Container>
            <Row>
                <Col sm={4}>
                    <FiltersContainer
                        filter={(params) => getAllCars(constructURL(params))}
                    />
                </Col>
                <Col sm={8}>
                    <h2 style={header2}>Available cars</h2>
                    <h3 style={header3}>
                        {`Showing ${displayCount()} out of ${totalCarsCount}`}
                    </h3>
                    {loading ? (
                        <LoadingItem />
                    ) : (
                        <CarItemList list={cars} loading={loading} />
                    )}

                    <Pagination
                        currentPage={currentPage()}
                        pagesCount={totalPageCount}
                        first={() => getAllCars(constructURL({ page: 1 }))}
                        previous={() => getAllCars(constructURL({ page: 1 }))}
                        next={() => getAllCars(constructURL({ page: 1 }))}
                        last={() =>
                            getAllCars(constructURL({ page: totalPageCount }))
                        }
                    />
                </Col>
            </Row>
        </Container>
    )
}
