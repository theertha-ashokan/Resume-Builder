import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Divider, Paper } from '@mui/material';
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaDownload } from "react-icons/fa6";
import { MdManageHistory } from "react-icons/md";
import Edit from './Edit';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { addDownloadHistoryAPI } from '../services/allAPI';



function Preview({userInput,finish,resumeID}) {
 const [downloadStatus,setDownloadStatus] = useState(false)

  const downloadCV = async()=>{
    // get element for taking screenshot
    const input = document.getElementById("result")
    const canvas = await html2canvas(input,{scale:2})
    const imgURL = canvas.toDataURL('image/png')

    const pdf = new jsPDF()
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    pdf.addImage(imgURL,'PNG',0,0,pdfWidth,pdfHeight)
    pdf.save('resume.pdf')

    // get date
    const localTimeDate = new Date()
    const timeStamp = `${localTimeDate.toLocaleDateString()},${localTimeDate.toLocaleTimeString()}`
    // console.log(timeStamp);
    

    // add downloaded CV to history json using api call
    try{
      const result = await addDownloadHistoryAPI({...userInput,imgURL,timeStamp})
      console.log(result);
      setDownloadStatus(true)
      
    }catch(err){
      console.log(err);
      
    }

  }

  
  return (
    <>
     
        {/* stack creation */}
       {userInput.personalData.name!=""&&

          <>
          
            {
              finish &&
              <Stack direction={'row'} sx={{ marginTop: '50px', justifyContent: 'flex-end' }}>
                 <Stack direction={'row'} sx={{alignItems:'center'}}>
    
                  {/* download */}
                  <button onClick={downloadCV} className='btn fs-5 text-primary'> <FaDownload /></button>

                   {/* edit */}
                  <div>
                    <Edit resumeID={resumeID}/>
                  </div>

                  {
                    downloadStatus &&
                  <>
                  {/* history */}
                  <Link to={'/history'} className='btn fs-5 text-primary'>
                 <MdManageHistory />
                  </Link>
                  </>
                 }
     
                    {/* back */}
                    <Link to={'/resume'} className='btn fs-5 text-primary'>
                     Back
                  </Link>
    
                 </Stack>
            </Stack>
            }
           
    
            <Box component="section" sx={{ p: 2, textAlign: 'center' }} >
              <Paper id="result" elevation={3} sx={{my:5 ,textAlign: 'center', p: 5 }}>
                <h2>{userInput.personalData.name}</h2>
                <h6>{userInput.personalData.jobTitle}</h6>
                <p><span>{userInput.personalData.location}</span>|<span>{userInput.personalData.email}</span>|<span>{userInput.personalData.phone}</span></p>
                <p>
                  <Link href={""}>{userInput.personalData.github}</Link>|
                  <Link href={""}>{userInput.personalData.linkedin}</Link>|
                  <Link href={""}>{userInput.personalData.portfolio}</Link>
                </p>
                <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
    
                <p className="fs-5 text-start">{userInput.summary}</p>
                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
                <h5>{userInput.education.course}</h5>
                <p><span>{userInput.education.college}</span>|<span>{userInput.education.university}</span>|<span>{userInput.education.year}</span></p>
    
                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
                <h5>{userInput.experience.jobRole}</h5>
                <p><span>{userInput.experience.company}</span>|<span>{userInput.experience.jobLocation}</span>|<span>{userInput.experience.duration}</span></p>
                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}> Skills</Divider>
                <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>
                  <Button variant="contained">{userInput.skills}</Button>
                </Stack>
              </Paper>
            </Box>
          </>
       }

      
    </>
  )
}

export default Preview