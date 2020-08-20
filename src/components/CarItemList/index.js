// @flow

import React from 'react'
import CarItem, { CarItemType } from '../CarItem'

export type CarItemListType = {
    list: CarItemType[],
}

const root = {
    marginTop: '24px',
}

export default class CarItemList extends React.PureComponent<Props> {
    render() {
        return (
            <div style={root}>
                {this.props.list.map((car: CarItemType) => {
                    const {
                        modelName,
                        stockNumber,
                        mileage,
                        pictureUrl,
                        color,
                        fuelType,
                    } = car
                    return (
                        <CarItem
                            key={stockNumber}
                            modelName={modelName}
                            stockNumber={stockNumber}
                            mileage={mileage}
                            pictureUrl={pictureUrl}
                            color={color}
                            fuelType={fuelType}
                        />
                    )
                })}
            </div>
        )
    }
}
