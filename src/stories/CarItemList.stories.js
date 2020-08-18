import React from 'react'
import '../custom.scss'

import CarItemList from '../components/CarItemList'

export default {
    component: CarItemList,
    title: 'CarItemList',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
}

const list = [
    {
        stockNumber: 12856,
        manufacturerName: 'Fiat',
        modelName: 'Croma',
        color: 'white',
        mileage: {
            number: 141340,
            unit: 'km',
        },
        fuelType: 'Petrol',
        pictureUrl:
            'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
    {
        stockNumber: 12856,
        manufacturerName: 'Fiat',
        modelName: 'Croma',
        color: 'white',
        mileage: {
            number: 141340,
            unit: 'km',
        },
        fuelType: 'Petrol',
        pictureUrl:
            'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
    },
]

export const Default = () => <CarItemList list={list} />
