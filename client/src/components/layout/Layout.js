import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import {Helmet} from 'react-helmet'

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
                <main style={{minHeight:'75vh'}}>
                    {children}
                </main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Ecommerce App - Shop now',
    description: 'MERN Stack project - Ecommerce',
    keywords: 'MERN, React, Node, MongoDB',
    author: 'Ayush Srivastava',

}

export default Layout
