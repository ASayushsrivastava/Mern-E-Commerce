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
    const [answer,setAnswer] = useState('')
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false);


    // creating the custom function for onSubmit
    // prevents the default the behavior of react to referesh the page after submitting the form.
    const handleSubmit = async(e) =>{
        e.preventDefault()

        try{
            const res = await axios.post('/api/v1/auth/register',{
                name,
                email,
                password,
                phone,
                address,
                answer})   //send data to the server.
            if(res && res.data.success){
                toast.success(res&& res.data.message)
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
                <div className="mb-1">
                    <label htmlFor='exampleInputName' className='form-label'>
                    </label>
                    <input value={name} 
                    onChange={(e) => setName(e.target.value)}
                    type='text' 
                    className='form-control' 
                    id='exampleInputName'
                    placeholder='Enter your Name'
                    required/>
                </div>

                <div className="mb-1">
                    <label htmlFor='exampleInputEmail' className='form-label'>
                        
                    </label>
                    <input value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    type='email' 
                    className='form-control' 
                    id='exampleInputEmail'
                    placeholder='Enter your Email'
                    required/>
                </div>

                <div className="mt-4 mb-1 d-flex">
                    <label htmlFor='exampleInputPassword' className='form-label'>
                        
                    </label>
                    <input value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    type={visible ? "text":"password"} 
                    className='form-control' 
                    id='exampleInputPassword'
                    placeholder='Enter your Password'
                    required/>
                    <span className="input-group-text " onClick={() => setVisible(!visible)}>
                        <i className={visible ? "bi bi-eye-slash" : "bi bi-eye"} />
                    </span>
                </div>

                <div className="mb-1">
                    <label htmlFor='exampleInputPhone' className='form-label'>
                        
                    </label>
                    <input value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    type='text' 
                    className='form-control' 
                    id='exampleInputPhone'
                    placeholder='Enter your Phone'
                    required/>
                </div>

                <div className="mb-1">
                    <label htmlFor='exampleInputAddress' className='form-label'>
                        
                    </label>
                    <input value={address} 
                    onChange={(e) => setAddress(e.target.value)}
                    type='text' 
                    className='form-control' 
                    id='exampleInputAddress'
                    placeholder='Enter your Address'
                    required/>
                </div>

                <div className="mb-1">
                    <label htmlFor='exampleInputEmail' className='form-label'>
                        
                    </label>
                    <input value={answer} 
                    onChange={(e) => setAnswer(e.target.value)}
                    type='text' 
                    className='form-control' 
                    id='exampleInputEmail'
                    placeholder='Enter your favourite show'
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
