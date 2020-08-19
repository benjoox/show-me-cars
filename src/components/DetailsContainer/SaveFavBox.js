// @flow

import React, { useState, useEffect } from 'react'
import { Col, Button } from 'react-bootstrap'

const saveBox = {
    padding: '24px',
    border: 'solid 1px #ededed',
    display: 'flex',
    flexDirection: 'column',
}

type Props = {
    stockNumber: string,
}

export default function DetailsContainer(props: Props) {
    const [isSaved, setIsSaved] = useState(false)
    const { stockNumber } = props

    useEffect(() => {
        const storage = localStorage.getItem('autoFavourites')
        if (storage) {
            const favs = JSON.parse(storage)
            const isFound = favs.find((el) => el === stockNumber)
            setIsSaved(isFound)
        }
    }, [stockNumber])

    function save() {
        const storage = localStorage.getItem('autoFavourites')
        if (storage) {
            const favourites = JSON.parse(storage) || []
            favourites.push(stockNumber)
            localStorage.setItem('autoFavourites', JSON.stringify(favourites))
            setIsSaved(true)
        } else {
            localStorage.setItem(
                'autoFavourites',
                JSON.stringify([stockNumber])
            )
            setIsSaved(true)
        }
    }

    function remove() {
        const storage = localStorage.getItem('autoFavourites') || ''
        const favourites = JSON.parse(storage)
        const removedList = favourites.filter((el) => el !== stockNumber)
        localStorage.setItem('autoFavourites', JSON.stringify(removedList))
        setIsSaved(false)
    }

    return (
        <Col sm={{ span: 4 }}>
            {isSaved ? (
                <div style={saveBox}>
                    <p>
                        If you do not like this car, click the button and remove
                        it from your favourite items.
                    </p>

                    <Button
                        style={{ alignSelf: 'flex-end' }}
                        type="button"
                        onClick={remove}
                    >
                        Remove
                    </Button>
                </div>
            ) : (
                <div style={saveBox}>
                    <p>
                        If you like this car, click the button and save it to
                        your favourite items.
                    </p>

                    <Button
                        style={{ alignSelf: 'flex-end' }}
                        type="button"
                        onClick={save}
                    >
                        Save
                    </Button>
                </div>
            )}
        </Col>
    )
}
