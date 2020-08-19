/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render } from '../../setupTests'
import CarItem from '.'

const HOST = 'http://localhost'
test('renders all the required info', () => {
    const testCase = {
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
    }
    const { getByText, container } = render(<CarItem {...testCase} />)

    const modelName = getByText('Croma')
    expect(modelName).toBeInTheDocument()

    const stockNumber = getByText('Stock # 12856')
    expect(stockNumber).toBeInTheDocument()

    const mileageNumber = getByText('141340')
    expect(mileageNumber).toBeInTheDocument()

    const mileageUnit = getByText('KM')
    expect(mileageUnit).toBeInTheDocument()

    const fuelType = getByText('Petrol')
    expect(fuelType).toBeInTheDocument()

    const color = getByText('White')
    expect(color).toBeInTheDocument()

    const linkElement = getByText('View Details')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.href).toBe(`${HOST}/details/12856`)

    const carImage = container.querySelector('img')
    expect(carImage).toBeInTheDocument()
    expect(carImage.src).toBe(
        'https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
    )
})

test('view details has the correct url to redirect to ', () => {
    const testCase = {
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
    }

    const { getByText } = render(<CarItem {...testCase} />)

    const linkElement = getByText('View Details')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.href).toBe(`${HOST}/details/12856`)
})
