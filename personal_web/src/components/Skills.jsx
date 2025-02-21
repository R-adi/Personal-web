import React from 'react'

const Skills = ({skills}) => {
  return (
    <div>
        <h2 className='text-2xl font-bold mt-6'>Skills</h2>
       <ul className='list-disc list-inside'>
        {skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
        ))}
       </ul>
    </div>
  )
}

export default Skills