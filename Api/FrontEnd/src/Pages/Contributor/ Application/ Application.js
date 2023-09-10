import React from 'react'
import './ Application.css'
import axios from 'axios'
import {useForm} from 'react-hook-form'

function  Application() {

  const {register,handleSubmit,watch} = useForm()
  const onSubmit = (data) =>{
    axios.post(`http://localhost:5000/api/v1/contributor`,data,{
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }}).then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
  }
  
  return (
    <div> 
      <p>Application</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p>firstName</p>
        <input placeholder='' {...register('firstName')}/>
        <p>lastName</p>
        <input placeholder='' {...register('lastName')}/>
        <p>email</p>
        <input placeholder='' {...register('email')}/>
        <p>phoneNumber</p>
        <input placeholder='' {...register('phoneNumber')}/>
        <p>website</p>
        <input placeholder='' {...register('website')}/>
        <p>address</p>
        <input placeholder='' {...register('address')}/><br></br>
        <input type='submit'/>
      </form>

    </div>
  )
}

export default  Application