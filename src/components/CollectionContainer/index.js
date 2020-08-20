// @flow

import React, { useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CarItemList from '../CarItemList'
import LoadingItem from '../CarItemList/LoadingList'
import Pagination from '../Pagination'
import FiltersContainer from '../FilterContainer'
import { CollectionContext } from '../CollectionProvider'

export default function CollectionContainer() {
    const {
        loading,
        cars,
        totalPageCount,
        totalCarsCount,
        getCars,
    } = useContext(CollectionContext)

    useEffect(() => {
        getCars()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!cars || cars.length < 1) return ''

    const currentPage = () => cars.length % 10
    const displayCount = () => cars.length

    return (
        <Container fluid>
            <Row>
                <Col sm={4}>
                    <FiltersContainer />
                </Col>
                <Col sm={8}>
                    <h2>Available cars</h2>
                    <h3>
                        {`Showing ${displayCount()} of ${totalCarsCount} results`}
                    </h3>

                    {loading ? (
                        <LoadingItem />
                    ) : (
                        <CarItemList list={cars} loading={loading} />
                    )}
                    <Pagination
                        currentPage={currentPage()}
                        pagesCount={totalPageCount}
                    />
                </Col>
            </Row>
        </Container>
    )
}
