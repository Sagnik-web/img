import React,{useEffect, useState} from 'react'
import './User.css'
import axios from 'axios'


function User() {
  const [data,setData] = useState([])
  const getData = () =>{

    axios.get(`http://localhost:5000/api/v1/admin/user`,{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        }})
        .then(res=>{
          console.log(res.data);
          setData(res.data.user)
        }).catch(err=>{
          console.log(err);
        })
    }
    
    useEffect(()=>{
      getData()
    },[])
  return (
    <>
     

​<table>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
      {data.map(el=>!el.isAdmin?

                <tr>
                  {/* <td width={220}><img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" width={200}/></td> */}
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td >{el.isContributor ? 'Contributor':'User'}</td>
                  <td><button>Block</button></td>
                  <td><button>Delete</button></td>
              

                </tr>:null
      )}
              </table>
    </>
  )
}

export default User