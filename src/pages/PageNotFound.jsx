import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img width={'400px'} src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" alt="" />
      
      <h5 className='my-4'>Sorry,we couldn't find the page</h5>
      <Link to='/'><button className='btn btn-primary'>Go to home</button></Link>

    </div>
  )
}

export default PageNotFound