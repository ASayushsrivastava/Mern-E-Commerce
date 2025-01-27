// this is the Layout file containing the Footer and Header file wrapped under it.

import React from 'react'
import Header from './Header.js'    //header component
import Footer from './Footer.js'    //footer component
import {Helmet} from 'react-helmet' //helmet is used for dynamic meta tags of the page.
import {ToastContainer} from 'react-toastify';  //toast notification
import 'react-toastify/dist/ReactToastify.css'; //styling for the toast notification

// Layout passes the children of the header and footer component 

const Layout = ({children,title,description,keywords,author}) => {
    return (
        <div>
            <Helmet>
                <meta charSet='UTF-8' /> 
                <meta name='description' content={description|| Layout.defaultProps.description} /> 
                <meta name='keywords' content={keywords || Layout.defaultProps.keywords} /> 
                <meta name='author' content={author || Layout.defaultProps.author} /> 
                
                <title>{title || Layout.defaultProps.title}</title>
            </Helmet>
            <Header />
                <main style={{minHeight:'70vh'}}>
                    <ToastContainer/>
                    {children}
                </main>
            <Footer />
        </div>
    )
}


//these are default props for helmet tags if description fails to be found, default values will be used.
Layout.defaultProps = {
    title: 'Ecommerce App - Shop now',
    description: 'MERN Stack project - Ecommerce',
    keywords: 'MERN, React, Node, MongoDB',
    author: 'Ayush Srivastava',

}

export default Layout
