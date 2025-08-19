import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <div>
        <section className="conatiner-fluid first" style={{ width: '100%', overflow: 'hidden', height: '450px', backgroundImage: "url('https://t4.ftcdn.net/jpg/05/28/84/33/360_F_528843399_TCBNPuQ7iZQyF7Y9CYeWf9jWHL27QoYv.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} id='part1' >

          <div className="row pt-5">
            <div className="col-12 col-md-4"></div>
            <div className="col-12 col-md-4 shadow border py-5 rounded mt-5 text-center  " style={{ backgroundColor: "rgb(255,255,255,0.5)" }}>
              <h3>Designed to get hired</h3>
              <h4>Your skills,your story,your next </h4>
              <h4>job--all in one</h4>
              <Link to={'/resume'}>
                <button className="btn btn-primary">Make Your Resume</button>
              </Link>
            </div>
            <div className="col-12 col-md-4"></div>
          </div>
        </section>
        {/* tools */}
        <section className='tool p-5'>
          <h1 className='text-center'>Tools</h1>
          <div className='row'>
            <div className='tool-content col-12 col-md-6 p-5'>
              <h4>Resume</h4>
              <p>create unlimited new resummes and easily edit them afterwards</p>

              <h4>Cover letter</h4>
              <p>easily write proffesional cover letter</p>

              <h4>Jobs</h4>
              <p>Automatically receive new and relevant job posting</p>

              <h4>Application</h4>
              <p>Effortlessly manage and track your job application in an organized manner.</p>
            </div>

            <div className='tool-image col-12 col-md-6'>
              <img className='img-fluid' src="https://img.freepik.com/free-psd/elegant-cv-template-with-cover-letter-template_1435-1636.jpg" alt="tools" />

            </div>
          </div>
        </section>

        {/*  */}

        <section className="first" style={{ width: '100%', overflow: 'hidden', height: '450px', backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/013/526/396/small_2x/working-together-group-of-young-modern-people-in-smart-casual-wear-discussing-business-and-smiling-while-sitting-in-the-creative-office-photo.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} id='part1' >
        </section>

        {/* testimoni */}
        <section className='tool p-5'>
          <h1 className='text-center my-3'>Testimony</h1>
          <div className='row align-items-center p-5'>
            <div className='tool-content col-12 col-md-6 p-5'>
              <h3 className='mb-5'>Trusted by proffesional worldwide</h3 >
              <p>At Livecareer,we don't just help you create resume - we help you to land job.wether you are</p>
              <p>easily write proffesional cover letter</p>
              <p>Automatically receive new and relevant job posting</p>

              <p>Effortlessly manage and track your job application in an organized manner.</p>
            </div>
{/* img firstt col */}
            <div className='tool-image col-12 col-md-6'>
              <div className='row'>
                <div className='col-3'>
                  <img className='w-100' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />

                  <img className='w-100 mt-2' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />

                   <img className='w-100 mt-2' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />
                </div>
{/*  2nd img*/}
<div className='col-3'>
                  <img className='w-100' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />

                  <img className='w-100 mt-2' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />

                   <img className='w-100 mt-2' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />
                </div>

                {/* 3rd img */}
                <div className='col-3'>
                  <img className='w-100' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />

                  <img className='w-100 mt-2' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />

                   <img className='w-100 mt-2' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />
                </div>
                {/* 4th img */}
                <div className='col-3'>
                  <img className='w-100' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />

                  <img className='w-100 mt-2' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />

                   <img className='w-100 mt-2' src="https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png" alt="img" />
                </div>
                
              </div>
            </div>

          </div>
        </section>
        
      </div>
    </>
  )
}

export default LandingPage
