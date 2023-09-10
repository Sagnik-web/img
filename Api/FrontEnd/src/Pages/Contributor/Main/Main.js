import React, { useState } from 'react'
import './Main.css'
import axios from 'axios'
import {useForm} from 'react-hook-form'


function Main() {
  const [data, setData] = useState([])
  const [imgName,setImgName] = useState('')
  const [svgName,setSvgName] = useState('')

  const {register,handleSubmit, watch} = useForm()

  const onSubmit = (data) =>{
    axios.post(`http://localhost:5000/api/v1/img`,{...data, img_url:imgName, svg_url:svgName},{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
         .then(res =>{
            console.log(res.data.imgDetails);
            setData(res.data.imgDetails)
         })
         .catch(err =>{
            console.log('Error: ',err);
         })
  }

  const imgUpload = async(file) =>{
    const formData = new FormData()
    formData.append('img',file)
    // formData.append('fill_attachment',file)

    await axios.post('http://localhost:5000/api/v1/upload/img',formData)
          .then(res=>{
            console.log(res.data);
            setImgName(res.data.data)
          })
          .catch(err=>{
            console.log('Error: ',err);
          })
  }

  const svgUpload = async(file) =>{
    const formData = new FormData()
    formData.append('svg',file)
    // formData.append('fill_attachment',file)

    await axios.post('http://localhost:5000/api/v1/upload/svg',formData)
          .then(res=>{
            console.log(res.data);
            setSvgName(res.data.data)
          })
          .catch(err=>{
            console.log('Error: ',err);
          })
  }

  return (
    <div>
      <input type='file' onChange={(e)=>imgUpload(e.target.files[0])} />
        <input type='file' onChange={(e)=>svgUpload(e.target.files[0])} />
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <h4>Title</h4>
        <input type='text' placeholder='Title' {...register('title')}/>
        <h4>Type IMG</h4>
        <input type='text' placeholder='desc' {...register('type_img')}/>
        <h4>Desc</h4>
        <input type='text' placeholder='type_img' {...register('desc')}/>
        <h4>Image Size Format</h4>
        <input type='text' placeholder='image_size_format' {...register('image_size_format')}/><br></br>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Main