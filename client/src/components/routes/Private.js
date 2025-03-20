import {useState, useEffect} from 'react'
// to spread the data
import {useAuth} from '../../context/auth'
// to perform the routing after success
import {Outlet} from 'react-router-dom'
import axios from 'axios'
import Spinner from '../Spinner'

export default function PrivateRoute(){
    const [ok,setOk] = useState(false)
    const [auth, setAuth ] = useAuth() 

    useEffect(()=>{
        const authCheck = async()=>{
            try {
                const res = await axios.get('/api/v1/auth/user-auth');
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.error("Auth check failed:", error);
                setOk(false);
            }
        }
        if(auth?.token) authCheck()
    },[auth?.token])

    return ok ? <Outlet/>:<Spinner />
}