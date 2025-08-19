import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review and Submit'];


function Steps() {
  const skillSuggestionArray =['NODE JS','EXPRESS','MONGODB','REACT','ANGULAR','NEXT JS','BOOTSTRAP','TAILWINDCSS','GIT']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  // state for storing user input data
  const[userInput,setUserInput]=React.useState({
    personalData:{
      name:'',
      jobTitle:'',
      location:'',
      email:'',
      phone:'',
      github:'',
      linkedin:'',
      portfolio:''
    },
    education:{
      course:'',
      college:'',
      university:'',
      year:''
    },
    experience:{
      jobRole:'',
      company:'',
      jobLocation:'',
      duration:''
    },
    skills:[],
    summary:'',
  })
  console.log(userInput);
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  /* render the content corresponding to array index */
  const renderStepArrayContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,name:e.target.value}})}/>

            <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,jobTitle:e.target.value}})}/>

            <TextField id="standard-basic-location" label="Location" variant="standard"onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,location:e.target.value}})} />
          </div>
        </div>

      )
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-mail" label="Email" variant="standard"onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,email:e.target.value}})} />

            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,phone:e.target.value}})}/>

            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,github:e.target.value}})}/>

            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,linkedin:e.target.value}})}/>
            
            <TextField id="standard-basic-portfolio" label=" Portfolio Link" variant="standard"onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,portfolio:e.target.value}})} />
          </div>
        </div>

      )
      case 2: return (
        <div>
          <h3>Education Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,course:e.target.value}})}/>

            <TextField id="standard-basic-college" label="College" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,college:e.target.value}})}/>

            <TextField id="standard-basic-university" label="University " variant="standard"onChange={e=>setUserInput({...userInput,education:{...userInput.education,university:e.target.value}})} />

            <TextField id="standard-basic-year" label="Year of Passout " variant="standard"onChange={e=>setUserInput({...userInput,education:{...userInput.education,year:e.target.value}})} />

          </div>
        </div>

      )
      case 3: return (
        <div>
          <h3>Professional Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-role" label="Job or Internship" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,jobRole:e.target.value}})} />

            <TextField id="standard-basic-company" label="Company Name " variant="standard" />
            <TextField id="standard-basic-clocation" label="Company Location" variant="standard" />
            <TextField id="standard-basic-duration" label="Duration " variant="standard" />

          </div>
        </div>

      )
      case 4: return (
        <div>
          <h3>Skills</h3>
          <div className="d-flex align-items-center justify-content-between p-3">
            <TextField sx={{width:'400px'}} id="standard-basic-skill" label="Add Skills" variant="standard" />
            <Button variant="text">ADD</Button>
          </div>
          <h5>Suggestions:</h5>
          <div className="d-flex flex-wrap  justify-content-between my-3">
            {
              skillSuggestionArray.map(userSkill=>(
                <Button className='m-1' key={userSkill} variant="outlined">{userSkill}</Button>
              ))
            }
          </div>

          <h5>Add Skills:</h5>
          <div className="d-flex flex-wrap  justify-content-between my-3">
            {/* span must duplicate acciording to the user added skill */}
            <span className='btn btn-primary d-flex align-items-center justify-content-center'>REACT <button className="text-light btn">X</button></span>
          </div>
        </div>

      )
      case 5: return (
        <div>
          <h3>Professional Summary</h3>
      
          <div className="d-flex row p-3">
            <TextField id="standard-basic-name" label="Write a short summary of yourself " variant="standard" multiline rows={4} 
            defaultValue={"Enthusiastic and detail-oriented Full Stack Developer with hands-on experience in designing, developing, and deploying scalable web applications. Proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, PHP, and SQL. Skilled in building responsive user interfaces, integrating APIs, and optimizing application performance. Strong problem-solving abilities, collaborative team player, and passionate about delivering user-focused solutions from concept to deployment."} varients="standard"/>
          </div>
        </div>

      )

    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* view of each step */}
          <Box>
            {renderStepArrayContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>)
}

export default Steps