import React, { useEffect, useState } from 'react'
import './ContributorIMG.css'
import axios from 'axios'



function ContributorIMG() {
  const [data,setData] = useState([])
  const getData = async()=>{
    await axios.get(`http://localhost:5000/api/v1/img/contributor`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
    .then(res=>{
      console.log(res.data);
      setData(res.data.imgDetails)
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
        <div >
            
              ​​​<table>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Image Type</th>
                  <th>Description</th>
                  <th>Image Format</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
      {data.map(el=>

                <tr>
                  <td width={220}><img src={'http://localhost:5000/resources/img/'+el.img_url} width={200}/></td>
                  <td>{el.title}</td>
                  <td>{el.type_img}</td>
                  <td className='desc'>{el.desc}</td>
                  <td>{el.image_size_format}</td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>

                </tr>
      )}
              </table>
        </div>
    </> 
  )
}

export default ContributorIMG