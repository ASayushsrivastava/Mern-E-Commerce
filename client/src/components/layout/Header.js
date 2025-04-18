// this is the file for Header file.
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// adding the context in header section to change the navigation bar
import { useAuth } from '../../context/auth'
// importing toast notification
import toast from 'react-hot-toast'
import "../../styles/AuthStyles.css";



// NavLink is used to navigate through the website and routes because anchor tags cannot be used in the react application.
// Link is used for the "navbar-brand" containing the title of the website.
const Header = () => {
    const [auth,setAuth] = useAuth()
    const handleLogout =() =>{
        setAuth({
            ...auth,
            user: null,
            token: null
        })
        localStorage.removeItem('auth')
        toast.success('Logged out successfully!')
    }
    return (
        // navbar component using NavLink. 
        <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <Link to= '/' className="navbar-brand"> 🛍️ E Commerce Application</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
            <NavLink to = "/" className="nav-link ">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to = "/category" className="nav-link" >Category</NavLink>
            </li>
            {
                !auth.user ? (<>
                    <li className="nav-item">
                    <NavLink to = "/register" className="nav-link" href="#">Register</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to = "/login" className="nav-link" href="#">Login</NavLink>
                    </li>
                    </>) :
                    (<>
                        <li className='nav-item dropdown'>
                            <NavLink className ='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                {auth?.user?.name}
                            </NavLink>
                            <ul className='dropdown-menu'>
                                <li><NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin":"user" }`} className='dropdown-item' >Dashboard</NavLink></li>
                                <li><NavLink onClick={handleLogout} to = "/login" className="dropdown-item" href="#">Logout </NavLink></li>
                            </ul>
                        </li>
                    </>)
            }
            <li className="nav-item">
            <NavLink to = "/cart" className="nav-link" href="#">Cart (0)</NavLink>
            </li>
        </ul>
        </div>
    </div>
    </nav>

        </>
    )
}

export default Header
