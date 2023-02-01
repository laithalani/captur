import Hero from '../components/Hero'
import React from 'react'
import Contact from '../components/Contact'

const contact = () => {

  return (
    <div>
        <Hero heading='Contact' message='Submit the form below'/>
        <Contact/>
    </div>
  )
}


export default contact