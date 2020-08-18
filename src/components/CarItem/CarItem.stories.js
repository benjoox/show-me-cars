import React from 'react'
import '../../custom.scss'

import CarItem from '.'

export default {
    component: CarItem,
    title: 'CarItem',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
}

const car = {
    stockNumber: 12856,
    manufacturerName: 'Fiat',
    modelName: 'Croma',
    color: 'white',
    mileage: {
        number: 141340,
        unit: 'km',
    },
    fuelType: 'Petrol',
    pictureUrl: 'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg',
}

export const Default = () => (
    <CarItem
        modelName={car.modelName}
        stockNumber={car.stockNumber}
        mileage={car.mileage}
        pictureUrl={car.pictureUrl}
        color={car.color}
        fuelType={car.fuelType}
    />
)
