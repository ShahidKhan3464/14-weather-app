import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Weather from './pages/Weather'
import Error from './pages/Error'

const App = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/weather' element={<Weather />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App