import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <div>
      <h1 className='text-center mt-5'>Create a job-winning Resume in minutes</h1>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-12 col-md-4 box border py-5 rounded mt-5 text-center shadow fs-4">
            <FaFileAlt />
            <h3>Add Your Information</h3>
            <p>Add pre-written examples to each section</p>
            <h5>Step 1</h5>
          </div>
          <div className="col-md-1"></div>
          <div className="col-12 col-md-4 box border py-5 rounded mt-5 text-center shadow fs-4">
            <FaFileDownload />
            <h3>Download your Resume</h3>
            <p>Download and start applying</p>
            <h5>Step 2</h5>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div className='d-flex align-tems-center justify-content-center mb-4'><button className='btn btn-primary'><Link to={'/form'} className='text-light text-decoration-none'>Let's Start</Link></button></div>
    </div>
  )
}

export default ResumeGenerator