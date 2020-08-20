// @flow

import React, { useState } from 'react'
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
    const [cars, setCars] = useState([])
    const [colors, setColor] = useState([])
    const [manufacturers, setManufacturer] = useState([])
    const [selectedColor, selectColor] = useState(DEFAULT_COLOR)
    const [selectedManufacturer, selectManufacturer] = useState(
        DEFAULT_MANUFACTURER
    )
    const [totalPageCount, setTotalPageCount] = useState(0)
    const [totalCarsCount, setTotalCarsCount] = useState(0)

    async function getCars(params = '') {
        setLoading(true)
        const response = await fetch(`${API_ENDPOINT}/cars/${params}`)
        const data = await response.json()
        setCars(data.cars)
        setTotalPageCount(data.totalPageCount)
        setTotalCarsCount(data.totalCarsCount)
        setLoading(false)
    }

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

    function filter(params) {
        const url = ConstructURL(params)
        getCars(url)
    }

    function handleFilter(ev) {
        ev.preventDefault()
        filter({
            manufacturer:
                selectedManufacturer === DEFAULT_MANUFACTURER
                    ? null
                    : selectedManufacturer,
            color: selectedColor === DEFAULT_COLOR ? null : selectedColor,
        })
    }

    const value = {
        loading,
        cars,
        totalPageCount,
        totalCarsCount,
        setLoading,
        getCars,
        setTotalPageCount,
        setTotalCarsCount,
        colors,
        manufacturers,
        selectColor,
        selectManufacturer,
        handleFilter,
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
