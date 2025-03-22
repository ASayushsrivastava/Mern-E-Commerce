//this is the Footer file.
import React from 'react'
import { Link } from 'react-router-dom' // link fron react-router-dom is used, because anchor tags are not used in react application.


// This is footer component for the website used as a component to wrap the other pages.

const Footer = () => {
return (
        <div className='footer sticky-bottom'>
            <h4 className='text-center'>All Rights are Reserved &copy; SriAyush</h4>
            <p className='text-center mt-3'>
            < Link to="/about">About</Link>
            |
            < Link to="/contact">Contact</Link>
            |
            < Link to="/policy">Policy</Link>
            </p>
        
            </div>
    )
}

export default Footer