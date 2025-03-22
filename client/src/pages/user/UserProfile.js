import React from 'react'
import Layout from '../../components/layout/Layout'
import UserMenu from '../../components/layout/UserMenu'

const UserProfile = () => {
    return (
        <Layout title={"Profile"}>
            <div className='container-fluid m-2 p-2'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserMenu/>
                    </div>
                    <div className='col-md-9'>
                        <h1>User Profile</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserProfile
