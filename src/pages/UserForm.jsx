import React, { useState } from 'react';
import Steps from '../components/Steps';
import Preview from '../components/Preview';

function UserForm() {
  // sate for storing user data
const [userInput, setUserInput] = React.useState({
    personalData: {
      name: '',
      jobTitle: '',
      location: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      portfolio: ''
    },
    education: {
      course: '',
      college: '',
      university: '',
      year: ''
    },
    experience: {
      jobRole: '',
      company: '',
      jobLocation: '',
      duration: ''
    },
    skills: [],
    summary: '',
  })

  // state for finish 
  const[finish,setFinish]=useState(false)

  // state for storing id of created resume
   const[resumeID,setResumeID] = useState("")

  return (
    <>
     {
      finish?
      <div style={{height:'100vh'}}className='d-flex justify-content-center align-items-center'>
         <Preview  setUserInput={setUserInput} resumeID={resumeID} userInput={userInput} finish={finish}/>
      </div>
      :
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-6">
            <Steps setResumeID={setResumeID} userInput={userInput} setUserInput={setUserInput}setFinish={setFinish}/>
          </div>
          <div className="col-lg-6">
            <Preview userInput={userInput}/>
          </div> 
        </div>
      </div>
      }
    </>
  );
}

export default UserForm
