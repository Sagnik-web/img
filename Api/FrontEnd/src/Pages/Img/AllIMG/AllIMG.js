import React, { useEffect, useState } from 'react'
import './AllIMG.css'
import Layout from '../../../Component/Layout'
import axios from 'axios'

function AllIMG() {
  const [imgData, setImgData] = useState([])

  const getData = async()=>{
    const responce =  await axios.get('http://localhost:5000/api/v1/img')
    await setImgData(responce.data.imgDetails)
  }
  useEffect(()=>{
   getData()
   console.log(imgData);

  },[])

  return (
    <>
      

        ​​​<table>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Image Type</th>
                  <th>Description</th>
                  <th>Image Format</th>
                  <th>View</th>
                </tr>
      {imgData.map(el=>

                <tr>
                  <td width={220}><img src={'http://localhost:5000/resources/img/'+el.img_url} width={200}/></td>
                  <td>{el.title}</td>
                  <td>{el.type_img}</td>
                  <td className='desc'>{el.desc}</td>
                  <td>{el.image_size_format}</td>
                  <td><button>See</button></td>
              

                </tr>
      )}
              </table>

    </>
  )
}

export default AllIMG