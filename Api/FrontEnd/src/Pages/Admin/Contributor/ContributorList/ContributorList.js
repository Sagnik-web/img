import React, { useEffect, useState } from 'react'
import './ContributorList.css'
import axios from 'axios';

function ContributorList() {
  const [status, setStatus] = useState('')

  const [data,setData] = useState([])
  const getData = async() =>{

  await axios.get(`http://localhost:5000/api/v1/admin/contributor`,{
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }})
      .then(res=>{
        console.log(res.data.contributorDetails);
        setData(res.data.contributorDetails)
      }).catch(err=>{
        console.log(err);
      })
  }
  
  useEffect(()=>{
    getData()
  },[])

  

  const updateStatus = async(contributorID,status)=>{
    await axios.patch(`http://localhost:5000/api/v1/admin/contributor/status`,{contributorID:contributorID,status:status},{
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }})
      .then(res=>{
        console.log(res.data.contributorDetails);
        getData()
      }).catch(err=>{
        console.log(err);
      })
  }



  return (
    <>
      <div>ContributorList</div>
     

​<table>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
      {data.map(el=>!el.isAdmin?

                <tr>
                  {/* <td width={220}><img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" width={200}/></td> */}
                  <td>{el.firstName} {el.lastName}</td>
                  <td>{el.email}</td>
                  <td >{el.phoneNumber}</td>
                  <td >{el.address}</td>
                  <td >{el.status}</td> 
                  {el.status == 'approve'? null:<td><button onClick={()=>updateStatus(el._id,'approve')}>Approve</button></td>}
                  {el.status == 'block'? null:<td><button onClick={()=>updateStatus(el._id,'block')}>Block</button></td>}

                  <td><button>Delete</button></td>
              

                </tr>:null
      )}
              </table>
    </>
  )
}

export default ContributorList