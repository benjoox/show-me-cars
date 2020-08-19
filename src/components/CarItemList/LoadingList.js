// @flow

import React from 'react'

type Props = {}

const root = {
    marginBottom: '24px',
    border: 'solid 1px #ededed',
    padding: '12px',
}

export default class LoadingList extends React.PureComponent<Props> {
    render() {
        return (
            <div>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                    <div
                        key={Math.random() * 100}
                        style={root}
                        className="loadingList"
                    />
                ))}
            </div>
        )
    }
}
