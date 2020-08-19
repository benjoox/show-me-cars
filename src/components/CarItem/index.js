// @flow

import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export type CarItemType = {
    modelName: string,
    stockNumber: number,
    mileage: Object,
    pictureUrl: string,
    color: string,
    fuelType: string,
}

const root = {
    padding: '12px',
    flexDirection: 'row',
    marginBottom: '24px',
}

const image = {
    width: '86px',
    height: '76px',
}

const title = {
    margin: '0 0 12px 0',
}

const header = {
    padding: 0,
    marginBottom: '0',
}

const text = {
    fontSize: '14px',
    margin: '0 0 12px 0',
}

const link = {
    fontSize: '14px',
}

export default class CarItem extends React.PureComponent<Props> {
    render() {
        const {
            modelName,
            stockNumber,
            mileage,
            pictureUrl,
            color,
            fuelType,
        } = this.props
        return (
            <Card style={root}>
                <Card.Img variant="top" src={pictureUrl} style={image} />
                <Card.Body style={{ padding: '0px 12px', margin: '0' }}>
                    <Card.Title style={title}>
                        <h2 style={header}>{modelName}</h2>
                    </Card.Title>
                    <Card.Text style={text}>
                        <span>Stock #{stockNumber} - </span>
                        <span>
                            {mileage.number} {mileage.unit} -{' '}
                        </span>
                        <span>{fuelType} - </span>
                        <span>{color}</span>
                    </Card.Text>
                    <Link to={`/details/${stockNumber}`} style={link}>
                        {' '}
                        Details
                    </Link>
                </Card.Body>
            </Card>
        )
    }
}
