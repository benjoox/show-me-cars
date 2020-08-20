// @flow

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './components/Routes'

function App() {
    return (
        <Router>
            <div>
                <div style={{ minHeight: 'calc(100vh - 80px)' }}>
                    <Header />
                    <Routes />
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
