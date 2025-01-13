import React from 'react'

const Footer = (porps) => {
return (
        <div className='bg-dark text-light p-3'>
            <h4 className='text-center'>All Rights are Reserved &copy; SriAyush</h4>
            {porps.children}
        </div>
    )
}

export default Footer