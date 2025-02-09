// File for the Page not found page in the website

import React from 'react'
import Layout from '../components/layout/Layout.js'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
    <Layout title={"Page Not found"}>
        <div className='pnf'>
            <h1 className='pnf-title'>404</h1>
            <h2 className='pnf-heading'> Page Not Found :/ </h2>
            <Link to="/" className='pnf-btn'>
                Go Back
            </Link>
        </div>

    </Layout>
    )
}

export default PageNotFound
