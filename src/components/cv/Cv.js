import React from 'react'
import Resume from '../../components/CV_FritzTriYofankaAnggitoMarpaung.pdf'
import "./Cv.css"

const Cv = () => {
  return (
    <div className='cv'>
        <a href={Resume} download className='btn'>Download CV</a>
        <a href="#contact"className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cv