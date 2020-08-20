// @flow

import React from 'react'

type Props = {}

const root = {
    marginTop: '24px',
}

const listItem = {
    marginBottom: '24px',
    border: 'solid 1px #ededed',
    padding: '12px',
}

export default class LoadingList extends React.PureComponent<Props> {
    render() {
        return (
            <div style={root}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                    <div
                        key={Math.random() * 100}
                        style={listItem}
                        className="loadingList"
                    />
                ))}
            </div>
        )
    }
}
