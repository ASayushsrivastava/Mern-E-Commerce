// File for the Contact page in the website.

import React from 'react'
import Layout from '../components/layout/Layout.js'     //wrapping with the header and footer components

const Contact = () => { 
return (
    <Layout title={"Contact Us - Ecommerce Page"}>
        <div className='row contactus'>
            <div className='col-md-6'>
                <img
                    src='/images/contactus.jpeg'
                    alt='contactus'
                    style={{width: "100%"}}
                />
            </div>
            <div className='col-md-4'>
                <h1 className='bg-dark p-2 text-white text-center'>CONTACT US!</h1>
                <p className='text-justify mt-2'>For any query and info about any product, feel free to call US anytime. We are avaialible 24X7.
                </p>
                <p className='mt-3'>
                📧 : www.help@ecommerceapp.com
                </p>
                <p className = 'mt-3'>
                📞 : +91 1234567890
                </p>
                <p className = 'mt-3'>
                ☎️ : 1800-0000-0000 (toll free)
                </p>
            </div>

        </div>
    </Layout>
    )
}

export default Contact
