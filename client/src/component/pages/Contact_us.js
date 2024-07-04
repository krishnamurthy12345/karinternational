import React from 'react'

const ContactUs = () => {
  return (
    <div>
         <div className='d-flex gap-5 bg-primary'>
        <div>
        <img src='https://www.karinternationalinfotech.com/img/logo1.png' style={{height:'80px', width:'80px'}} alt='' />
        </div>
        <div>
          <h6>Quick Links</h6>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>service</li>
          </ul>
        </div>
        <div>
          <h6>Follow & Connect With Us</h6>
          <ul>
            <li>Home</li>
            <li>About Us</li> 
            <li>service</li>
          </ul>
        </div>
        <div>
          <h6>NewsLetter</h6>
          <p>subscribe to our newsletter to get allour news in your inbox.</p>
          <input type='text' placeholder='Email Address' />
        </div>
      </div>
    </div>
  )
}

export default ContactUs