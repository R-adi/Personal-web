import React from 'react'

const About = ({about}) => {
  return (
    <div>
        <h1 className='text-4xl font-bold mb-4'>About me</h1>
        <p className='text-lg'>{about}</p>
    </div>
  )
}

export default About