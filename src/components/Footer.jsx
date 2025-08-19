import React from 'react'
import { SiMaildotcom } from "react-icons/si";
import { GiRotaryPhone } from "react-icons/gi";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";

function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'purple'}}className='d-flex justify-content-center align-items-center text-light '>
      <div className='text-center'>
        <h1 >Contact Us</h1>
        <h4><SiMaildotcom /> resumebuilder@gmail.com</h4>
        <h5><GiRotaryPhone /> 62820000693</h5>
        <h4>Connect With Us</h4>

        <div className="d-flex justify-content-evenly fs-4 mt-3">
          <PiWhatsappLogoDuotone className='me-3'/>
           <PiFacebookLogoBold className='me-3' />
           <SlSocialInstagram />
        </div>
        <p className='mt-3'>Designed & Build with 💖 React</p>
      </div>

    </div>
  )
}

export default Footer