// @flow

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CollectionContainer from './components/CollectionContainer'

function App() {
    return (
        <div>
            <div style={{ minHeight: 'calc(100vh - 80px)' }}>
                <Header />
                <CollectionContainer />
            </div>
            <Footer />
        </div>
    )
}

export default App
