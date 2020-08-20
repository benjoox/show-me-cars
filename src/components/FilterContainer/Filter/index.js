// @flow

import React from 'react'
import { Form } from 'react-bootstrap'

type Props = {
    label: string,
    itemList: Array<string>,
    select: (event: SyntheticEvent<HTMLButtonElement>) => void,
    selected: string,
}

export default function Filter(props: Props) {
    const { label, itemList, select, selected } = props
    return (
        <Form.Group controlId={label}>
            <Form.Label>
                <h5>{label}</h5>
            </Form.Label>
            <Form.Control as="select" onChange={select} value={selected}>
                {itemList.length > 0 &&
                    itemList.map((el: string) => (
                        <option key={el} value={el}>
                            {el}
                        </option>
                    ))}
            </Form.Control>
        </Form.Group>
    )
}
