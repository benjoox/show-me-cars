/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render } from '../../setupTests'
import Footer from '.'

test(`renders the footer's text`, () => {
    const { getByText } = render(<Footer />)

    const modelName = getByText('© AUTO1 Group 2018')
    expect(modelName).toBeInTheDocument()
})
