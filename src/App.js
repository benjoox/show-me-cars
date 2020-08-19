// @flow

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CollectionContainer from './components/CollectionContainer'
import DetailsContainer from './components/DetailsContainer'
import NotFound from './components/NotFound'

function App() {
    return (
        <Router>
            <div>
                <div style={{ minHeight: 'calc(100vh - 80px)' }}>
                    <Header />
                    <Switch>
                        <Route
                            path="/details/:slug"
                            component={DetailsContainer}
                        />
                        <Route path="/" component={CollectionContainer} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
