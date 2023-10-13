import React from 'react'
import Navbar from '../components/NavBar'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    )
}

export default DefaultLayout;