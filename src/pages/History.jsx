import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Divider, Paper } from '@mui/material';
import {Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDeleteForever } from "react-icons/md";
import { getHistoryAPI } from '../services/allAPI';

function History() {

//  State to store the resume history data (initially empty array)
  const [resume,setResume]= useState([])


// useEffect runs automatically when component mounts (first render)
  // [] = empty dependency array → runs only once
  useEffect(()=>{
    getHistory()
  },[])

  const getHistory = async ()=>{
    try{
      const result = await getHistoryAPI()
      // console.log(result);
      
      setResume(result.data)
    }catch(err){
      console.log(err);
      
    }
  }
console.log(resume);

  

  return (
    <div>

     <div className=''>
        <h1 className='text-center my-5'>Resume Download History</h1>
        <Link to={'/'} style={{marginTop:'-80px'}}className='float-end me-5'>Back</Link>
     </div>

      <Box className='container-fluid' component="section" sx={{ p: 2, textAlign: 'center' }} >
         <div className='row'>
            {
              resume.length>0?
              resume?.map((item,index)=>(
                <div key={index} className='col-md-4'>
              <Paper elevation={3} sx={{my:5 ,textAlign: 'center', p: 5 }}>
                 <div className='d-flex  align-items-center justify-content-evently'>
                   <h5>Review At:<br/>{item?.timeStamp}</h5>
                   <button  className='btn text-danger fs-4 ms-5'><MdDeleteForever /></button>
                 </div>

                <div className='border rounded p-3'> 
                 <img className='img-fluid' src={item?.imgURL} alt="resume" />
                </div>

              </Paper>
            </div>
              ))
              :
              <p>History is unavailable..!!</p>
            }
         </div>
        </Box>
    </div>
  )
}

export default History