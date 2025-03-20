import React,{useEffect,useState} from 'react'
// to redirect unauthenticated user
import { useNavigate } from 'react-router-dom'

const Spinner = () => {
    const [count,setCount] = useState(5)
    const navigate = useNavigate()

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevValue)=> --prevValue)
        },1000)
        count===0 && navigate('/login')
        return ()=> clearInterval(interval)
    },[count, navigate])
    return (
        <>
            <div class="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
                <h1 className='Text-center'>Redirecting in .... {count} Seconds</h1>
                <div class="spinner-grow" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        </>
    )
}

export default Spinner
