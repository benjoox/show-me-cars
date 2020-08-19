/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render, fireEvent } from '../../setupTests'
import Header from '.'

const HOST = 'http://localhost'
test('renders all the required elements', () => {
    const { getByText, container } = render(<Header />)

    const modelName = getByText('Purchase')
    expect(modelName).toBeInTheDocument()

    const stockNumber = getByText('My Orders')
    expect(stockNumber).toBeInTheDocument()

    const mileageNumber = getByText('Sell')
    expect(mileageNumber).toBeInTheDocument()

    const logo = container.querySelector('img')
    expect(logo).toBeInTheDocument()
    expect(logo.src).toBe(`${HOST}/logo.png`)
})

test('nav link has the correct url to redirect to ', () => {
    const { getByText } = render(<Header />)

    const purchaseLink = getByText('Purchase')
    expect(purchaseLink).toBeInTheDocument()
    expect(purchaseLink.href).toBe(`${HOST}/purchase`)

    const ordersLink = getByText('My Orders')
    expect(ordersLink).toBeInTheDocument()
    expect(ordersLink.href).toBe(`${HOST}/orders`)

    const sellLink = getByText('Sell')
    expect(sellLink).toBeInTheDocument()
    expect(sellLink.href).toBe(`${HOST}/sell`)
})
