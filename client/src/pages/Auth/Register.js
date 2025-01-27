// Register route for the registration page

import React,{useState} from 'react'    //useState for sotring the variables (user input in Form) and send to the server.
import Layout from '../../components/layout/Layout' //Wrapped around the Layout component. 
import { toast } from 'react-toastify'  //toast notification for successful registration.
import axios from 'axios'   //axios for POST api to connect to the backend.
import { useNavigate } from 'react-router-dom'  //to redirect user after successful registration to the login route.
import '../../styles/AuthStyles.css'


const Register = () => {

    //states for useState to store the input data.
    const [name,setName] = useState('') 
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const navigate = useNavigate()


    // creating the custom function for onSubmit
    // prevents the default the behavior of react to referesh the page after submitting the form.
    const handleSubmit = async(e) =>{
        e.preventDefault()

        try{
            const res = await axios.post('/api/v1/auth/register',{name,email,password,phone,address})   //send data to the server.
            if(res.data.success){
                toast.success(res.data.message)
                navigate('/login')      //redirect to the login page.
            }
            else{
                toast.error(res.data.message)
            }
        }
        catch(e){
            console.log(e)
            toast.error('Something went wrong')
        }
        

        // console.log(name,email,password,phone,address)
        // toast.success('Register Successfully')
    }

    // testing env
    // console.log(process.env.REACT_APP_API)  // the env variable is not working


    // Registration Form
    return (
        <Layout title = {"Register Page"}>
            <div className='form-container'>
            
            
            <form onSubmit={handleSubmit}>
                <h4 className='title'>REGISTER FORM</h4> 
                <div className="mb-3">
                    <label htmlFor='exampleInputName' className='form-label'>
                        Enter your Name
                    </label>
                    <input value={name} 
                    onChange={(e) => setName(e.target.value)}
                    type='text' 
                    className='form-control' 
                    id='exampleInputName'
                    required/>
                </div>

                <div className="mb-3">
                    <label htmlFor='exampleInputEmail' className='form-label'>
                        Enter your Email
                    </label>
                    <input value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    type='email' 
                    className='form-control' 
                    id='exampleInputEmail'
                    required/>
                </div>

                <div className="mb-3">
                    <label htmlFor='exampleInputPassword' className='form-label'>
                        Enter your Password
                    </label>
                    <input value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    type='password' 
                    className='form-control' 
                    id='exampleInputPassword'
                    required/>
                </div>

                <div className="mb-3">
                    <label htmlFor='exampleInputPhone' className='form-label'>
                        Enter your Phone
                    </label>
                    <input value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    type='text' 
                    className='form-control' 
                    id='exampleInputPhone'
                    required/>
                </div>

                <div className="mb-3">
                    <label htmlFor='exampleInputAddress' className='form-label'>
                        Enter your Address
                    </label>
                    <input value={address} 
                    onChange={(e) => setAddress(e.target.value)}
                    type='text' 
                    className='form-control' 
                    id='exampleInputAddress'
                    required/>
                </div>


                <button type='submit' className='btn btn-primary'>
                    REGISTER
                </button>



            </form>

            </div>
        </Layout>
    )
}

export default Register
