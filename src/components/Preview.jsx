import React from 'react'
import Box from '@mui/material/Box';
import { Divider, Paper } from '@mui/material';
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaDownload } from "react-icons/fa6";
import { MdManageHistory } from "react-icons/md";
import Edit from './Edit';


function Preview() {
  return (
    <>
      <div>
        {/* stack creation */}
        <Stack direction={'row'} sx={{ marginTop: '50px', justifyContent: 'flex-end' }}>
             <Stack direction={'row'} sx={{alignItems:'center'}}>

              {/* dowmload */}
              <button className='btn fs-5 text-primary'> <FaDownload /></button>
              
              {/* edit */}
              <div>
                <Edit/>
              </div>

              {/* history */}
              <Link to={'/history'} className='btn fs-5 text-primary'>
             <MdManageHistory />
              </Link>
 
                {/* back */}
                <Link to={'/resume'} className='btn fs-5 text-primary'>
                 Back
              </Link>

             </Stack>
        </Stack>

        <Box component="section" sx={{ p: 2, textAlign: 'center' }} >
          <Paper elevation={3} sx={{my:5 ,textAlign: 'center', p: 5 }}>
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
          </Paper>
        </Box>

      </div>
    </>
  )
}

export default Preview