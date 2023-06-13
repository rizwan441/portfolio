import React from 'react'
import CV from './../Components/assets/CV.pdf'
import imag from './../Components/assets/imag.png'

const CVButton = () => {
  return (
      <div>
          <img src={imag} alt="apni" srcset="" />
          <a href={CV} download>DownLoad Resume</a>
          <a href='#contact'>Lets talk</a>
      </div>
  )
}

export default CVButton