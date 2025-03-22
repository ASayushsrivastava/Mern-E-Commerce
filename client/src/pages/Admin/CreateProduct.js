import React from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'

const CreateProduct = () => {
    return (
        <Layout title={"All products"}>
            <div className='container-fluid m-2 p-2'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu/>
                    </div>
                    <div className='col-md-9'>
                        <h1>All products</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateProduct
