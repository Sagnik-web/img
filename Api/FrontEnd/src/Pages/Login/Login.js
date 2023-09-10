import React from 'react'
import './Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'

function Login() {

  const { register, handleSubmit, watch} = useForm();
  const navigate = useNavigate()
  const onSubmit = data =>{ 

    console.log(data);
    axios.post(`http://localhost:5000/api/v1/auth/login`,data)
         .then(res=>{
            console.log(res.data);
            localStorage.setItem('token',res.data.data)
            localStorage.setItem('name',res.data.name)
            localStorage.setItem('isAdmin',res.data.isAdmin)
            localStorage.setItem('isContributor',res.data.isContributor)

            if(res.data.isAdmin){
              navigate('/admin/img/all')
            }else if(res.data.isContributor){
              navigate('/contributor/main')
            }else if(res.data.success){
              navigate('/img/all')
            }
            else{
              navigate('/')
            }
         })
         .catch(err=>{
            console.log(err);
         })
  };


  return (
    <div>
      <h2>Login</h2>  
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Email</h4>
        <input placeholder='abc@domain.com' type='text' {...register('email')} /><br></br>
        <h4>Password</h4>
        <input placeholder='XXXXXXXXXX' type='password' {...register('password')}/><br></br>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Login