// @flow

import React from 'react'
import CarItem from '../CarItem'

type CarItemType = {
    modelName: string,
    stockNumber: number,
    mileage: Object,
    pictureUrl: string,
    color: string,
    fuelType: string,
}

type Props = {
    list: CarItemType[],
}
export default class CarItemList extends React.PureComponent<Props> {
    render() {
        return (
            <div>
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
