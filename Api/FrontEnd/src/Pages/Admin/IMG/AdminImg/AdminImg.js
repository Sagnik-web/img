import React,{useEffect, useState} from 'react'
import './AdminImg.css'
import axios from 'axios'


function AdminImg() {
  const [data,setData] = useState([])
  const getData = () =>{

    axios.get(`http://localhost:5000/api/v1/img`,{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        }})
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
     

​​​<table>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Image Type</th>
                  <th>Description</th>
                  <th>Image Format</th>
                  <th>View</th>
                </tr>
      {data.map(el=>

                <tr>
                  <td width={220}><img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" width={200}/></td>
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

export default AdminImg