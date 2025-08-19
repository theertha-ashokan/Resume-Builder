import React from 'react'
import Box from '@mui/material/Box';
import { Divider, Paper } from '@mui/material';
import {Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDeleteForever } from "react-icons/md";

function History() {
  return (
    <div>

     <div className=''>
        <h1 className='text-center my-5'>Resume Download History</h1>
        <Link to={'/'} style={{marginTop:'-80px'}}className='float-end me-5'>Back</Link>
     </div>

      <Box className='container-fluid' component="section" sx={{ p: 2, textAlign: 'center' }} >
         <div className='row'>
            <div className='col-md-4'>
              <Paper elevation={3} sx={{my:5 ,textAlign: 'center', p: 5 }}>
                 
                 <div className='d-flex  align-items-center justify-content-evently'>
                   <h5>Review At:<br/>06/06/2025,13/05/2025</h5>
                   <button  className='btn text-danger fs-4 ms-5'><MdDeleteForever /></button>
                 </div>
                <div className='border rounded p-3'> 
                  <h2>Name</h2>
                  <h6>Job Title</h6>
                  <p><span>location</span>|<span>Email</span>|<span>Phone</span></p>
                  <p>
                    <Link href={""}>GitHub</Link>|
                    <Link href={""}>Linkedin</Link>|
                    <Link href={""}>Portfolio</Link>
                  </p>
                  <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
      
                  <p className="fs-5 text-start">User Summary</p>
                  <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
                  <h5>User Education</h5>
                  <p><span>College</span>|<span>University</span>|<span>Year</span></p>
      
                  <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
                  <h5>User Job</h5>
                  <p><span>Company</span>|<span>Location</span>|<span>Duration</span></p>
                  <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}> Skills</Divider>
                  <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>
                    <Button variant="contained">User Skills</Button>
                  </Stack>
                </div>

              </Paper>
            </div>
         </div>
        </Box>
    </div>
  )
}

export default History