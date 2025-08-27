import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaEdit } from "react-icons/fa";
import { TextField } from '@mui/material';
import { getResumeAPI} from '../services/allAPI';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};


function Edit({resumeID}) {
    const [userInput,setUserInput] = React.useState({})
    const [open, setOpen] = React.useState(false);
    // console.log(resumeID);
    console.log(userInput);
    
    React.useEffect(()=>{
        resumeID && getEditResumeDetails()
    },[resumeID])

    // edit

    const getEditResumeDetails = async()=>{
        try{
            const result = await getResumeAPI(resumeID)
            setUserInput(result?.data)
        }catch(err){
            console.log(err);
            
        }
    }
   
     const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <button onClick={handleOpen} className='btn fs-5 text-primary'><FaEdit /> </button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                        {/* personal details */}
                        <h3>Personal Details</h3>
                        <div className="d-flex row p-3">
                                        <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, name: e.target.value } })} value={userInput?.personalData?.name} />
                            
                                        <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value } })} value={userInput?.personalData?.jobTitle} />
                            
                                        <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, location: e.target.value } })} value={userInput?.personalData?.location} />
                        </div>

                        {/* contact Details */}
                        <h3>Contact Details</h3>
                        <div className="d-flex row p-3">
                           <TextField id="standard-basic-mail" label="Email" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, email: e.target.value } })} value={userInput?.personalData?.email} />
                           
                                       <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, phone: e.target.value } })} value={userInput?.personalData?.phone} />
                           
                                       <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, github: e.target.value } })} value={userInput?.personalData?.github} />
                           
                                       <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, linkedin: e.target.value } })} value={userInput?.personalData?.linkedin} />
                           
                                       <TextField id="standard-basic-portfolio" label=" Portfolio Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, portfolio: e.target.value } })} value={userInput?.personalData?.portfolio} />
                        </div>

                        {/* Education details */}

                        <h3>Education Details</h3>
                        <div className="d-flex row p-3">
                             <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, course: e.target.value } })} value={userInput?.education?.course} />
                            
                                        <TextField id="standard-basic-college" label="College" variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, college: e.target.value } })} value={userInput?.education?.college} />
                            
                                        <TextField id="standard-basic-university" label="University " variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, university: e.target.value } })} value={userInput?.education?.university} />
                            
                                        <TextField id="standard-basic-year" label="Year of Passout " variant="standard" onChange={e => setUserInput({ ...userInput, education: { ...userInput.education, year: e.target.value } })} value={userInput?.education?.year} />
                        </div>

                        {/* profesional details */}
                        <h3>Professional Details</h3>
                        <div className="d-flex row p-3">
                             <TextField id="standard-basic-role" label="Job or Internship" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} value={userInput?.experience?.jobRole} />
                            
                                        <TextField id="standard-basic-company" label="Company Name " variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} value={userInput?.experience?.company} />
                            
                                        <TextField id="standard-basic-clocation" label="Company Location" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} value={userInput?.experience?.jobLocation} />
                            
                                        <TextField id="standard-basic-duration" label="Duration " variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} value={userInput?.experience?.duration} />
                        </div>

                        {/* skills */}
                        <h3>Skills</h3>
                        <div className="d-flex align-items-center justify-content-between p-3">
                            <TextField sx={{ width: '400px' }} id="standard-basic-skill" label="Add Skills" variant="standard" />
                            <Button variant="text">ADD</Button>
                        </div>
                        <h5>Add Skills:</h5>
                        <div className="d-flex flex-wrap  justify-content-between my-3">
                            {/* span must duplicate acciording to the user added skill */}
                            <span className='btn btn-primary d-flex align-items-center justify-content-center'>REACT <button className="text-light btn">X</button></span>
                        </div>

                        {/* summary */}
                        <h3>Professional Summary</h3>

                        <div className="d-flex row p-3">
                            <TextField id="standard-basic-name" label="Write a short summary of yourself " variant="standard" multiline rows={4}
                                varients="standard" />
                        </div>

                    </Typography>
                    <button className='btn btn-primary'>Update</button>
                </Box>
            </Modal>

        </>
    )
}

export default Edit