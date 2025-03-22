import React from 'react'
import Layout from '../../components/layout/Layout'
import UserMenu from '../../components/layout/UserMenu'

const UserOrders = () => {
    return (
        <Layout title={"Your Orders"}>
            <div className='container-fluid m-2 p-2'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserMenu/>
                    </div>
                    <div className='col-md-9'>
                        <h1>USERS Orders</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserOrders
