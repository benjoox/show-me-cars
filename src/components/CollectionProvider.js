/* eslint-disable no-console */
// @flow

import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { FirstLetterUpperCase, ConstructURL } from './_utils'

export const CollectionContext = React.createContext('CollectionContext')

type Props = {
    children: React.ReactNode,
}

const API_ENDPOINT = 'https://auto1-mock-server.herokuapp.com/api'

const DEFAULT_COLOR = 'All car colors'
const DEFAULT_MANUFACTURER = 'All manufacturers'

export default function CollectionProvider(props: Props) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [cars, setCars] = useState([])
    const [colors, setColor] = useState([])
    const [manufacturers, setManufacturer] = useState([])
    const [selectedColor, selectColor] = useState(DEFAULT_COLOR)
    const [selectedManufacturer, selectManufacturer] = useState(
        DEFAULT_MANUFACTURER
    )
    const [totalPageCount, setTotalPageCount] = useState(0)
    const [totalCarsCount, setTotalCarsCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    async function getCars(params = '') {
        try {
            setLoading(true)
            const response = await fetch(`${API_ENDPOINT}/cars/${params}`)
            const data = await response.json()
            setCars(data.cars)
            setTotalPageCount(data.totalPageCount)
            setTotalCarsCount(data.totalCarsCount)
            setLoading(false)
        } catch (err) {
            console.error(err)
            setError(true)
        }
    }

    async function getColors() {
        try {
            const response = await fetch(`${API_ENDPOINT}/colors`)
            const data = await response.json()
            const colorNames = data.colors.map((el) => FirstLetterUpperCase(el))
            setColor([DEFAULT_COLOR, ...colorNames])
        } catch (err) {
            console.error(err)
            setError(true)
        }
    }

    async function getManufacturer() {
        try {
            const response = await fetch(`${API_ENDPOINT}/manufacturers`)
            const data = await response.json()
            const manufacturersName = data.manufacturers.map((man) =>
                FirstLetterUpperCase(man.name)
            )
            setManufacturer([DEFAULT_MANUFACTURER, ...manufacturersName])
        } catch (err) {
            console.error(err)
            setError(true)
        }
    }

    function filter(pageNumber) {
        if (pageNumber <= totalPageCount && pageNumber >= 1) {
            const manufacturer =
                selectedManufacturer === DEFAULT_MANUFACTURER
                    ? null
                    : selectedManufacturer
            const color = selectedColor === DEFAULT_COLOR ? null : selectedColor
            const page = pageNumber || currentPage
            const url = ConstructURL({
                manufacturer,
                color,
                page,
            })
            getCars(url)
            // TODO: It would be better to set the page when we recieve the data from server
            setCurrentPage(page)
        }
    }

    if (error) {
        return <Redirect to="/notFound" />
    }

    const value = {
        loading,
        cars,
        totalPageCount,
        totalCarsCount,
        currentPage,
        setLoading,
        getCars,
        setTotalPageCount,
        setTotalCarsCount,
        colors,
        manufacturers,
        selectColor,
        selectManufacturer,
        filter,
        getColors,
        getManufacturer,
        selectedColor,
        selectedManufacturer,
    }

    return (
        <CollectionContext.Provider value={value}>
            {props.children}
        </CollectionContext.Provider>
    )
}
