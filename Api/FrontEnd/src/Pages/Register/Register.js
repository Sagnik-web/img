import React from 'react'
import './Register.css'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function Register() {
    const { register, handleSubmit, watch} = useForm();
    const navigate = useNavigate()
    const onSubmit = data => {
        
        console.log(data);
        axios.post(`http://localhost:5000/api/v1/auth/register`,data)
             .then(res=>{
                console.log(res.data);
                navigate('/login')
             })
             .catch(err=>{
                console.log(err);
             })
    }
  
  
    return (
      <div>
        <h2>Register</h2>  
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Name</h4>
          <input placeholder='ABC' type='text' {...register('name')} /><br></br>  
          <h4>Email</h4>
          <input placeholder='abc@domain.com' type='text' {...register('email')} /><br></br>
          <h4>Password</h4>
          <input placeholder='XXXXXXXXXX' type='password' {...register('password')}/><br></br>
          <input type='submit'/>
        </form>
      </div>
    )
}

export default Register