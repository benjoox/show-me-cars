// @flow

import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FirstLetterUpperCase from '../_utils'

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
    marginBottom: '12px',
}

const image = {
    width: '85px',
    height: '66px',
}

const cardTitle = {
    margin: '0 0 8px 0',
}

const header = {
    padding: 0,
    marginBottom: '0',
}

const text = {
    fontSize: '12px',
    lineHeight: '1',
}

const cardBody = {
    padding: '0px 24px',
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
                <Card.Img src={pictureUrl} style={image} />
                <Card.Body style={cardBody}>
                    <Card.Title style={cardTitle}>
                        <h2 style={header}>{modelName}</h2>
                    </Card.Title>
                    <Card.Text style={text}>
                        <span>Stock # {stockNumber}</span>
                        <span> - </span>
                        <span>{mileage.number}</span>
                        <span>{mileage.unit.toUpperCase()}</span>
                        <span> - </span>
                        <span>{fuelType}</span>
                        <span> - </span>
                        <span>{FirstLetterUpperCase(color)}</span>
                    </Card.Text>
                    <Link to={`/details/${stockNumber}`}>View details</Link>
                </Card.Body>
            </Card>
        )
    }
}
