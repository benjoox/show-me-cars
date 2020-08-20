import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CollectionContainer from './CollectionContainer'
import DetailsContainer from './DetailsContainer'
import NotFound from './NotFound'
import CollectionProvider from './CollectionProvider'

export default function () {
    return (
        <Switch>
            <Route path="/details/:slug">
                <DetailsContainer />
            </Route>
            <Route exact path="/">
                <CollectionProvider>
                    <CollectionContainer />
                </CollectionProvider>
            </Route>
            <Route component={NotFound} />
        </Switch>
    )
}
