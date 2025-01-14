import React from 'react'
import Layout from '../components/layout/Layout.js'

const Policy = () => {
    return (
    <Layout title={"Policy Page - Ecommerce"}>
        <div className='row contactus'>
            <div className='col-md-6'>
                <img 
                    src='/images/contactus.jpeg'
                    alt='contactus'
                    style={{width:"100%"}}
                />
            </div>

            <div className='col-md-4'>
                <h1>Privacy Policy</h1>
                <ul>
                    <li><p>privacy policy 1</p></li>
                    <li><p>privacy policy 2</p></li>
                    <li><p>privacy policy 3</p></li>
                    <li><p>privacy policy 4</p></li>
                    <li><p>privacy policy 5</p></li>
                    <li><p>privacy policy 6</p></li>
                </ul>
            </div>

        </div>
    </Layout>
    )
}

export default Policy
